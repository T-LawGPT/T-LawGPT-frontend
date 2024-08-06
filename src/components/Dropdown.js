// src/components/Dropdown.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Dropdown = ({ label, items, handleFilter }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-gray-700"
      >
        {label}
        {open? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>
      {open && (
        <div className="absolute mt-2 bg-gray-100 border border-gray-300 shadow-sm">
          {items.map((item, index) => (
            <button key={index}
              className="py-2 text-left px-4 w-40 hover:bg-gray-400"
              onClick={() => {
                handleFilter(item)
                setOpen(false)
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
