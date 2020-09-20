const { crearArchivos, listarTableLim } = require('./Multiplicar/multiplicar');
const argv = require('./config/yarg').argv;


console.log(argv);

let comando = argv._[0]
console.log(comando);

switch (comando) {
    case 'listar':
        listarTableLim(argv.base, argv.limite)
            .then(lista => { console.log(lista); })
            .catch(err => { console.log(err); })
        break;
    case 'crear':
        crearArchivos(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(err => { console.log(err); });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
// let base = 'Abc';



// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv2);