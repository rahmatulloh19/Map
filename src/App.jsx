import { useEffect, useState } from "react";
import "./App.css";
import { Map } from "./Components/Map/Map";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

let uniqueId;

socket.on("clientJoined", async (data) => {
	uniqueId = await data;
	console.log(uniqueId);
});

const tg = window.Telegram.WebApp;

socket.on("connected", (data) => {
	console.log(data);
});

// tg.on("location", (data) => {
// 	console.log(data);
// });

function App() {
	return (
		<div className="relative w-screen h-screen top-0 left-0">
			<Map />
			<button className="w-4 absolute z-20">Hello</button>
		</div>
	);
}

export default App;
