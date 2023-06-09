const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
let app = express();
const port = process.env.PORT || 3000;
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');


    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        socket.emit('newMessage', 
            generateMessage("Admin", "Welcome to the chat app")
        );
        
        socket.broadcast.emit('newMessage', 
            generateMessage("Admin", "New user joined")
        );

        

        socket.on('createMessage', (message, callback) => {
            console.log('createMessage', message);
            io.emit('newMessage', generateMessage(message.from, message.text));
            callback("This is the server");
        
        });
        
        socket.on('createLocationMessage', (coords) => {
            io.emit('newMessage', 
            generateLocationMessage('Admin', coords.latitude, coords.longitude));
        }
        );
       
    });
    
    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});


server.listen(port, () => {
    console.log(` Server is up on port ${port}`);
});