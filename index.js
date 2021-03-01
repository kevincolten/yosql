import { v4 as uuidv4 } from 'uuid';
import getUuid from 'uuid-by-string';
let options = {
  idempotent: false
};
const now = new Date();

export const createTable = (tableName, documents, _options, callback, schema = {}, columns, idx = 0) => {
  options = { ...options, ..._options };
  if (!schema[tableName]) {
    schema[tableName] = { columns: {}, length: 0, queries: {}, rows: [] };
    // console.log(`CREATE TABLE '${tableName}' ('yosql_id' INTEGER PRIMARY KEY UNIQUE);`);
    schema[tableName]['columns']['yosql_id'] = { type: 'UUID PRIMARY KEY UNIQUE', order: 0 };
    schema[tableName]['columns']['yosql_created_at'] = { type: 'TEXT', order: 1 };
    schema[tableName].queries.create = `CREATE TABLE ${'`' + tableName + '`'} (yosql_id UUID PRIMARY KEY UNIQUE, yosql_created_at TEXT);`;
    return createTable(tableName, documents, options, callback, schema, columns, idx);
  } else if (columns && idx < columns.length) {
    return addColumn(tableName, columns[idx], () => {
      return createTable(tableName, documents, options, callback, schema, columns, ++idx);
    }, schema);
  } else if (!columns && documents.length) {
    columns = Object.keys(documents[0]).filter(key => {
      return parseValue(typeof documents[0][key]) !== 'object';
    });
    return addColumn(tableName, columns[idx], () => {
      return createTable(tableName, documents, options, callback, schema, columns, ++idx);
    }, schema);
  }
  columns = columns || [];
  return insertRows(tableName, columns, documents, callback, schema);
}

const parseValue = value =>  {
  if (typeof value === 'object') {
    if (value instanceof Date) return value.toISOString();
    else if (Array.isArray(value)) return value;
    else if (value === null) return null;
    else return [value];
  } else if (value === undefined) return null;
  else if (typeof value === 'string') return value.replace(/\'/g,"''")
  return value;
}

const insertRows = (tableName, columns, documents, callback, schema) => {
  documents.forEach(document => {
    document.yosql_id = document.yosql_id || (options.idempotent ? getUuid(JSON.stringify(document)) : uuidv4());
    document.yosql_created_at = document.yosql_created_at || now.toISOString();
    return insertRow(tableName, columns, document, schema);
  });

  const columnNames = [];

  Object.keys(schema[tableName].columns).forEach(column => {
    columnNames[schema[tableName].columns[column].order] = column;
  });

  const inserts = schema[tableName].rows.map(row => {
    const filledRow = [];
    columnNames.forEach((column, idx) => {
      filledRow[idx] = row.hasOwnProperty(column) ? row[column] : null;
    });
    return `'${filledRow.join("', '")}'`;
  }).join('), (');

  schema[tableName].queries.insert = `INSERT INTO \`${tableName}\` (\`${columnNames.join('`, `')}\`) VALUES (${inserts});`;
  return callback(null, schema);
}

const insertRow = (tableName, columns, document, schema) => {
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
        return createTable(`${tableName}_${newColumn}`, document[newColumn], options, () => {
          delete document[newColumn];
          return insertRow(tableName, columns, document, schema);
        }, schema);
      } else {
        delete document[newColumn];
        return insertRow(tableName, columns, document, schema);
      }
    }
    columns.push(newColumn);
    return addColumn(tableName, newColumn, () => {
      return insertRow(tableName, columns, document, schema);
    }, schema);
  }

  const row = {};
  columns.forEach(column => row[column] = parseValue(document[column]));
  return schema[tableName].rows.push(row);
}


const addColumn = (tableName, column, callback, schema) => {
  if (schema[tableName]['columns'][column]) return callback();
  schema[tableName]['columns'][column] = { type: 'TEXT', order: Object.keys(schema[tableName].columns).length };
  // console.log(`ALTER TABLE '${tableName}' ADD COLUMN '${column}' TEXT;`);
  schema[tableName].queries.create = schema[tableName].queries.create.replace(');', `, ${'`' + column + '`'} ${schema[tableName]['columns'][column].type} ${column.includes('_yosql_id') ? `, INDEX ${column}_index(${column}(36))`:''});`);
  return callback(null, schema);
}
