const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});



//use port 3000 or check for enviroment variable named PORT 
const port = process.env.PORT || 3000;
var currentRoom="default";
//Run whe client connects
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.join(currentRoom);
  socket.on('message', (message) => {
    console.log(message);
    //Sent as soon as a user conne
    io.to(message.room).emit('message',message);
  });
  

  socket.on('leaveRoom', (room) => {
    socket.leave(room);
  });

  socket.on('joinRoom', (room) => {
  
    currentRoom=room;
    socket.join(room);
   
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));