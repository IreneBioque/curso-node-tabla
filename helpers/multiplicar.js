const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, list = false, limit = 10) => {
  try {
    let salida,
      consola = '';

    for (let index = 1; index <= limit; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
    }
    if (list) {
      console.log(`-----------`.green);
      console.log(`${'Tabla del'.blue} ${colors.blue(base)}`);
      console.log(`-----------`.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
    });
    return `Tabla del ${base} creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
