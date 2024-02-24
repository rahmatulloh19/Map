// import { useEffect, useState } from "react";
import "./App.css";
import { Map } from "./Components/Map/Map";
// import { io } from "socket.io-client";

// const socket = io("ws://localhost:3000");

// let uniqueId;

// socket.on("clientJoined", async (data) => {
//   uniqueId = await data;
//   console.log(uniqueId);
// });

// const tg = window.Telegram.WebApp;

// socket.on("connected", (data) => {
//   console.log(data);
// });

// tg.on("location", (data) => {
// 	console.log(data);
// });

function App() {
  return <Map />;
}

export default App;
