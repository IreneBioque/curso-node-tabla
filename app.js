// importar archivo
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//  Para enviar argumentos desde la consola
// Por posición
// Este igual es el valor por defecto
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// const base = 1;

crearArchivo(argv.base, argv.list, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow))
  .catch((err) => console.log(err));
