'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mongodb = require('mongodb');

var _bson = require('bson');

var schema = {};

function loadDatabase(uri, options, callback) {
  try {
    _mongodb.MongoClient.connect(uri, function (err, mongodb) {
      if (err) return callback(err);
      // console.log('Connected correctly to server');
      mongodb.collections().then(function (collections) {
        createTables(collections, options, function (err, schema) {
          mongodb.close();
          callback(err, schema);
        });
      }).catch(function (error) {
        return callback(error);
      });
    });
  } catch (err) {
    return callback(err);
  }
}

function createTables(collections, options, callback) {
  var idx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (idx < collections.length) {
    var tableName = collections[idx].collectionName;
    return collections[idx].find().toArray(function (error, documents) {
      if (error) console.error(error);
      if (options.only || options.ignore) {
        if (options.only && options.only.find(function (only) {
          return tableName === only;
        })) {
          createTable(tableName, documents, function () {
            return createTables(collections, options, callback, ++idx);
          });
        } else if (options.ignore && !options.ignore.find(function (ignore) {
          return tableName.includes(ignore);
        })) {
          createTable(tableName, documents, function () {
            return createTables(collections, options, callback, ++idx);
          });
        } else {
          return createTables(collections, options, callback, ++idx);
        }
      } else {
        createTable(tableName, documents, function () {
          return createTables(collections, options, callback, ++idx);
        });
      }
    });
  }

  return callback(null, schema);
}

function createTable(tableName, documents, callback, columns) {
  var idx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, queries: {}, rows: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = { type: 'INTEGER PRIMARY KEY UNIQUE', order: 0 };
    schema[tableName].queries.create = 'CREATE TABLE ' + tableName + ' (yosql_id INTEGER PRIMARY KEY UNIQUE);';
    return createTable(tableName, documents, callback, columns, idx);
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], function () {
      return createTable(tableName, documents, callback, columns, ++idx);
    });
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(function (key) {
      return parseValue(_typeof(documents[0][key])) !== 'object';
    });
    return addColumn(tableName, columns[idx], function () {
      return createTable(tableName, documents, callback, columns, ++idx);
    });
  }
  columns = columns || [];
  return insertRows(tableName, columns, documents, callback);
}

function parseValue(value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    if (value instanceof Date) {
      return value.toISOString();
    } else if (Array.isArray(value)) {
      return value;
    } else if (_bson.ObjectId.isValid(value)) {
      return value.toString();
    } else if (value === null) {
      return '';
    } else {
      return [value];
    }
  } else if (value === undefined) {
    return '';
  } else if (typeof value === 'string') {
    return value.replace(/\'/g, "''");
  }
  return value;
}

function insertRows(tableName, columns, documents, callback) {
  documents.forEach(function (document) {
    document.yosql_id = ++schema[tableName].length;
    insertRow(tableName, columns, document);
  });

  var columnNames = [];

  Object.keys(schema[tableName].columns).forEach(function (column) {
    columnNames[schema[tableName].columns[column].order] = column;
  });

  var inserts = schema[tableName].rows.map(function (row) {
    var filledRow = [];
    columnNames.forEach(function (column, idx) {
      filledRow[idx] = row.hasOwnProperty(column) ? row[column] : 'NULL';
    });
    return '\'' + filledRow.join("', '") + '\'';
  }).join('), (');

  schema[tableName].queries.insert = 'INSERT INTO ' + tableName + ' (' + columnNames.join(', ') + ') VALUES (' + inserts + ');';
  return callback(null, schema);
}

function insertRow(tableName, columns, document) {
  var newColumn = Object.keys(document).find(function (key) {
    return !columns.includes(key);
  });

  if (newColumn) {
    document[newColumn] = parseValue(document[newColumn]);
    if (Array.isArray(document[newColumn])) {
      if (document[newColumn].length) {
        if (typeof parseValue(document[newColumn][0]) === 'string') {
          document[newColumn] = document[newColumn].map(function (item) {
            var obj = {};
            obj[newColumn] = parseValue(item);
            return obj;
          });
        }
        document[newColumn].map(function (obj) {
          return obj || {};
        }).forEach(function (obj) {
          return obj[tableName + '_yosql_id'] = document['yosql_id'];
        });
        // console.log(`${tableName}_${newColumn}`);
        return createTable(tableName + '_' + newColumn, document[newColumn], function () {
          delete document[newColumn];
          return insertRow(tableName, columns, document);
        });
      } else {
        delete document[newColumn];
        return insertRow(tableName, columns, document);
      }
    }
    columns.push(newColumn);
    return addColumn(tableName, newColumn, function () {
      insertRow(tableName, columns, document);
    });
  }

  var row = {};
  // const cleanColumns = [];
  columns.forEach(function (column) {
    // cleanColumns.push(`'${column}'`);
    row[column] = parseValue(document[column]);
  });
  return schema[tableName].rows.push(row);
}

function addColumn(tableName, column, callback) {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = { type: 'TEXT', order: Object.keys(schema[tableName].columns).length };
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].queries.create = schema[tableName].queries.create.replace(');', ', ' + column + ' ' + schema[tableName]['columns'][column].type + ');');
  return callback(null, schema);
}

function runQuery(query, filename, callback) {
  try {
    var database = new sqlite3.Database(filename, function (err) {
      if (err) console.log(err.message);
    });
    database.all(query, function (err, rows) {
      if (err) {
        return callback(err);
      }
      callback(err, rows);
    });
  } catch (err) {
    callback(err);
  }
}

module.exports = {
  loadDatabase: loadDatabase,
  createTables: createTables,
  createTable: createTable,
  runQuery: runQuery
};