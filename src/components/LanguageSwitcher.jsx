// src/components/LanguageSwitcher.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import enFlag from "/logos/england.svg"; // path to your English flag image
import deFlag from "/logos/germany.svg"; // path to your German flag image
import frFlag from "/logos/france.svg"; // path to your French flag image

const LanguageSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: enFlag },
    { code: "de", name: "Deutsch", flag: deFlag },
    { code: "fr", name: "Français", flag: frFlag },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center m-1 px-4 py-2 bg-transparent md:bg-white rounded-full md:shadow"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="hidden md:block">
          {languages.find((lang) => lang.code === i18n.language).name}
        </span>
        <img
          src={languages.find((lang) => lang.code === i18n.language).flag}
          alt={i18n.language}
          className="w-5 h-5 rounded-full object-cover ml-2"
        />
      </button>

      {dropdownOpen && (
        <ul className="absolute right-0 w-40 mt-2 bg-white rounded-md shadow-md z-10">
          {languages.map((language) => (
            <li key={language.code} className="hover:bg-gray-100">
              <button
                className="flex items-center w-full px-4 py-2 text-left"
                onClick={() => changeLanguage(language.code)}
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-5 h-5 rounded-full mr-2 object-cover"
                />
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
