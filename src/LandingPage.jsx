import profileImage from "/profile.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-eggplant to-feldgrau z-10 absolute">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full w-32 h-32 mb-4"
      />
      <h1 className="text-4xl text-white text-center mb-4">{`Hi!, I'm Rim!`}</h1>
      <Link
        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full transform transition duration-500 hover:scale-105"
        to={"/projects"}
      >
        Enter
      </Link>
    </div>
  );
};

export default LandingPage;
