'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

var _uuidByString = require('uuid-by-string');

var _uuidByString2 = _interopRequireDefault(_uuidByString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  idempotent: false
};
var now = new Date();

var createTable = exports.createTable = function createTable(tableName, documents, _options, callback) {
  var schema = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var columns = arguments[5];
  var idx = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  options = _extends({}, options, _options);
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, queries: {}, rows: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = { type: 'UUID PRIMARY KEY UNIQUE', order: 0 };
    schema[tableName]['columns']['yosql_created_at'] = { type: 'TEXT', order: 1 };
    schema[tableName].queries.create = 'CREATE TABLE ' + ('`' + tableName + '`') + ' (yosql_id UUID PRIMARY KEY UNIQUE, yosql_created_at TEXT);';
    return createTable(tableName, documents, options, callback, schema, columns, idx);
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], function () {
      return createTable(tableName, documents, options, callback, schema, columns, ++idx);
    }, schema);
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(function (key) {
      return parseValue(_typeof(documents[0][key])) !== 'object';
    });
    return addColumn(tableName, columns[idx], function () {
      return createTable(tableName, documents, options, callback, schema, columns, ++idx);
    }, schema);
  }
  columns = columns || [];
  return insertRows(tableName, columns, documents, callback, schema);
};

var parseValue = function parseValue(value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    if (value instanceof Date) return value.toISOString();else if (Array.isArray(value)) return value;else if (value === null) return null;else return [value];
  } else if (value === undefined) return null;else if (typeof value === 'string') return value.replace(/\'/g, "''");
  return value;
};

var insertRows = function insertRows(tableName, columns, documents, callback, schema) {
  documents.forEach(function (document) {
    document.yosql_id = document.yosql_id || (options.idempotent ? (0, _uuidByString2.default)(JSON.stringify(document)) : (0, _uuid.v4)());
    document.yosql_created_at = document.yosql_created_at || now.toISOString();
    return insertRow(tableName, columns, document, schema);
  });

  var columnNames = [];

  Object.keys(schema[tableName].columns).forEach(function (column) {
    columnNames[schema[tableName].columns[column].order] = column;
  });

  var inserts = schema[tableName].rows.map(function (row) {
    var filledRow = [];
    columnNames.forEach(function (column, idx) {
      filledRow[idx] = row.hasOwnProperty(column) ? row[column] : null;
    });
    return '\'' + filledRow.join("', '") + '\'';
  }).join('), (');

  schema[tableName].queries.insert = 'INSERT INTO `' + tableName + '` (`' + columnNames.join('`, `') + '`) VALUES (' + inserts + ');';
  return callback(null, schema);
};

var insertRow = function insertRow(tableName, columns, document, schema) {
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
        return createTable(tableName + '_' + newColumn, document[newColumn], options, function () {
          delete document[newColumn];
          return insertRow(tableName, columns, document, schema);
        }, schema);
      } else {
        delete document[newColumn];
        return insertRow(tableName, columns, document, schema);
      }
    }
    columns.push(newColumn);
    return addColumn(tableName, newColumn, function () {
      return insertRow(tableName, columns, document, schema);
    }, schema);
  }

  var row = {};
  columns.forEach(function (column) {
    return row[column] = parseValue(document[column]);
  });
  return schema[tableName].rows.push(row);
};

var addColumn = function addColumn(tableName, column, callback, schema) {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = { type: 'TEXT', order: Object.keys(schema[tableName].columns).length };
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].queries.create = schema[tableName].queries.create.replace(');', ', ' + ('`' + column + '`') + ' ' + schema[tableName]['columns'][column].type + ');');
  return callback(null, schema);
};