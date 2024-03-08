// import axios from "axios";
import L from "leaflet";
import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import Image from "../../assets/ic_Pin.svg";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SelectLocationMarker = ({ isDisable, setLast, last }) => {
  const { pathname } = useLocation();

  const [position, setPosition] = useState(null);
  const [isMoved, setIsMoved] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
    moveend() {
      // axios(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${map.getCenter().lng}`).then(function ({ data }) {
      //   console.log(data.address.road);
      //   console.log(data.display_name.split(", ", 2));
      // });
      if (pathname === "/call-taxi" && !isDisable) {
        setLast(map.getCenter());
      }
    },
    move() {
      if (!isDisable) setPosition(map.getCenter());
      if (!isMoved) {
        setIsMoved(true);
      }
    },
  });
  map.setMaxZoom(18);
  map.setMinZoom(9);

  const icon = L.icon({
    iconUrl: Image,
    iconSize: [40, 54],
    iconAnchor: [12, 41],
  });

  if (pathname === "/call-taxi") {
    return !position && !isMoved ? null : <Marker icon={icon} position={position}></Marker>;
  }

  if (pathname === "/select-taxi" && last) {
    return <Marker icon={icon} position={last}></Marker>;
  }

  return null;
};
