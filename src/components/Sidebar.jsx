import React from "react";
import { FaHome, FaUsers, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpened }) {
  return (
    <div
      className={`h-auto transition-all duration-300 ${
        isOpened ? "w-22" : "w-64"
      } bg-white text-black p-6 shadow-lg`}
    >
      <div className="text-2xl font-bold uppercase flex justify-between items-center"></div>
      <ul
        className={`mt-4 transition-all duration-300 ${
          !isOpened ? "" : "flex justify-center items-center flex-col space-y-4"
        }`}
      >
        <li>
          <Link
            to="/"
            className="font-semibold text-lg flex items-center gap-2 text-black hover:text-white px-4 py-3 rounded-2xl border border-transparent hover:border-light-purple hover:bg-light-purple transition-all duration-300 ease-in-out"
          >
            <FaHome className={!isOpened ? "text-2xl" : "text-3xl"} />
            {!isOpened && <span>Главная</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/citizenList"
            className="font-semibold text-lg flex items-center gap-2 text-black hover:text-white px-4 py-3 rounded-2xl border border-transparent hover:border-light-purple hover:bg-light-purple transition-all duration-300 ease-in-out"
          >
            <FaUsers className={!isOpened ? "text-2xl" : "text-3xl"} />
            {!isOpened && <span>Пользователи</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}
