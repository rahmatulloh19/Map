import { useEffect, useRef } from "react";
import car from "../../assets/car (1).svg";
import L from "leaflet";
import { SelectLocationMarker } from "../SelectLocationMarker/SelectLocationMarker";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SelectTaxi = ({ last, taxi }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      const disableClickPropagation = L?.DomEvent?.disableClickPropagation;
      disableClickPropagation(ref.current);
    }
  }, []);

  return last && taxi ? (
    <div className="absolute bottom-0 flex flex-col bg-white " ref={ref}>
      <SelectLocationMarker last={last} />

      <div className="rounded-t-[40px] w-screen flex flex-wrap justify-between px-9 pt-5 pb-4 relative">
        <div className="flex justify-between mb-4 w-full">
          <label className="">
            <input className="car-inputs visually-hidden" type="radio" name="typeCar" defaultChecked />
            <span className="car-content max-w-[100px] min-w-16 px-3 rounded-xl transition border border-neutral-500 pt-[5px] pb-[11px] grow flex items-center justify-center flex-col opacity-70">
              <img src={car} alt="" />
              Economy
            </span>
          </label>
          <div>
            <h2>{taxi.name}</h2>
            <h3>
              {taxi.car.name} {taxi.car.color}
            </h3>
            <p>{taxi.car.number}</p>

            <p>Rating: {taxi.rating}</p>
          </div>
        </div>

        <a className="bg-black text-center text-xl !text-white w-full py-5 rounded-[30px]" href={`tel:${taxi.phone.split(" ").join("")}`}>
          {taxi.phone}
        </a>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};
