import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import MessageForm from "../forms/MessageForm";

export default function CitizenCard({ citizen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMessageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <div className="flex-1">
      <div
        className="bg-white flex flex-col justify-between min-w-[350px] h-[300px] border rounded-2xl p-5 shadow-md transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={() => navigate("/citizenProfile")}
      >
        <div className="flex items-center gap-4">
          <img
            src="/UserIcon.png"
            alt=""
            className="w-14 h-14 rounded-full bg-light-gray"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {citizen.firstName} {citizen.lastname}
            </h1>
            <p className="text-sm text-gray-500">{citizen.specialty}</p>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-700 flex justify-between items-center">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <span className="text-gray-900 font-semibold">{citizen.email}</span>
          </p>
          <p>
            <span className="font-medium">Телефон:</span>{" "}
            <span className="text-gray-900 font-semibold">
              {citizen.phoneNumber}
            </span>
          </p>
        </div>
        <hr className="my-2 border-gray-300" />

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-600">Статус:</span>
          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-hover-purple text-white">
            {citizen.status}
          </span>
        </div>

        <div className="flex justify-end gap-4 text-xl mt-3">
          <FaTrash className="text-gray-500 cursor-pointer hover:text-red-600 transition" />
          <FaEdit className="text-gray-500 cursor-pointer hover:text-blue-600 transition" />
          <FaMessage
            className="text-gray-500 cursor-pointer hover:text-hover-purple transition"
            onClick={handleMessageClick}
          />
        </div>
      </div>

      {isModalOpen && (
        <MessageForm closeModal={closeModal} citizenId={citizen.id} />
      )}
    </div>
  );
}
