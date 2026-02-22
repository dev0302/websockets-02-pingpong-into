# WebSockets – Ping Pong (Server + Frontend) 🔁

## 📌 Overview
This project demonstrates **real-time, two-way communication using WebSockets** by connecting a **Node.js WebSocket server** with a **React frontend**.

Unlike traditional HTTP requests, the client and server maintain a **persistent connection**, allowing instant message exchange.  
The project implements a simple **Ping → Pong** mechanism to showcase how real-time systems work in practice.

---

## ✨ Features
- Pure WebSocket server using `ws`
- Persistent client-server connection
- Real-time message sending from frontend to backend
- Server-side message handling
- Ping–Pong response logic
- React frontend with WebSocket integration

---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **WebSocket (`ws`)**
- **TypeScript**

### Frontend
- **React**
- **TypeScript**
- **Browser WebSocket API**

---

## 🧠 What I Learned
- How WebSockets work **end-to-end (server + client)**
- Difference between HTTP request-response and WebSocket communication
- Creating a **persistent connection** from a React app
- Sending messages from:
  - Client → Server
  - Server → Client
- Handling WebSocket events:
  - `connection`
  - `message`
- Building real-time logic without Express or Socket.IO

---

## ⚙️ How It Works

### Backend Flow
1. WebSocket server starts on **port 8080**
2. Server listens for new client connections
3. When a message is received:
   - If the message is `"ping"`
   - Server responds with `"pong"`

### Frontend Flow
1. React app creates a WebSocket connection on component mount
2. Connection stays alive throughout the app lifecycle
3. User enters a message and clicks **Send**
4. Message is sent to the WebSocket server
5. Server response is received and shown as an alert

---

## 🚀 How to Run the Project

### 1️⃣ Backend Setup
```bash
cd server
npm install
npm run dev

Server runs on:

ws://localhost:8080
2️⃣ Frontend Setup
cd ws_frontend
npm install
npm run dev

Open the browser and ensure backend is already running.

🧪 How to Test

Type ping in the input field

Click Send

Server responds with:

pong

Response is instantly received by the frontend

📂 Project Structure
project-root/
│
├── server/
│   ├── src/
│   │   └── index.ts     # WebSocket server logic
│   └── tsconfig.json
│
├── ws_frontend/
│   └── src/
│       └── App.tsx      # WebSocket client (React)
│
└── README.md
🔍 Key Concepts Covered

Persistent WebSocket connections

Client-side WebSocket lifecycle

Server-side message handling

Real-time data flow

Ping–Pong communication pattern

🚀 Future Improvements

Show messages inside UI instead of alerts

Support multiple connected clients

Add message broadcasting

Implement rooms or channels

Add authentication over WebSockets
