import React, { useEffect, useState, useCallback } from "react";
import Charts from "../components/Charts";
import { generateCitizens } from "../utils/generateCitizens";
import CitizenTable from "../components/CitizenTable";
import StatCard from "../components/Cards/StatCard";

export default function Dashboard() {
  const [citizens, setCitizens] = useState([]);

  const fetchCitizens = useCallback(() => {
    setTimeout(() => {
      setCitizens(generateCitizens(100));
    }, 2000);
  }, []);

  useEffect(() => {
    fetchCitizens();
  }, [fetchCitizens]);

  const totalCitizens = citizens.length;
  const employed = citizens.filter((c) => c.status === "Работающий").length;
  const unemployed = citizens.filter(
    (c) => c.status === "Не работающий"
  ).length;
  const onVacation = citizens.filter((c) => c.status === "Отпуск").length;

  return (
    <div className="w-full h-auto p-4">
      <div className="flex flex-wrap w-full gap-8">
        <div className="w-full lg:w-3/4 h-[350px]">
          <Charts />
        </div>

        <div className="w-full lg:w-1/5 flex flex-wrap gap-4 mt-8 lg:mt-0">
          <StatCard title="Всего" value={totalCitizens} />
          <StatCard title="Работающие" value={employed} />
          <StatCard title="Без работы" value={unemployed} />
          <StatCard title="В отпуске" value={onVacation} />
        </div>
      </div>
      <div className="w-full mt-24">
        <CitizenTable citizens={citizens} />
      </div>
    </div>
  );
}
