import React, { useState } from "react";
import RetreatList from "./components/RetreatList";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import "./App.css";

const initialRetreats = [
  { id: 1, name: "Yoga Retreat", type: "Yoga", date: "2024-08-01" },
  { id: 2, name: "Meditation Retreat", type: "Meditation", date: "2024-08-10" },
  { id: 3, name: "Fitness Retreat", type: "Fitness", date: "2024-08-20" },
  { id: 4, name: "Body Spa", type: "Relax", date: "2024-08-19" },
  { id: 5, name: "Dancing", type: "Glow", date: "2024-07-28" },
  { id: 6, name: "Playing", type: "Active", date: "2017-07-25" },
  { id: 7, name: "Walking", type: "Healthy", date: "2018-07-02" },
];

const ITEMS_PER_PAGE = 5;

const App = () => {
  const [retreats, setRetreats] = useState(initialRetreats);
  const [filteredRetreats, setFilteredRetreats] = useState(initialRetreats);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFilter = ({ startDate, type }) => {
    let filtered = retreats;

    if (startDate) {
      filtered = filtered.filter(
        (retreat) => new Date(retreat.date) >= startDate
      );
    }

    if (type) {
      filtered = filtered.filter((retreat) => retreat.type === type);
    }

    setFilteredRetreats(filtered);
    setCurrentPage(0); //  Use to Reset to the first page on filter change
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedRetreats = filteredRetreats.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="App">
      <h1>Wellness Retreats</h1>
      <Filter onFilter={handleFilter} />
      <RetreatList retreats={paginatedRetreats} />
      <Pagination
        pageCount={Math.ceil(filteredRetreats.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
