// src/components/Skills.jsx
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  // You would fetch or define skills data here
  // const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];
  const skills = t("skills", { returnObjects: true });

  return (
    <div className="space-y-10">
      {skills.map((skillCat, index) => (
        <div key={index}>
          <h1 className="text-2xl font-bold mb-5 text-white ">
            {skillCat.category}
          </h1>
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            {skillCat.list.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center mb-5 md:mb-7 lg:mb-10"
              >
                <div className="flex md:w-2/12 mr-5 md:ml-0">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    title={skill.name}
                    className="w-16 h-16 lg:w-28 lg:h-28"
                  ></img>
                </div>

                <div className="w-full">
                  <h1 className=" md:text-lg font-semibold">{skill.name}</h1>
                  <div className="w-full bg-slate-200 rounded-2xl">
                    <div
                      style={{ width: `${skill.rating}%` }}
                      className="
              bg-gradient-to-r 
              from-indigo-500 from-10% 
              via-sky-500 
              via-30%  
              to-emerald-500
              to-100%
              h-6
              md:h-14
              lg:h-16 
              rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
