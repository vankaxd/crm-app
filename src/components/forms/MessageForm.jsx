import React, { useState } from "react";

export default function MessageForm({ closeModal, citizenId }) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлено сообщение:", {
      user: citizenId,
      subject,
      message,
      file,
    });
    closeModal();
  };

  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Отправить сообщение</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700"
            >
              Тема
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Введите тему"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите ваше сообщение"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={4}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-semibold text-gray-700"
            >
              Прикрепить файл
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Закрыть
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
