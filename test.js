const yosql = require('./dist/index');
const sqlite3 = require('sqlite3');

const documents = [{}];
[
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
].forEach(letter => {
  const obj = {};
  obj[`${letter}A`] = 'B';
  obj[`${letter}C`] = ['D', 'E', 'F'],
  obj[`${letter}G`] = { H: 'I'};
  obj[`${letter}J`] = [{ K: 'L' }];
  obj[`${letter}M`] = 'N';
  obj[`${letter}R`] = { S: 'T' };
  obj[`${letter}U`] = [{ V: ['P', 'Q', 'R'] }];
  obj[`${letter}X`] = ['Y', 'Z'];
  documents[0] = Object.assign(documents[0], obj);
});

for (let i = 1; i < 3000; i++) {
  documents[i] = documents[0];
}

yosql.createTable('test', documents, (schema) => {
  fs.writeFileSync('output.json', JSON.stringify(schema, null, 2));
});
