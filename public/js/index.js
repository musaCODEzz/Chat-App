let socket = io();

socket.on('connect', function(){
            console.log('Connected to server');
});


socket.on('newMessage', function(message){
        console.log('====================================');
        console.log("newMessage", message);
        console.log('====================================');

});

socket.on('disconnect', function(){
            console.log('Disconnected from server');
});