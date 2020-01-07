var socket = io();
// escuchar
socket.on('connect', function() {
    console.log(`servidor conectado`)
})

socket.on('disconnect', function() {
        console.log('Perdida comunicacion')
    })
    // Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Antonio',
    mensaje: 'nuevo mensaje desde cliente'
}, function(resp) {
    console.log('Respuestadesde el servidor: ', resp)

})

socket.on('enviarMensaje', function(mensaje) {
    console.log('Desde Servidor:', mensaje)

})