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
      <div className="pt-[50px] rounded-t-[40px] bg-white w-screen flex justify-between p-9 relative">
        <Returner />
        <label>
          <input className="visually-hidden" type="radio" name="typeCar" />
          <span className="border border-[#009245]">
            <img src={car} alt="" />
          </span>
        </label>
        <label>
          <input className="visually-hidden" type="radio" name="typeCar" />
          <span>
            <img src={carLuxury} alt="" />
          </span>
        </label>
        <label>
          <input className="visually-hidden" type="radio" name="typeCar" />
          <span>
            <img src={carFamily} alt="" />
          </span>
        </label>
      </div>
    </div>
  );
};
