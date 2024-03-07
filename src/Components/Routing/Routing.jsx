import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

// eslint-disable-next-line react/prop-types

console.dir(L);
export const Routing = ({ position, last }) => {
  const map = useMap();

  console.log(last);
  console.log(position);

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [position, last],
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }],
      },
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);
  return null;
};
