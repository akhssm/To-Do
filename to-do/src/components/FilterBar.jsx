// FilterBar.jsx
import React from "react";
import "./FilterBar.css";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button
        className={filter === "Pending" ? "active" : ""}
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterBar;
