require('./db/connect');
require('colors');
const { Dog } = require('./schemas/index.js');

(async () => {
  try {
    await Dog.deleteMany({});
    console.log('Data deleted');
  } catch (error) {
    console.error(`Error => ${error.message.red}`);
  } finally {
    process.exit('SIGINT');
  }
})();
