import back from "../../assets/back (1).svg";

// eslint-disable-next-line react/prop-types
export const BackToHome = ({ navigate }) => {
  return (
    <div className="absolute w-10 h-10 bg-white shadow-lg top-4 left-4 rounded-full flex items-center justify-center" onClick={() => navigate(-1)}>
      <img className="-translate-x-px" src={back} alt="" />
    </div>
  );
};
