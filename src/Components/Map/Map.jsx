import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import Image from "../../assets/Ellipse 2.svg";
import { ControlMenu } from "../ControlMenu/ControlMenu";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
    dblclick() {},
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

//   return <button >Locate</button>;
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
        <MapContainer className="w-screen h-screen flex" center={position} zoom={10} scrollWheelZoom={true}>
          <div className="w-screen z-[1000]">
            <ControlMenu />
          </div>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
        </MapContainer>
      )}
    </>
  );
};
