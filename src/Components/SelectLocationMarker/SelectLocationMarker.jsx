import axios from "axios";
import L from "leaflet";
import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import Image from "../../assets/ic_Pin.svg";

export const SelectLocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [isMoved, setIsMoved] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
    moveend() {
      axios(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${map.getCenter().lng}`).then(function ({ data }) {
        console.log(data.address.road);
        console.log(data.display_name.split(", ", 2));
      });
    },
    move() {
      setPosition(map.getCenter());
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

  return !position && !isMoved ? null : <Marker icon={icon} position={position}></Marker>;
};
