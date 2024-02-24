import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import Image from "../../assets/Ellipse 2.svg";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    dblclick() {
      map.locate();
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
    // move() {
    //   setPosition(map.getCenter());
    // },
    moveend() {
      axios(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${map.getCenter().lng}`).then(function ({ data }) {
        console.log(data.address.road);
        console.log(data.display_name.split(", ", 2));
      });
    },
  });
  map.setMaxZoom(18);
  map.setMinZoom(11);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentLocation) => {
      setPosition({ lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude });
      // map.locate();
    });
  }, []);

  const icon = L.icon({
    iconUrl: Image,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  // console.log(L);

  return position === null ? null : (
    <Marker icon={icon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// function Component() {
//   const map = useMapEvents({
// click() {
// 	map.locate();
// },
//   });
//   return <button onClick={() => map.locate()}>Locate</button>;
// }

export const Map = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentLocation) => {
      setPosition({ lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude });
    });
  }, []);
  return (
    <>
      {position && (
        <MapContainer className="w-screen h-screen" center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />

          {/* <div className="bg-red-500 z-[1000] absolute ">
				<Component />
				<div className="w-48 h-80"></div>
				<div className=" hover:scale-95 text-3xl bg-gray-500 active:bg-yellow-300 w-10 h-10"></div>
			</div> */}
        </MapContainer>
      )}
    </>
  );
};
