import { MongoClient } from 'mongodb';
import { ObjectId } from 'bson';
import uuid4 from 'uuid/v4';
const schema = {};

function loadDatabase(uri, options, callback) {
  try {
    MongoClient.connect(uri, function (err, mongodb) {
      if (err) return callback(err);
      // console.log('Connected correctly to server');
      mongodb.collections().then(collections => {
        createTables(collections, options, (err, schema) => {
          mongodb.close();
          callback(err, schema);
        });
      })
      .catch(error => callback(error));
    });
  } catch (err) { return callback(err); }
}

function createTables(collections, options, callback, idx = 0) {
  if (idx < collections.length) {
    const tableName = collections[idx].collectionName;
    return collections[idx].find().toArray((error, documents) => {
      if (error) console.error(error);
      if (options.only || options.ignore) {
        if (options.only && options.only.find(only => {
          return tableName === only;
        })) {
          createTable(tableName, documents, () => {
            return createTables(collections, options, callback, ++idx);
          });
        } else if (options.ignore && !options.ignore.find(ignore => {
          return tableName.includes(ignore);
        })) {
          createTable(tableName, documents, () => {
            return createTables(collections, options, callback, ++idx);
          });
        } else {
          return createTables(collections, options, callback, ++idx);
        }
      } else {
        createTable(tableName, documents, () => {
          return createTables(collections, options, callback, ++idx);
        });
      }
    });
  }

  return callback(null, schema);
}

function createTable(tableName, documents, callback, columns, idx = 0) {
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, queries: {}, rows: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = { type: 'UUID PRIMARY KEY UNIQUE', order: 0 };
    schema[tableName].queries.create = `CREATE TABLE ${'`' + tableName + '`'} (yosql_id UUID PRIMARY KEY UNIQUE);`;
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
    document.yosql_id = document.yosql_id || uuid4();
    return insertRow(tableName, columns, document);
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

  schema[tableName].queries.insert = `INSERT INTO ${tableName} (${columnNames.join(`, `)}) VALUES (${inserts});`;
  return callback(null, schema);
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
      return insertRow(tableName, columns, document);
    });
  }

  const row = {};
  columns.forEach(column => row[column] = parseValue(document[column]));
  return schema[tableName].rows.push(row);
}


function addColumn(tableName, column, callback) {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = { type: 'TEXT', order: Object.keys(schema[tableName].columns).length };
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].queries.create = schema[tableName].queries.create.replace(');', `, ${'`' + column + '`'} ${schema[tableName]['columns'][column].type});`);
  return callback(null, schema);
}

module.exports = {
  loadDatabase,
  createTables,
  createTable
};
