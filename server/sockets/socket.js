const { io } = require('../server');

io.on('connection', (client)=>{

    console.log('usuario conectado ')
    
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    })

    client.on('disconnect',(client)=>{
        console.log('usuario desconectado')
    })

    client.on('enviarMensaje', (data, callback)=>{
        console.log(data)

        client.broadcast.emit('enviarMensaje',data)
        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO BIEN'
        //     });
        // }else{
        //     callback( {
        //         resp: 'MALLLL'
        //     })
        // }
    })
})