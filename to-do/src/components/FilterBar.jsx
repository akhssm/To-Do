// import React from "react";

// const FilterBar = ({ setFilter }) => {
//   return (
//     <div className="filters">
//       <button onClick={() => setFilter("All")}>All</button>
//       <button onClick={() => setFilter("Completed")}>Completed</button>
//       <button onClick={() => setFilter("Pending")}>Pending</button>
//     </div>
//   );
// };

// export default FilterBar;



import React from "react";

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
