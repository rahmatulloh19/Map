import { useEffect, useRef } from "react";
import car from "../../assets/car (1).svg";
import carLuxury from "../../assets/car (2).svg";
import carFamily from "../../assets/delivery-van.svg";
import L from "leaflet";
import { Returner } from "../Returner/Returner";

export const ControlMenu = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      const disableClickPropagation = L?.DomEvent?.disableClickPropagation;
      disableClickPropagation(ref.current);
    }
  }, []);

  return (
    <div className="absolute bottom-0 flex flex-col" ref={ref}>
      <div className="py-[50px] rounded-t-[40px] bg-white w-screen flex flex-wrap justify-between p-9 relative">
        <Returner />
        <div className="flex justify-between mb-4 w-full">
          <label className="">
            <input className="car-inputs visually-hidden" type="radio" name="typeCar" defaultChecked />
            <span className="car-content max-w-[100px] min-w-16 px-3 rounded-xl transition border border-neutral-500 pt-[5px] pb-[11px] grow flex items-center justify-center flex-col opacity-70">
              <img src={car} alt="" />
              Economy
            </span>
          </label>
          <label className="">
            <input className="car-inputs visually-hidden" type="radio" name="typeCar" />
            <span className="car-content max-w-[100px] min-w-16 px-3 rounded-xl transition border border-neutral-500 pt-[5px] pb-[11px] grow flex items-center justify-center flex-col opacity-70">
              <img src={carLuxury} alt="" />
              Luxury
            </span>
          </label>
          <label className="">
            <input className="car-inputs visually-hidden" type="radio" name="typeCar" />
            <span className="car-content max-w-[100px] min-w-16 px-3 rounded-xl transition border border-neutral-500 pt-[5px] pb-[11px] grow flex items-center justify-center flex-col opacity-70">
              <img src={carFamily} alt="" />
              Family
            </span>
          </label>
        </div>
        <button className="bg-black text-xl text-white w-full py-5 rounded-[30px]" type="submit">
          Qayerga boramiz
        </button>
      </div>
    </div>
  );
};
