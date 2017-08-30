import { MongoClient } from 'mongodb';
import sqlite3 from 'sqlite3';
import { ObjectId } from 'bson';
let database = null;
const schema = {};

function createDatabase(fileName) {
  return new sqlite3.Database(fileName, err => {
    if (err) console.log(err.message);
  });
}

function loadDatabase(uri, filename, options, callback) {
  try {
    database = createDatabase(filename);
    MongoClient.connect(uri, function (err, mongodb) {
      if (error) return callback(error);
      // console.log('Connected correctly to server');
      mongodb.collections().then(collections => {
        database.serialize(() => {
          createTables(collections, {}, options, () => {
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

function createTables(collections, options, callback, idx = 0) {
  if (idx < collections.length) {
    const tableName = collections[idx].collectionName;
    return collections[idx].find().toArray((error, documents) => {
      if (error) console.error(error);
      if (!options.ignore.includes(tableName)) {
        createTable(tableName, documents, () => {
          return createTables(collections, options, callback, ++idx);
        });
      } else {
        return createTables(collections, options, callback, ++idx);
      }

    });
  }

  return callback();
}

function createTable(tableName, documents, callback, columns, idx = 0) {
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, query: [], rows: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = { type: 'INTEGER PRIMARY KEY UNIQUE', order: 0 };
    schema[tableName].query.push(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    return createTable(tableName, documents, callback, columns, idx);
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], () => {
      return createTable(tableName, documents, callback, columns, ++idx);
    });
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(key => {
      return parseValue(typeof documents[0][key]) !== 'object';
    });
    return addColumn(tableName, columns[idx], () => {
      return createTable(tableName, documents, callback, columns, ++idx);
    });
  }
  columns = columns || [];
  return insertRows(tableName, columns, documents, callback);
}

function parseValue(value) {
  if (typeof value === 'object') {
    if (value instanceof Date) {
      return value.toISOString();
    } else if (Array.isArray(value)) {
      return value;
    } else if (ObjectId.isValid(value)) {
      return value.toString();
    } else if (value === null) {
      return '';
    } else {
      return [value];
    }
  } else if (value === undefined) {
    return '';
  } else if (typeof value === 'string') {
    return value.replace(/\'/g,"''")
  }
  return value;
}

function insertRows(tableName, columns, documents, callback) {
  documents.forEach(document => {
    document.yosql_id = ++schema[tableName].length;
    insertRow(tableName, columns, document);
  });

  const columnNames = [];

  Object.keys(schema[tableName].columns).forEach(column => {
    columnNames[schema[tableName].columns[column].order] = column;
  });

  const inserts = schema[tableName].rows.map(row => {
    const filledRow = [];
    columnNames.forEach((column, idx) => {
      filledRow[idx] = row.hasOwnProperty(column) ? row[column] : 'NULL';
    });
    return `'${filledRow.join("', '")}'`;
  }).join('), (');
  
  schema[tableName].query.push(`INSERT INTO '${tableName}' ('${columnNames.join("', '")}') VALUES (${inserts});`);
  return callback(schema);
}

function insertRow(tableName, columns, document) {
  const newColumn = Object.keys(document).find(key => {
    return !columns.includes(key);
  });

  if (newColumn) {
    document[newColumn] = parseValue(document[newColumn]);
    if (Array.isArray(document[newColumn])) {
      if (document[newColumn].length) {
        if (typeof parseValue(document[newColumn][0]) === 'string') {
          document[newColumn] = document[newColumn].map(item => {
            const obj = {};
            obj[newColumn] = parseValue(item);
            return obj;
          });
        }
        document[newColumn].map((obj) => {
          return obj || {};
        }).forEach(obj => {
          return obj[`${tableName}_yosql_id`] = document['yosql_id'];
        });
        // console.log(`${tableName}_${newColumn}`);
        return createTable(`${tableName}_${newColumn}`, document[newColumn], () => {
          delete document[newColumn];
          return insertRow(tableName, columns, document);
        });
      } else {
        delete document[newColumn];
        return insertRow(tableName, columns, document);
      }
    }
    columns.push(newColumn);
    return addColumn(tableName, newColumn, () => {
      insertRow(tableName, columns, document);
    });
  }

  const row = {};
  // const cleanColumns = [];
  columns.forEach(column => {
    // cleanColumns.push(`'${column}'`);
    row[column] = parseValue(document[column]);
  });
  return schema[tableName].rows.push(row);
}


function addColumn(tableName, column, callback) {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = { type: 'TEXT', order: Object.keys(schema[tableName].columns).length };
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].query[0] = schema[tableName].query[0].replace(');', `, '${column}' ${schema[tableName]['columns'][column].type});`);
  return callback();
}

function runQuery(query, filename, callback) {
  try {
    const database = new sqlite3.Database(filename, err => {
      if (err) console.log(err.message);
    });
    database.all(query, function(err, rows) {
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
  createDatabase,
  loadDatabase,
  createTables,
  createTable,
  runQuery
};
