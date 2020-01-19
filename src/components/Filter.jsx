import React, { useState, useEffect } from "react";
import "../styles/filter.css";
import FilterItem from "./FilterItem";

export const Filter = () => {
  const initialState = [{ name: "loading", isActive: false }];
  const [filters, setFilters] = useState(initialState);

  useEffect(function() {
    setTimeout(() => {
      setFilters([
        {
          name: "Celulares",
          isActive: false
        },
        {
          name: "Computadoras",
          isActive: false
        },
        {
          name: "Iphones",
          isActive: false
        },
        {
          name: "Mac",
          isActive: false
        },
        {
          name: "Xiaomi",
          isActive: false
        }
      ]);
    }, 100);
  });
  return (
    <div>
      <div className="filterContainer">
        {filters.map((filter) => (
          <FilterItem name={filter.name} />
        ))}
      </div>
    </div>
  );
};
