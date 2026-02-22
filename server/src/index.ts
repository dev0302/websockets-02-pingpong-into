// 1. here we are doing web sockets (intro)
// 2. install tpyes for websockets : npm i ws @types/ws
// 3. currently not doing in express
// 4. There are 3 Approaches to do this : one by http another by express and third onr is pure ws, and here we are doing this third one (pure ws)

import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port:8080 });

// event handler
// wss.on("connection", function(socket) {
//     console.log("User Connected");
//     socket.send("hello");
// } )

// now to connect :
// 1. "npm run dev" here
// 2. open postman, click new and selected websocket, then write connection url : "ws://localhost:8080"

// now something like that server will sent msg after every 500 ms
// wss.on("connection", function(socket) {
//     console.log("User Connected");
//     setInterval(() => {
//         socket.send("Current price of solana is: " + Math.random());
//     },1000);

//     // now to receive msg from socket
//     socket.on("message", (e) => {
//         console.log(e.toString());
        
//     })

// } )


// ping pong application (jb ping send ho, sever pong respond kre)
wss.on("connection", function(socket) {
    console.log("User Connected");
    
    socket.on("message", (e) => {
        console.log(e.toString());
        
        if (e.toString() === "ping") {
            socket.send("pong")
        }
    })
})