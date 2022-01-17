const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Este es el número hasta donde quieres la tabla ',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'la base tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;
