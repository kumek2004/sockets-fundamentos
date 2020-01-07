const { io } = require('../server')

io.on('connection', (cliente) => {
    console.log('Usuario Conectado')
    cliente.on('disconnect', () => {
            console.log('Cliente desconectado')
        })
        // escuchar cliente
    cliente.on('enviarMensaje', (mensaje, callback) => {
        // console.log(mensaje);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo MAL'
        //     });
        //}
        cliente.broadcast.emit('enviarMensaje', mensaje);
    })


    // cliente.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienbenidos al servidor'
    // })


});