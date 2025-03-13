import React from "react";
import { generateCitizens } from "../utils/generateCitizens";

export default function CitizenProfile() {
  const citizen = generateCitizens(1)[0];
  console.log(citizen);

  return (
    <div className="flex flex-col lg:flex-row w-full p-6 bg-color-background rounded-xl shadow-md gap-6">
      <div className="flex flex-col items-center h-1/3 w-full lg:w-1/3 bg-light-gray p-6 rounded-xl shadow-md">
        <img
          src="/UserIcon.png"
          alt="User Avatar"
          className="w-48 h-48 rounded-full shadow-md border-4 border-hover-purple"
        />
        <h1 className="text-2xl font-semibold text-black mt-4">
          {citizen.firstName} {citizen.lastName}
        </h1>
        <p className="text-gray-600 text-lg">{citizen.role}</p>
        <div className="flex flex-col mt-4 w-full gap-2 text-center">
          <p className="text-sm text-gray-500">{citizen.status}</p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span>{citizen.phoneNumber}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span>{citizen.email}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-2/3 bg-light-gray p-6 rounded-xl shadow-md">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-hover-purple border-b-2 border-hover-purple pb-2">
            Общая информация
          </h2>
          <p className="text-lg text-black font-light">
            <span className="font-semibold">Тип занятости:</span>{" "}
            {citizen.employmentType}
          </p>
          <p className="text-lg text-black font-light">
            <span className="font-semibold">Роль:</span> {citizen.role}
          </p>
          <p className="text-lg text-black font-light">
            <span className="font-semibold">Специальность:</span>{" "}
            {citizen.specialty}
          </p>
          <p className="text-lg text-black font-light">
            <span className="font-semibold">Команда:</span> {citizen.team}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-hover-purple border-b-2 border-hover-purple pb-2">
            Образование
          </h2>
          {citizen.education.map((edu, index) => (
            <p key={index} className="text-black text-lg  mt-2">
              {edu.institution}, {edu.field} ({edu.startYear} - {edu.endYear})
            </p>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-hover-purple border-b-2 border-hover-purple pb-2">
            Опыт работы
          </h2>
          <div className="mt-4 space-y-4">
            {citizen.experience.map((el, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-black">{el.company}</h3>
                <p className="text-gray-600">{el.position}</p>
                <p className="text-sm text-gray-500">
                  {el.startDate.toLocaleDateString()} -{" "}
                  {el.endDate
                    ? el.endDate.toLocaleDateString()
                    : "по настоящее время"}
                </p>
                <ul className="list-disc pl-5 text-gray-700 text-sm mt-2">
                  {el.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
