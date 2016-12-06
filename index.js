import { MongoClient } from 'mongodb';
import sqlite3 from 'sqlite3';
import { ObjectId } from 'bson';

module.exports = {
  loadDatabase: function(uri, timestamp, callback) {
    try {
      const sqldb = new sqlite3.Database(timestamp + '.sqlite3', err => {
        if (err) console.log(err.message);
      });
      MongoClient.connect(uri, function (err, mongodb) {
        if (err) {
          return callback(err);
        }
        // console.log("Connected correctly to server");
        mongodb.collections().then(collections => {
          sqldb.serialize(() => {
            createTables(collections, () => {
              sqldb.close();
              mongodb.close();
              console.log(schema);
              callback();
            });
          });
        });
      });

      let schema = {};

      function createTables(collections, callback, idx) {
        idx = idx || 0;
        if (idx < collections.length) {
          const tableName = collections[idx].collectionName;
          return collections[idx].find().toArray((err, documents) => {
            createTable(tableName, documents, () => {
              return createTables(collections, callback, ++idx);
            });
          });
        }

        return callback();
      }

      function createTable(tableName, documents, callback, columns, idx) {
        if (idx == null) idx = 0;

        if (!schema[tableName]) {
          schema[tableName] = {};
          // console.log(`CREATE TABLE "${tableName}" ("id" INTEGER PRIMARY KEY UNIQUE);`);
          schema[tableName]['id'] = 'INTEGER PRIMARY KEY UNIQUE';
          return sqldb.run(`CREATE TABLE "${tableName}" ("id" INTEGER PRIMARY KEY UNIQUE);`, () => {
            return createTable(tableName, documents, callback, columns, idx);
          });
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
        } else {
          columns = columns || [];
        }

        return insertRows(tableName, columns, documents, callback);
      }

      function addColumn(tableName, column, callback) {
        schema[tableName][column] = 'TEXT';
        // console.log(`ALTER TABLE "${tableName}" ADD COLUMN "${column}" TEXT;`);
        return sqldb.run(`ALTER TABLE "${tableName}" ADD COLUMN "${column}" TEXT;`, callback);
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
              document[newColumn].forEach(obj => {
                return obj[`${tableName}_id`] = document.id;
              });
              // console.log(`${tableName}_${newColumn}`);
              return createTable(`${tableName}_${newColumn}`, document[newColumn], () => {
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
        return sqldb.run(`INSERT INTO "${tableName}" (${cleanColumns.join(', ')}) VALUES (${values.join(', ')});`, callback);
      }

      function insertRows(tableName, columns, documents, callback, idx) {
        idx = idx || 0;
        if (idx < documents.length) {
          return sqldb.get(`SELECT "id" from ${tableName} ORDER BY "id" DESC LIMIT 1;`, function (err, row) {
            documents[idx]['id'] = row ? row.id + 1 : 1;
            return insertRow(tableName, columns, documents[idx], () => {
              return insertRows(tableName, columns, documents, callback, ++idx);
            });
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
          } else {
            return [value];
          }
        }
        return value;
      }
    } catch (err) {
      return callback(err);
    }
  },
  runQuery: function(query, timestamp, callback) {
    try {
      const sqldb = new sqlite3.Database(timestamp + '.sqlite3', err => {
        if (err) console.log(err.message);
      });
      sqldb.all(query, function(err, rows) {
        if (err) {
          return callback(err);
        }
        callback(err, rows);
      });
    } catch (err) {
      callback(err);
    }
  }
}
