var socket = io();
        socket.on('connect',function(){console.log('Conectado al servidor');})
        
        socket.on('disconect', function(){console.log('Desconectado al servidor');})

        socket.emit('enviarMensaje',{
            usuario: 'Harold',
            mensaje: 'Hola y bienvenido'
        }, function(resp){
            console.log('respuesta servidor: ', resp);
        })

        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor:',mensaje)
        })