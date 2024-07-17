import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-eggplant to-feldgrau z-10 absolute">
      <h1 className="text-4xl text-white text-center mb-4">{`Oops! You're Lost`}</h1>
      <Link
        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full transform transition duration-500 hover:scale-105"
        to={"/projects"}
      >
        Take me Back
      </Link>
    </div>
  );
};

export default NotFound;
