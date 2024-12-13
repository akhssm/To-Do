import React from "react";

const FilterBar = ({ setFilter }) => {
  return (
    <div className="filters">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
    </div>
  );
};

export default FilterBar;
