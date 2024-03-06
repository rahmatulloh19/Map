import car from "../../assets/car (1).svg";
import carLuxury from "../../assets/car (2).svg";
import carFamily from "../../assets/delivery-van.svg";

export const SelectTaxi = () => {
  return (
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
  );
};
