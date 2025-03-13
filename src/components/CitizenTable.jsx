import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

export default function CitizenTable({ citizens }) {
  const columns = [
    { label: "Имя", key: "firstName", minWidth: 150 },
    { label: "Фамилия", key: "lastName", minWidth: 150 },
    { label: "Статус", key: "status", minWidth: 180 },
    { label: "Роль", key: "role", minWidth: 180 },
    { label: "Команда", key: "team", minWidth: 180 },
  ];

  const Row = ({ index, style }) => {
    const citizen = citizens[index];

    return (
      <div
        className="flex border-b border-gray-300 bg-white hover:bg-gray-100 transition"
        style={style}
      >
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            style={{ minWidth: col.minWidth, flex: 1, padding: "12px" }}
            className="text-sm text-gray-700"
          >
            {citizen ? citizen[col.key] : ""}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8 p-4 bg-white rounded-xl shadow-lg">
      <div className="flex border-1 justify-between flex-1 bg-purple-600 text-white rounded-t-xl py-3 px-4">
        {columns.map((col, index) => (
          <div key={index} className="text-sm font-medium text-white ">
            {col.label}
          </div>
        ))}
      </div>

      <div className="w-full h-[400px]">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={citizens.length}
              itemSize={45}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
