// Requireds
const fs = require('fs'); // paquetes propias de node
// const fs = require('express'); // no es libreria propia no nativa
// const fs = require('./fs'); // arcvhivos estan en la carpeta misma 

// module.exports.crearArchivo = (base) => {
let crearArchivos = (base, lim) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';

        for (let i = 0; i <= lim; i++) {
            data += (`${ base } X ${ i } = ${ base * i } \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`el archivo de la tabla ${base} se creo exitosamente`);
        });
    });
}

let listarTableLim = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';
        for (let i = 0; i <= limite; i++) {
            tabla += (`${ base } X ${ i } = ${ base * i } \n`);
        }

        console.log(tabla);
    });

}

// se agregan todas las funciones que se quieren exportar para toda la 
// aplicacion
module.exports = {
    crearArchivos,
    listarTableLim
}