# YoSQL
## Convert your MongoDB database and JSON collections to SQL

## API
### `yosql.createTable(tableName, collection, callback)`

### `yosql.loadDatabase(mongoUri, options, callback)`
#### `options`
* `only` only translate tables that **exactly** match these strings
* `ignore` ignore tables that **include** these strings

## Examples
### Convert JSON collection
```js
const yosql = require('yosql');
const sqlite3 = require('sqlite3');

const people = [
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "romain",
      "last": "hoogmoed"
    },
    "location": {
      "street": "1861 jan pieterszoon coenstraat",
      "city": "maasdriel",
      "state": "zeeland",
      "postcode": 69217
    },
    "email": "romain.hoogmoed@example.com",
    "login": {
      "username": "lazyduck408",
    },
    "dob": "1983-07-14 07:29:45",
    "registered": "2010-09-24 02:10:42",
    "phone": "(656)-976-4980",
    "cell": "(065)-247-9303"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "aatu",
      "last": "lampinen"
    },
    "location": {
      "street": "1208 rautatienkatu",
      "city": "kokemäki",
      "state": "south karelia",
      "postcode": 40780
    },
    "email": "aatu.lampinen@example.com",
    "login": {
      "username": "goldenwolf654"
    },
    "dob": "1947-06-14 05:56:21",
    "registered": "2004-01-17 01:38:30",
    "phone": "06-019-501",
    "cell": "047-493-12-84"
  }
];

yosql.createTable('people', people, (err, schema) => {
  if (err) return console.log(err);
  const db = new sqlite3.Database('database.sqlite3');
  Object.keys(schema).forEach(table => {
    db.serialize(() => {
      db.run(schema[table].queries[0]); // Create statement;
      db.run(schema[table].queries[1]); // Insert statement;      
    });
  });
  db.close();
});
```

### Convert JSON-ified XML/HTML
```js
const yosql = require('yosql');
const sqlite3 = require('sqlite3');
const parseString = require('xml2js').parseString;
const fetch = require('node-fetch');

fetch('http://rss.indeed.com/rss?q=nodejs').then(res => res.text())
.then(text => {
  parseString(text, function (err, result) {
    yosql.createTable('database', result.rss.channel, (err, schema) => {
      if (err) return console.log(err);
      const db = new sqlite3.Database('database.sqlite3');
      Object.keys(schema).forEach(table => {
        db.serialize(() => {
          db.run(schema[table].queries[0]);
          db.run(schema[table].queries[1]);      
        });
      });
      db.close();
    });
  });
})
.catch(error => console.error(error));
```

### Convert MongoDB Database
```js
const yosql = require('yosql');
const sqlite3 = require('sqlite3');
yosql.loadDatabase('mongodb://localhost/database-name', {
  // only: ['users']
  ignore: ['objectlabs-system', 'admin', 'collections', '__versions'],
}, (err, schema) => {
  if (err) return console.log(err);
  const db = new sqlite3.Database('database.sqlite3');
  Object.keys(schema).forEach(table => {
    db.serialize(() => {
      db.run(schema[table].queries[0]); // Create statement;
      db.run(schema[table].queries[1]); // Insert statement;
    });
  });
  db.close();
});
```

## Transpile
1. `npm install`
1. `npm run build`

## TODO
* Support for blobs
