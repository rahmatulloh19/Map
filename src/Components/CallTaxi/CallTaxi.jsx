import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { Returner } from "../Returner/Returner";
import { SelectLocationMarker } from "../SelectLocationMarker/SelectLocationMarker";

// eslint-disable-next-line react/prop-types
export const CallTaxi = ({ setLast, last, socket }) => {
  const ref = useRef();

  const [isDisable, setIsDisable] = useState();

  const handleClick = (evt) => {
    if (last) {
      // eslint-disable-next-line react/prop-types
      socket.emit("clientRequesting", {
        last: last ? JSON.stringify({ ...last }) : "",
      });
      evt.target.textContent = "Joy tanlandi, Kuting...";
      evt.target.disabled = true;
      setIsDisable(true);
    }
  };

  useEffect(() => {
    if (ref?.current) {
      const disableClickPropagation = L?.DomEvent?.disableClickPropagation;
      disableClickPropagation(ref.current);
    }
  }, []);

  return (
    <div className="absolute bottom-0 flex flex-col bg-white " ref={ref}>
      <SelectLocationMarker isDisable={isDisable} setLast={setLast} last={last} />
      <div className="rounded-t-[40px] w-screen flex flex-wrap justify-between px-9 pt-5 pb-4 relative">
        <Returner />
        <button className="bg-black block text-center text-xl !text-white w-full py-5 rounded-[30px]" type="button" onClick={handleClick}>
          Joy tanlash
        </button>
      </div>
    </div>
  );
};
