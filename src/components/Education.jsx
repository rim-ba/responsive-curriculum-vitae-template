import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  // You would fetch or define education data here
  const educationList = t("education.eduList", { returnObjects: true });
  const volunteerList = t("volunteer.list", { returnObjects: true });
  const certificateList = t("certification.list", { returnObjects: true });

  return (
    <div className="space-y-10 md:space-y-20">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("education.heading")}
        </h2>
        {educationList.map((edu, index) => (
          <a
            href={edu.url}
            target="_blank"
            rel="noreferrer"
            className="p-4"
            key={index}
          >
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow flex items-center space-x-14 md:space-x-40 hover:border-blue-500 border-2"
            >
              <div className="w-1/3 md:w-2/12 lg:w-2/12">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="rounded-xl"
                ></img>
              </div>
              <div className="w-2/3 md:w-10/12 lg:w-2/12">
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600"
                >
                  <h1 className="text-lg md:text-xl font-semibold">
                    {edu.institution}
                  </h1>
                </a>
                <p className="text-md font-medium text-gray-700">
                  {edu.program}
                </p>
                <p className="text-md font-medium text-blue-900">
                  {edu.degree}
                </p>
                <p className="text-gray-600">{edu.years}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* CERTIFICTAION */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("certification.heading")}
        </h2>
        {certificateList.map((cert, index) => (
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="p-4"
            key={index}
          >
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow flex items-center space-x-14 md:space-x-40 hover:border-blue-500 border-2"
            >
              <div className="w-1/3 md:w-2/12">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-full rounded-xl"
                ></img>
              </div>
              {/* </a> */}
              <div className="w-2/3 md:w-10/12 lg:w-2/12">
                <a
                  href={cert.url === "" ? "javascript:void(0);" : cert.url}
                  target={cert.url === "" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="hover:text-pink-600"
                >
                  <h1 className="text-xl font-semibold">{cert.name}</h1>
                </a>
                <p className="text-md font-medium text-gray-700">
                  {cert.position}
                </p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* VOLUNTEER */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-white ">
          {t("volunteer.heading")}
        </h2>
        {volunteerList.map((volu, index) => (
          <a
            href={volu.url}
            target="_blank"
            rel="noreferrer"
            className="p-4"
            key={index}
          >
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow flex items-center space-x-14 md:space-x-40 hover:border-blue-500 border-2"
            >
              <div className="w-1/3 md:w-2/12">
                <img
                  src={volu.logo}
                  alt={volu.name}
                  className="w-full rounded-xl"
                ></img>
              </div>
              <div className="w-2/3 md:w-10/12 lg:w-2/12">
                <a
                  href={volu.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600"
                >
                  <h1 className="text-xl font-semibold">{volu.name}</h1>
                </a>
                <p className="text-md font-medium text-gray-700">
                  {volu.position}
                </p>
                <p className="text-gray-600">{volu.period}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
