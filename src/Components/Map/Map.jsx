import axios from "axios";
import { map } from "leaflet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

function LocationMarker() {
	const map = useMapEvents({
		dblclick() {
			map.locate();
		},
		locationfound(e) {
			map.flyTo(e.latlng, map.getZoom());
		},
	});
	map.setMaxZoom(18);
	map.setMinZoom(11);

	const [position, setPosition] = useState(null);
	const [latlng, setLatlng] = useState({
		lat: undefined,
		lng: undefined,
	});
	const [zoom, setZoom] = useState(undefined);

	map.on("move", () => {
		if (zoom >= 16) {
			const lat = map.getCenter().lat.toFixed(5);
			const lng = map.getCenter().lat.toFixed(5);
			setLatlng((prev) => (prev.lat != lat && prev.lng != lng ? { lat, lng } : prev));
		} else if (zoom >= 14) {
			const lat = map.getCenter().lat.toFixed(4);
			const lng = map.getCenter().lat.toFixed(4);
			setLatlng((prev) => (prev.lat != lat && prev.lng != lng ? { lat, lng } : prev));
		}
		const lat = map.getCenter().lat.toFixed(3);
		const lng = map.getCenter().lat.toFixed(3);
		setLatlng((prev) => (prev.lat != lat && prev.lng != lng ? { lat, lng } : prev));
	});

	map.on("zoomend", (some) => {
		setZoom(map.getZoom());
	});

	useEffect(() => {
		setPosition(map.getCenter());

		// axios(
		// 	`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${
		// 		map.getCenter().lng
		// 	}`,
		// 	{
		// 		timeout: 1000,
		// 	}
		// ).then(function (data) {
		// 	console.log(data.address.road);
		// });
	}, [latlng]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

function Component() {
	const map = useMapEvents({
		// click() {
		// 	map.locate();
		// },
	});
	return <button onClick={() => map.locate()}>Locate</button>;
}

export const Map = () => {
	return (
		<MapContainer
			className="w-screen h-screen"
			center={{ lat: 41.347093840376516, lng: 69.22704219818117 }}
			zoom={13}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker />

			{/* <div className="bg-red-500 z-[1000] absolute ">
				<Component />
				<div className="w-48 h-80"></div>
				<div className=" hover:scale-95 text-3xl bg-gray-500 active:bg-yellow-300 w-10 h-10"></div>
			</div> */}
		</MapContainer>
	);
};
