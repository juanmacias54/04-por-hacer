const argv = require('./config/yargs').argv;
let comando = argv._[0];
const color = require('colors')
const porHacer = require('./por-hacer/por-hacer')


switch (comando) {

    case 'crear': {

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    }
    case 'listar': {
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========por Hacer=========='.blue);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('============================='.blue);
        }
        break;
    }
    case 'actualizar': {
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    }
    case 'borrar': {
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    }

    default: {
        console.log('Comando no es Reconocido')
    }
}





