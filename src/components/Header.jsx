import LanguageSwitcher from "./LanguageSwitcher";

const imagePath = "/profile.jpg";
const Header = () => {
  return (
    <header className="bg-gradient-to-t from-sage from-20% to-feldgrau p-0 flex items-start justify-between ">
      <div className="flex items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 flex-shrink-0 flex-grow-0">
          <img
            src={imagePath}
            alt="Profile"
            className="object-cover w-full h-full rounded-lg p-1"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white">
            Rim Doe
          </h1>
        </div>
      </div>
      <div className="flex w-12/12">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
