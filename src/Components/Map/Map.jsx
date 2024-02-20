import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		dblclick() {
			map.locate();
		},
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	map.on("moveend", (some) => {
		console.log(map.getCenter());
	});

	map.on("dragend", (some) => {
		setPosition(map.getCenter());
	});
	map.on("zoomend", (some) => {
		console.log(map.getCenter());
		if (position) {
			console.log(position);
		}
		setPosition(map.getCenter());
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

export const Map = () => {
	return (
		<MapContainer
			className="w-screen h-screen absolute top-0 left-0"
			center={{ lat: 51.505, lng: -0.09 }}
			zoom={13}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker />
		</MapContainer>
	);
};
