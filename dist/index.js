'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mongodb = require('mongodb');

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

var _bson = require('bson');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDatabase(fileName) {
  return new _sqlite2.default.Database(fileName, function (err) {
    if (err) console.log(err.message);
  });
}

function loadDatabase(uri, filename, options, callback) {
  try {
    var database = createDatabase(filename);
    _mongodb.MongoClient.connect(uri, function (err, mongodb) {
      if (error) return callback(error);
      // console.log('Connected correctly to server');
      mongodb.collections().then(function (collections) {
        database.serialize(function () {
          createTables(database, collections, {}, options, function () {
            database.close();
            mongodb.close();
            callback();
          });
        });
      });
    });
  } catch (err) {
    return callback(err);
  }
}

function createTables(database, collections, schema, options, callback) {
  var idx = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (idx < collections.length) {
    var tableName = collections[idx].collectionName;
    return collections[idx].find().toArray(function (error, documents) {
      if (error) console.error(error);
      if (!options.ignore.includes(tableName)) {
        createTable(database, tableName, documents, schema, function () {
          return createTables(database, collections, schema, options, callback, ++idx);
        });
      } else {
        return createTables(database, collections, schema, options, callback, ++idx);
      }
    });
  }
  return callback();
}

function createTable(database, tableName, documents, schema, callback, columns) {
  var idx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0 };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = 'INTEGER PRIMARY KEY UNIQUE';
    return database.run('CREATE TABLE \'' + tableName + '\' (\'yosql_id\' INTEGER PRIMARY KEY UNIQUE);', function () {
      return createTable(database, tableName, documents, schema, callback, columns, idx);
    });
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], function () {
      return createTable(database, tableName, documents, schema, callback, columns, ++idx);
    });
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(function (key) {
      return parseValue(_typeof(documents[0][key])) !== 'object';
    });

    return addColumn(tableName, columns[idx], function () {
      return createTable(database, tableName, documents, schema, callback, columns, ++idx);
    });
  }

  columns = columns || [];
  return insertRows(tableName, columns, documents, callback);

  function addColumn(tableName, column, callback) {
    if (schema[tableName]['columns'][column]) return callback();
    schema[tableName]['columns'][column] = 'TEXT';
    // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
    return database.run('ALTER TABLE \'' + tableName + '\' ADD COLUMN \'' + column + '\' TEXT;', callback);
  }

  function insertRow(tableName, columns, document, callback) {
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
          return createTable(database, tableName + '_' + newColumn, document[newColumn], schema, function () {
            delete document[newColumn];
            return insertRow(tableName, columns, document, callback);
          });
        } else {
          delete document[newColumn];
          return insertRow(tableName, columns, document, callback);
        }
      }
      columns.push(newColumn);
      return addColumn(tableName, newColumn, function () {
        insertRow(tableName, columns, document, callback);
      });
    }

    var values = [];
    var cleanColumns = [];
    columns.forEach(function (column) {
      cleanColumns.push('\'' + column + '\'');
      values.push('\'' + parseValue(document[column]) + '\'');
    });
    return database.run('INSERT INTO \'' + tableName + '\' (' + cleanColumns.join(', ') + ') VALUES (' + values.join(', ') + ');', callback);
  }

  function insertRows(tableName, columns, documents, callback) {
    var idx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    if (idx < documents.length) {
      documents[idx]['yosql_id'] = ++schema[tableName].length;
      return insertRow(tableName, columns, documents[idx], function () {
        return insertRows(tableName, columns, documents, callback, ++idx);
      });
    }
    return callback();
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
}

function runQuery(query, filename, callback) {
  try {
    var database = new _sqlite2.default.Database(filename, function (err) {
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
  createDatabase: createDatabase,
  loadDatabase: loadDatabase,
  createTables: createTables,
  createTable: createTable,
  runQuery: runQuery
};