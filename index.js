import { MongoClient } from 'mongodb';
import sqlite3 from 'sqlite3';
import { ObjectId } from 'bson';

function createDatabase(fileName) {
  return new sqlite3.Database(fileName, err => {
    if (err) console.log(err.message);
  });
}

function loadDatabase(uri, filename, options, callback) {
  try {
    const database = createDatabase(filename);
    MongoClient.connect(uri, function (err, mongodb) {
      if (error) return callback(error);
      // console.log("Connected correctly to server");
      mongodb.collections().then(collections => {
        database.serialize(() => {
          createTables(database, collections, {}, options, () => {
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

function createTables(database, collections, schema, options, callback, idx = 0) {
  if (idx < collections.length) {
    const tableName = collections[idx].collectionName;
    return collections[idx].find().toArray((error, documents) => {
      if (error) console.error(error);
      if (!options.ignore.includes(tableName)) {
        createTable(database, tableName, documents, schema, () => {
          return createTables(database, collections, schema, options, callback, ++idx);
        });
      } else {
        return createTables(database, collections, schema, options, callback, ++idx);
      }

    });
  }
  return callback();
}

function createTable(database, tableName, documents, schema, callback, columns, idx = 0) {
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0 };
    // console.log(`CREATE TABLE "${tableName}" ("yosql_id" INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = 'INTEGER PRIMARY KEY UNIQUE';
    return database.run(`CREATE TABLE "${tableName}" ("yosql_id" INTEGER PRIMARY KEY UNIQUE);`, () => {
      return createTable(database, tableName, documents, schema, callback, columns, idx);
    });
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], () => {
      return createTable(database, tableName, documents, schema, callback, columns, ++idx);
    });
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(key => {
      return parseValue(typeof documents[0][key]) !== 'object';
    });

    return addColumn(tableName, columns[idx], () => {
      return createTable(database, tableName, documents, schema, callback, columns, ++idx);
    });
  }

  columns = columns || [];
  return insertRows(tableName, columns, documents, callback);

  function addColumn(tableName, column, callback) {
    if (schema[tableName]['columns'][column]) return callback();
    schema[tableName]['columns'][column] = 'TEXT';
    // console.log(`ALTER TABLE "${tableName}" ADD COLUMN "${column}" TEXT;`);
    return database.run(`ALTER TABLE "${tableName}" ADD COLUMN "${column}" TEXT;`, callback);
  }

  function insertRow(tableName, columns, document, callback) {
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
          return createTable(database, `${tableName}_${newColumn}`, document[newColumn], schema, () => {
            delete document[newColumn];
            return insertRow(tableName, columns, document, callback);
          });
        } else {
          delete document[newColumn];
          return insertRow(tableName, columns, document, callback);
        }
      }
      columns.push(newColumn);
      return addColumn(tableName, newColumn, () => {
        insertRow(tableName, columns, document, callback);
      });
    }

    const values = [];
    const cleanColumns = [];
    columns.forEach(column => {
      cleanColumns.push(`"${column}"`);
      values.push(`"${parseValue(document[column])}"`);
    });
    return database.run(`INSERT INTO "${tableName}" (${cleanColumns.join(', ')}) VALUES (${values.join(', ')});`, callback);
  }

  function insertRows(tableName, columns, documents, callback, idx = 0) {
    if (idx < documents.length) {
      documents[idx]['yosql_id'] = ++schema[tableName].length;
      return insertRow(tableName, columns, documents[idx], () => {
        return insertRows(tableName, columns, documents, callback, ++idx);
      });
    }
    return callback();
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
