import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import Image from "../../assets/Ellipse 2.svg";
import { ControlMenu } from "../ControlMenu/ControlMenu";
import { Route, Routes, useLocation } from "react-router";
import { CallTaxi } from "../CallTaxi/CallTaxi";
import { BackToHome } from "../BackToHome/BackToHome";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
    dblclick() {},
    moveend() {
      axios(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${map.getCenter().lng}`).then(function ({ data }) {
        console.log(data.address.road);
        console.log(data.display_name.split(", ", 2));
      });
    },
  });
  map.setMaxZoom(18);
  map.setMinZoom(9);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentLocation) => {
      setPosition({ lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude });
    });
  }, []);

  const icon = L.icon({
    iconUrl: Image,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return position === null ? null : <Marker icon={icon} position={position}></Marker>;
}

export const Map = () => {
  const [position, setPosition] = useState(null);

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentLocation) => {
      setPosition({ lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude });
    });
  }, []);
  return (
    <>
      {position && (
        <MapContainer className="w-screen h-full flex" center={position} zoom={10} scrollWheelZoom={true}>
          <div className="w-screen z-[1000]">
            {location.pathname === "/" ? "" : <BackToHome />}
            <Routes>
              <Route path="/" element={<ControlMenu />} />
              <Route path="/call-taxi" element={<CallTaxi />} />
            </Routes>
          </div>
          <TileLayer url="https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=N3MqJcqPUczcjAdSTBajt6UpuSt6dao04rmOz1EzZSN20O1p59aydcPcoHEK3wBD" />
          <LocationMarker />
        </MapContainer>
      )}
    </>
  );
};
