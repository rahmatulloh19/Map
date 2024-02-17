import { useEffect, useState } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

const map = L.map("map").setView([0, 0], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.locate({ setView: true, maxZoom: 16 });

function onLocationFound(e) {
	var radius = e.accuracy;

	L.marker(e.latlng)
		.addTo(map)
		.bindPopup("You are within " + radius + " meters from this point")
		.openPopup();

	L.circle(e.latlng, radius).addTo(map);
}

navigator.geolocation.getCurrentPosition(
	(position) => map.panTo([position.coords.latitude, position.coords.longitude]),
	(error) => {
		alert(error);
	}
);

map.on("locationfound", onLocationFound);
var marker = L.marker([41, 63]).addTo(map);
function App() {
	const [location, setLocation] = useState([]);

	return <></>;
}

export default App;
