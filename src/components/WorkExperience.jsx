import { useTranslation } from "react-i18next";

export default function WorkExperience() {
  const { t } = useTranslation();

  const workExperiences = t("work.workExperience", { returnObjects: true });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t("work.heading")}
      </h2>
      {workExperiences.map((experience, index) => (
        <a
          href={experience.url}
          target="_blank"
          rel="noreferrer"
          className="p-4"
          key={index}
        >
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl shadow hover:border-blue-500 border-2"
          >
            <div className="bg-gray-100 md:flex items-center space-x-3 md:justify-between">
              <div className="md:w-6/12 lg:w-4/12 md:flex md:items-center md:justify-between">
                {/* LOGO + Company Name */}
                <div className="flex items-center space-x-8 pb-5 md:pb-0 md:w-3/12 lg:w-7/12">
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
                      <h3 className="text-xl font-semibold hover:text-sky-700">
                        {experience.company}
                      </h3>
                    </a>
                    {/* Job Title */}
                    <p className="text-md font-medium text-gray-700 ">
                      {experience.title}
                    </p>
                  </div>
                </div>
                {/* Period */}
                <div className="text-base font-bold md:w-4/12">
                  {experience.period}
                </div>
              </div>
              <div className="md:w-6/12 lg:w-7/12">
                {/* Job Responsibilities */}
                <ul className="list-disc ml-5 mt-2 ">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx} className="pb-6 md:pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
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
