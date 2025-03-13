import React, { useCallback, useEffect, useRef } from "react";

export default function FiltersModal({
  filters,
  selectedFilters,
  onFilterSelect,
  onResetFilters,
  onClose,
  isOpen,
}) {
  const modalRef = useRef(null);

  const handleSelect = (type, value) => {
    onFilterSelect(type, value);
  };

  const handleResetFilters = () => {
    onResetFilters();
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-500/75 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 border rounded-lg shadow-lg w-96 transform transition-all duration-300"
      >
        <h2 className="text-2xl font-semibold mb-4">Фильтры</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Роль</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {filters.roles.map((role) => (
              <button
                key={role}
                onClick={() => handleSelect("role", role)}
                className={`py-2 px-4 rounded-md transition-colors text-sm ${
                  selectedFilters.role === role
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Специальность</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {filters.specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => handleSelect("specialty", specialty)}
                className={`py-2 px-4 rounded-md transition-colors text-sm ${
                  selectedFilters.specialty === specialty
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">Статус</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {filters.statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleSelect("status", status)}
                className={`py-2 px-4 rounded-md transition-colors text-sm ${
                  selectedFilters.status === status
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleResetFilters}
            className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Сбросить
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
