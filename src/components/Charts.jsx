import React, { useCallback, useEffect, useState } from "react";
import { generateCitizens } from "../utils/generateCitizens";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const categories = {
  role: "Роли",
  specialty: "Специальности",
  team: "Команды",
  status: "Статусы",
};

export default function Charts() {
  const [citizens, setCitizens] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("role");

  const fetchCitizens = useCallback(() => {
    setTimeout(() => {
      setCitizens(generateCitizens(100));
    }, 2000);
  }, []);

  useEffect(() => {
    fetchCitizens();
  }, [fetchCitizens]);

  const categoryCount = citizens.reduce((acc, citizen) => {
    const key = citizen[selectedCategory];
    if (key) {
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        label: "Количество",
        data: Object.values(categoryCount),
        backgroundColor: "rgba(213, 184, 255)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex w-full gap-2 mb-4 border-b-1">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-t-lg ${
              selectedCategory === key
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-black"
            } transition-all`}
          >
            {label}
          </button>
        ))}
      </div>

      {citizens.length === 0 ? (
        <p>Загружаются данные...</p>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
}
