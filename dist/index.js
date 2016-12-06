'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mongodb = require('mongodb');

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

var _bson = require('bson');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  loadDatabase: function loadDatabase(uri, timestamp, callback) {
    try {
      (function () {
        var createTables = function createTables(collections, callback, idx) {
          idx = idx || 0;
          if (idx < collections.length) {
            var _ret2 = function () {
              var tableName = collections[idx].collectionName;
              return {
                v: collections[idx].find().toArray(function (err, documents) {
                  createTable(tableName, documents, function () {
                    return createTables(collections, callback, ++idx);
                  });
                })
              };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          }

          return callback();
        };

        var createTable = function createTable(tableName, documents, callback, columns, idx) {
          if (idx == null) idx = 0;

          if (!schema[tableName]) {
            schema[tableName] = {};
            // console.log(`CREATE TABLE "${tableName}" ("id" INTEGER PRIMARY KEY UNIQUE);`);
            schema[tableName]['id'] = 'INTEGER PRIMARY KEY UNIQUE';
            return sqldb.run('CREATE TABLE "' + tableName + '" ("id" INTEGER PRIMARY KEY UNIQUE);', function () {
              return createTable(tableName, documents, callback, columns, idx);
            });
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
          } else {
            columns = columns || [];
          }

          return insertRows(tableName, columns, documents, callback);
        };

        var addColumn = function addColumn(tableName, column, callback) {
          schema[tableName][column] = 'TEXT';
          // console.log(`ALTER TABLE "${tableName}" ADD COLUMN "${column}" TEXT;`);
          return sqldb.run('ALTER TABLE "' + tableName + '" ADD COLUMN "' + column + '" TEXT;', callback);
        };

        var insertRow = function insertRow(tableName, columns, document, callback) {
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
                document[newColumn].forEach(function (obj) {
                  return obj[tableName + '_id'] = document.id;
                });
                // console.log(`${tableName}_${newColumn}`);
                return createTable(tableName + '_' + newColumn, document[newColumn], function () {
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
            cleanColumns.push('"' + column + '"');
            values.push('"' + parseValue(document[column]) + '"');
          });
          return sqldb.run('INSERT INTO "' + tableName + '" (' + cleanColumns.join(', ') + ') VALUES (' + values.join(', ') + ');', callback);
        };

        var insertRows = function insertRows(tableName, columns, documents, callback, idx) {
          idx = idx || 0;
          if (idx < documents.length) {
            return sqldb.get('SELECT "id" from ' + tableName + ' ORDER BY "id" DESC LIMIT 1;', function (err, row) {
              documents[idx]['id'] = row ? row.id + 1 : 1;
              return insertRow(tableName, columns, documents[idx], function () {
                return insertRows(tableName, columns, documents, callback, ++idx);
              });
            });
          }
          return callback();
        };

        var parseValue = function parseValue(value) {
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (value instanceof Date) {
              return value.toISOString();
            } else if (Array.isArray(value)) {
              return value;
            } else if (_bson.ObjectId.isValid(value)) {
              return value.toString();
            } else {
              return [value];
            }
          }
          return value;
        };

        var sqldb = new _sqlite2.default.Database(timestamp + '.sqlite3', function (err) {
          if (err) console.log(err.message);
        });
        _mongodb.MongoClient.connect(uri, function (err, mongodb) {
          if (err) {
            return callback(err);
          }
          // console.log("Connected correctly to server");
          mongodb.collections().then(function (collections) {
            sqldb.serialize(function () {
              createTables(collections, function () {
                sqldb.close();
                mongodb.close();
                console.log(schema);
                callback();
              });
            });
          });
        });

        var schema = {};
      })();
    } catch (err) {
      return callback(err);
    }
  },
  runQuery: function runQuery(query, timestamp, callback) {
    try {
      var sqldb = new _sqlite2.default.Database(timestamp + '.sqlite3', function (err) {
        if (err) console.log(err.message);
      });
      sqldb.all(query, function (err, rows) {
        if (err) {
          return callback(err);
        }
        callback(err, rows);
      });
    } catch (err) {
      callback(err);
    }
  }
};