import { useTranslation } from "react-i18next";

// src/components/Contact.jsx
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t("contact.heading")}
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <div className="flex mb-5 items-center">
          <img src="logos/email.svg" alt="email" className="h-8 w-8 mr-3" />
          {/* Your Email */}
          <a
            href="mailto:rym.ben.amor@gmail.com"
            className="text-gray-600 text-md font-bold hover:text-orange-600"
          >
            rim.doe@dev.com
          </a>
        </div>
        <div className="flex items-center">
          <img src="logos/github.svg" alt="Github" className="h-8 w-8 mr-3" />
          {/* Your Github Username & link */}
          <a
            href="#"
            className="text-gray-600 text-lg font-bold hover:text-orange-600"
            target="_blank"
          >
            git-user
          </a>
        </div>
      </div>
    </div>
  );
}
