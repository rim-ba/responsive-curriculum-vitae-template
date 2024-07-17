// src/components/NavigationMenu.jsx
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      name: t("navigation.projects"),
      key: "projects",
      link: "/projects",
    },
    { name: t("navigation.work"), key: "work", link: "/work" },
    {
      name: t("navigation.education"),
      key: "education",
      link: "/education",
    },
    {
      name: t("navigation.skills"),
      key: "skills",
      link: "/skills",
    },
    {
      name: t("navigation.contact"),
      key: "contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex">
      {menuItems.map((item) => (
        <NavLink
          key={item.key}
          to={item.link}
          className={({ isActive }) =>
            `flex-1 py-4 text-center md:h-16 w-4/12 ${
              isActive
                ? "bg-sage text-white font-semibold text-sm md:text-lg"
                : "bg-feldgrau text-gray-200 text-sm md:text-lg font-semibold lg:border-feldgrau lg:border-2 "
            } hover:bg-sage focus:outline-none`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationMenu;
