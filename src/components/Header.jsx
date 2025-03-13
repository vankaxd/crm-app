import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaBell, FaCog } from "react-icons/fa";

export default function Header({ toggleMenu }) {
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const messagesRef = useRef(null);

  const toggleMessages = () => {
    setIsMessagesOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setIsMessagesOpen(false);
      }
    };

    if (isMessagesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMessagesOpen]);

  return (
    <div className="bg-white p-6 shadow-md flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-gray-800">CRM-App</h1>
        <div
          className="group border border-transparent p-2 transition-all duration-300 bg-light-purple hover:bg-hover-purple rounded-2xl"
          onClick={toggleMenu}
        >
          <FaBars className="text-black group-hover:text-white" />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative">
          <div
            className="group border border-transparent p-2 transition-all duration-300 bg-light-purple hover:bg-hover-purple rounded-2xl cursor-pointer"
            onClick={toggleMessages}
          >
            <FaBell className="text-black group-hover:text-white" />
          </div>

          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>

        <div className="group flex justify-between items-center space-x-4 bg-light-purple px-3 py-2 rounded-full hover:bg-hover-purple transition-all duration-300">
          <img src="./public/UserIcon.png" alt="User" className="w-8" />
          <FaCog className="group-hover:text-white" />
        </div>
      </div>

      {isMessagesOpen && (
        <div
          ref={messagesRef}
          className="absolute top-18 right-10 w-64 bg-white shadow-lg rounded-lg p-4 z-10"
        >
          <h3 className="text-lg font-semibold mb-4">Сообщения</h3>
          <p>Сообщений нет</p>
        </div>
      )}
    </div>
  );
}
