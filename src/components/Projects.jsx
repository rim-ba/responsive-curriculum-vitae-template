import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("projects.workExperience", { returnObjects: true });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t("projects.heading")}
      </h2>

      {projects.map((experience, index) => (
        <a
          href={experience.url}
          target="_blank"
          rel="noreferrer"
          className="p-4"
          key={index}
        >
          <div
            key={index}
            className="bg-gray-100 p-4 overflow-hidden rounded-xl shadow hover:border-blue-500 border-2"
          >
            <div className="bg-gray-100 md:flex items-center md:space-x-3 md:justify-between ">
              <div className="md:w-6/12 lg:w-4/12 md:flex md:items-center md:justify-between">
                {/* LOGO + Project Name */}
                <div className="flex items-center space-x-8 pb-1 md:pb-0 md:w-3/12 lg:w-7/12">
                  {/* Project Logo */}
                  <img
                    src={experience.companyLogo}
                    alt={experience.company}
                    title={experience.company}
                    className="w-16 h-16 md:h-20 md:w-20 lg:h-32 lg:w-32 rounded-full"
                  ></img>
                  <div className="w-full">
                    {/* Project Link */}
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-sky-700"
                    >
                      {/* Project Name */}
                      <h3 className="text-2xl font-semibold hover:text-sky-700">
                        {experience.company}
                      </h3>
                    </a>
                    {/* Job Title */}
                    <p className="lg:text-md font-medium text-gray-700 ">
                      {experience.title}
                    </p>
                  </div>
                </div>
                {/* Period */}
                <div className="text-base font-medium md:font-bold md:w-4/12">
                  {experience.period}
                </div>
              </div>
              {/* Description */}
              <div className="md:w-6/12 lg:w-7/12 mt-2">
                <p className="lg:text-lg lg:font-semibold ml-5 mt-4 sm:mt-0">
                  {experience.description}
                </p>
              </div>
            </div>
            {/* Used Techs */}
            <div className="flex overflow-auto md:flex-wrap md:justify-end">
              {experience.usedTechs.map((tech, idx) => {
                return (
                  <img
                    key={idx}
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    className="w-12 h-12 rounded-2xl m-5"
                  ></img>
                );
              })}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
