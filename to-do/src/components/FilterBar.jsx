import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>
        All
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={filter === "Completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("Pending")}
        className={filter === "Pending" ? "active" : ""}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterBar;
