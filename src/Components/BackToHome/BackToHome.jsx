import { Link } from "react-router-dom";
import back from "../../assets/back (1).svg";

export const BackToHome = () => {
  return (
    <Link className="absolute w-10 h-10 bg-white shadow-lg top-4 left-4 rounded-full flex items-center justify-center" to="/">
      <img className="-translate-x-px" src={back} alt="" />
    </Link>
  );
};
