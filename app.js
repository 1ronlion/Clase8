const { filtrarPorEstado } = require('./funcionesDeTareas');
let archivoTareas = require('./funcionesDeTareas');


//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();


        tareas.forEach((tarea, index) => {
            
            console.log((index + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);

        });

        console.log()
        break;

    case 'crear': 
        
        console.log()
        console.log('Listado de tareas');
        console.log('------------------');

        let titulo = process.argv[3]
        
        let tarea= {

            titulo:titulo,
            estado: 'pendiente'

        }

        archivoTareas.guardarTarea(tarea)

        console.log('Nueva tarea')
        console.log('------------------');
        console.log('Tarea >>> ' + tarea.titulo) 
        console.log('Estado >>> ' + tarea.estado)

        break
    
    case 'filtrar':

        let estado = process.argv[3]

        console.log('Tareas filtradas');
        console.log('------------------');
        console.log('Estado', estado);
        

        let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);

        if(tareasFiltradas.length > 0) {

        tareasFiltradas.forEach((tarea, index) => {

            console.log((index + 1) + ")" + " " + (tarea.titulo))

        })
        } else {

            console.log('No hay tareas con ese estado');

        }
        break;
        
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
