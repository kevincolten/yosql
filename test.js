const yosql = require('./dist/index');
const assert = require('assert');

const documents = [];
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
  documents.push(obj);
});

describe('yosql', () => {
  yosql.createTable('test', documents, { idempotent: true }, (error, schema) => {
    require('fs').writeFileSync('./output.json', JSON.stringify(schema, null, 2))
    if (error) return console.error(error);
    it('generates correct schema', () => {
      assert.deepEqual(schema, require('./schema.json'));
    })
  });
});
