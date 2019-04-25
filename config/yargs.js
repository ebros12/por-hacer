const descripcion = {
    demand: true,
    alias: 'd',
    desc: "descripcion de la tarea por hacer"
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como Completado o Pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('descripcion', 'describe una tarea', {
        descripcion,
        completado
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea ', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}