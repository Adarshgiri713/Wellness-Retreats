import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import FilterStyle from "./FilterStyle.css"
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Filter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [type, setType] = useState("");

  const handleFilter = () => {
    onFilter({ startDate, type });
  };

  return (
    <FilterContainer>
      <div className="date">
        <label>Date: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="type">
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Fitness">Fitness</option>
          <option value="Body Spa">Relax</option>
          <option value="Dancing">Glow</option>
          <option value="Playing">Active</option>
          <option value="Walking">Healthy</option>
        </select>
      </div>
      
      <div className="button">
      <button onClick={handleFilter}>Filter</button>
      </div>
    </FilterContainer>
  );
};

export default Filter;
