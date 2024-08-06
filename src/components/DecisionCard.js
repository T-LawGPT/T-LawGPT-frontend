// src/components/DecisionCard.js
import React from 'react';

const DecisionCard = ({ decision }) => {
  return (
    <div className="flex gap-4 bg-green-100 shadow-lg rounded-lg p-4 mb-4 transition transform hover:shadow-xl w-full">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{decision.title}</h2>
        <p className="text-gray-600 mb-1">{decision.date}</p>
        <p className="text-gray-600 mb-1">{decision.decision_of_the_constitutional_court}</p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 mb-1">{decision.summary}</p>
      </div>
      <div className="flex-.5 px-2">
        {decision.reference_url && (
          <p className="text-gray-600 mb-1">
            <a href={decision.reference_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
              URL
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default DecisionCard;
