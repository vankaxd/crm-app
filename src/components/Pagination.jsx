import React from "react";

export default function Pagination({ totalPages, onPageChange, currentPage }) {
  const maxVisiblePages = 7;

  const calculatePageNumbers = () => {
    const maxVisibleHalf = Math.floor(maxVisiblePages / 2);

    let leftSiblingIndex = Math.max(currentPage - maxVisibleHalf, 1);
    let rightSiblingIndex = Math.min(currentPage + maxVisibleHalf, totalPages);

    if (totalPages <= maxVisiblePages) {
      leftSiblingIndex = 1;
      rightSiblingIndex = totalPages;
    }

    const pages = [];
    if (leftSiblingIndex > 1) {
      pages.push(1);
      if (leftSiblingIndex > 2) pages.push("...");
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    if (rightSiblingIndex < totalPages) {
      if (rightSiblingIndex < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = calculatePageNumbers();

  return (
    <div className="flex items-center gap-2 mt-6">
      <button
        className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 focus:outline-none ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full transition-all duration-300 font-semibold ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => {
            if (page !== "...") {
              onPageChange(page);
            }
          }}
        >
          {page}
        </button>
      ))}

      <button
        className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 focus:outline-none ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
}
