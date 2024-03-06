import { useEffect, useRef } from "react";
import L from "leaflet";
import { Returner } from "../Returner/Returner";
import { SelectLocationMarker } from "../SelectLocationMarker/SelectLocationMarker";

export const CallTaxi = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      const disableClickPropagation = L?.DomEvent?.disableClickPropagation;
      disableClickPropagation(ref.current);
    }
  }, []);

  return (
    <div className="absolute bottom-0 flex flex-col bg-white " ref={ref}>
      <SelectLocationMarker />
      <div className="rounded-t-[40px] w-screen flex flex-wrap justify-between px-9 pt-5 pb-4 relative">
        <Returner />
        <button className="bg-black text-xl text-white w-full py-5 rounded-[30px]" type="submit">
          Taxi chaqirish
        </button>
      </div>
    </div>
  );
};
