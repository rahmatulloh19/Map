import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

// eslint-disable-next-line react/prop-types
export const Routing = ({ position, last }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [position, last],
      lineOptions: {
        styles: [{ color: "#009245", weight: 4 }],
      },
      createMarker: () => null,
      routeWhileDragging: true,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, last]);

  return null;
};
