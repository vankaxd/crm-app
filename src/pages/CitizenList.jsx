import React, { useState, useCallback, useEffect, useMemo } from "react";
import { generateCitizens } from "../utils/generateCitizens";
import Pagination from "../components/Pagination";
import FiltersModal from "../components/FiltersModal";
import useDebounce from "../hooks/useDebounce";
import CitizenCard from "../components/Cards/CitizenCard";

export default function CitizenList() {
  const [allCitizens, setAllCitizens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [filters, setFilters] = useState({
    role: "",
    specialty: "",
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    "Инженер",
    "Менеджер",
    "Дизайнер",
    "Тестировщик",
    "Программист",
  ];
  const specialties = [
    "Программирование",
    "Тестирование",
    "Проектирование",
    "Дизайн",
  ];
  const statuses = ["Работающий", "Не работающий", "Отпуск", "Больничный"];
  const filtersData = { roles, specialties, statuses };

  const resetFilters = () => {
    setFilters({ role: "", specialty: "", status: "" });
  };

  const fetchCitizens = useCallback(() => {
    setTimeout(() => {
      setAllCitizens(generateCitizens(200));
    }, 100);
  }, []);

  useEffect(() => {
    fetchCitizens();
  }, [fetchCitizens]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth > 1024 ? 12 : 6);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const applyFilters = (type, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [type]: value }));
  };

  const debouncedQuery = useDebounce(searchQuery, 600);

  const filteredCitizens = useMemo(() => {
    return allCitizens
      .filter((citizen) => {
        const fullName =
          `${citizen.firstName} ${citizen.lastname}`.toLowerCase();
        return fullName.includes(debouncedQuery.toLowerCase());
      })
      .filter((citizen) => {
        if (filters.role && citizen.role !== filters.role) return false;
        if (filters.specialty && citizen.specialty !== filters.specialty)
          return false;
        if (filters.status && citizen.status !== filters.status) return false;
        return true;
      });
  }, [allCitizens, debouncedQuery, filters]);

  const totalPages = Math.ceil(filteredCitizens.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCitizens = filteredCitizens.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="h-screen">
      <div className="w-auto flex justify-between border-b-2 p-6 ">
        <h1 className="text-3xl">Users</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-auto border-2 border-gray-300 rounded-lg p-2 hover:border-hover-purple focus:outline-none focus:border-hover-purple transition-all duration-300"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-light-purple font-medium text-black py-2 px-4 rounded-lg hover:bg-hover-purple transition-all duration-300 "
          >
            Фильтры
          </button>
        </div>
      </div>
      <div className="w-full h-auto flex flex-wrap gap-6 justify-center px-8 py-4">
        {currentCitizens.map((citizen) => (
          <CitizenCard key={citizen.id} citizen={citizen} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <FiltersModal
        filters={filtersData}
        selectedFilters={filters}
        onFilterSelect={applyFilters}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        onResetFilters={resetFilters}
      />
    </div>
  );
}
