import { useEffect, useRef } from "react";
import L from "leaflet";
import { Returner } from "../Returner/Returner";
import { Link } from "react-router-dom";

export const ControlMenu = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      const disableClickPropagation = L?.DomEvent?.disableClickPropagation;
      disableClickPropagation(ref.current);
    }
  }, []);

  return (
    <div className="absolute bottom-0 flex flex-col bg-white " ref={ref}>
      <div className="rounded-t-[40px] w-screen flex flex-wrap justify-between px-9 py-4 relative">
        <Returner />
        <div className="flex justify-between mb-4 w-full">
          <h2></h2>
        </div>
        <Link className="bg-black text-xl !text-center !text-white w-full py-5 rounded-[30px]" to="call-taxi">
          Qayerga boramiz
        </Link>
      </div>
    </div>
  );
};
