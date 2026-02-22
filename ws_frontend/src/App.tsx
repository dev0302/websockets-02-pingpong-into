import { useEffect, useRef, useState } from "react"

function App() {
  // @ts-ignore
  const [socket, setSocket] = useState();
  // @ts-ignore
  const inputRef = useRef();

  function sendMessage() {
    if(!socket){
      return;
    }
    // @ts-ignore
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message)
  }

  // 1. whenever this app component renders i want to create a persistant connection
  useEffect( () => {

    const ws = new WebSocket("ws://localhost:8080"); //this will initiate a ws connection.
    // @ts-ignore
    setSocket(ws);

    // whenever there's a message from the server do something here (this part is for to recieve a message)
    ws.onmessage = (e) => {
      alert(e.data);
    }

  }, [] )


  return (
    <div>
      {/* @ts-ignore */}
      <input ref={inputRef} type="text" placeholder="message... " className="border border-gray-400 p-[2px] rounded-md outline-none  focus:border-gray-300/80" />
      <button onClick={sendMessage}>Send</button>
      <p className="mt-2 text-gray-400">type "ping" to get back alert from server</p>
    </div>
  )
}

export default App