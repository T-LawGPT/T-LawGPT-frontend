// src/components/LawCard.js
import React from 'react';

const LawCard = ({ law }) => {
  return (
    <div className="flex gap-4 bg-blue-100 shadow-lg rounded-lg p-4 mb-4 transition transform hover:shadow-xl w-full">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{law.title}</h2>
        <p className="text-gray-600 mb-1">{law.date}</p>
        <p className="text-gray-600 mb-1">{law.begin_year} - {law.end_year} ({law.begin_year_be} - {law.end_year_be} BE)</p>
        <p className="text-gray-600 mb-1">{law.hierarchy_of_law}</p>
      </div>

      <div className="flex-1">
        <p className="text-gray-600 mb-1">{law.summary}</p>
      </div>
      <div className="flex-.5 px-2">
        {law.reference_url && (
          <p className="text-gray-600 mb-1">
            <a href={law.reference_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
             อ้างอิง
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default LawCard;
