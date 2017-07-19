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
      // console.log('Connected correctly to server');
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
        createTable(tableName, documents, schema, () => {
          return createTables(database, collections, schema, options, callback, ++idx);
        });
      } else {
        return createTables(database, collections, schema, options, callback, ++idx);
      }

    });
  }
  return callback();
}

function createTable(tableName, documents, schema, callback, columns, idx = 0) {
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, query: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = 'INTEGER PRIMARY KEY UNIQUE';
    schema[tableName].query.push(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE)`);
    return createTable(tableName, documents, schema, callback, columns, idx);
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], schema, () => {
      return createTable(tableName, documents, schema, callback, columns, ++idx);
    });
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(key => {
      return parseValue(typeof documents[0][key]) !== 'object';
    });
    return addColumn(tableName, columns[idx], schema, () => {
      return createTable(tableName, documents, schema, callback, columns, ++idx);
    });
  }
  columns = columns || [];
  return insertRows(tableName, columns, documents, schema, callback);
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

function insertRows(tableName, columns, documents, schema, callback) {
  documents.forEach(document => {
    document.yosql_id = ++schema[tableName].length;
    insertRow(tableName, columns, document, schema);
  });
  return callback();
}

function insertRow(tableName, columns, document, schema) {
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
        return createTable(`${tableName}_${newColumn}`, document[newColumn], schema, () => {
          delete document[newColumn];
          return insertRow(tableName, columns, document, schema);
        });
      } else {
        delete document[newColumn];
        return insertRow(tableName, columns, document, schema);
      }
    }
    columns.push(newColumn);
    return addColumn(tableName, newColumn, schema, () => {
      insertRow(tableName, columns, document, schema);
    });
  }

  const values = [];
  const cleanColumns = [];
  columns.forEach(column => {
    cleanColumns.push(`'${column}'`);
    values.push(`'${parseValue(document[column])}'`);
  });
  return schema[tableName].query.push(`INSERT INTO '${tableName}' (${cleanColumns.join(', ')}) VALUES (${values.join(', ')})`);
}


function addColumn(tableName, column, schema, callback) {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = 'TEXT';
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].query.push(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT`);
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
