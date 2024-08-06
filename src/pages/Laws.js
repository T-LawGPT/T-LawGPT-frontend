// src/pages/Laws.js
import React, { useState } from 'react';
import LawCard from '../components/LawCard';
import DecisionCard from '../components/DecisionCard';
import Hero from '../components/Hero';
import laws from '../data/laws';
import decisions from '../data/decisions'; // Assuming you have a decisions data file
import { FaSpinner } from 'react-icons/fa';

const Laws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLaws, setFilteredLaws] = useState(laws);
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [filteredDecisions, setFilteredDecisions] = useState(decisions);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const results = laws.filter(law =>
        law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.hierarchy_of_law.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.regional.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.reference.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const decisionResults = decisions.filter(decision =>
        decision.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        decision.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        decision.date.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLaws(results);
      setSearch(searchQuery)
      setSearchQuery('')
      setFilteredDecisions(decisionResults);
      setLoading(false);
    }, 1000);
    // Simulate a delay for loading
  };

  const handleFilter = (criteria) => {
    let results = []
    let decisionResults = []
    setLoading(true);
    setTimeout(() => {
      if (criteria === "ภาพรวม") {
        setSearch('')
        setFilter('')
        results = laws
        decisionResults = decisions
      }
      else {
        setFilter(criteria)
        results = laws.filter(law => law.hierarchy_of_law === criteria);
        decisionResults = decisions.filter(decision => decision.type === criteria);
      }

      setFilteredLaws(results);
      setFilteredDecisions(decisionResults);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} handleFilter={handleFilter} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <p className="mb-6">Search: {search} {filter}</p>
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="text-4xl text-blue-500 animate-spin" />
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex bg-gray-200 p-4 mb-2">
                <div className="flex-1 font-bold text-gray-800">Title</div>
                <div className="flex-1 font-bold text-gray-800">Summary</div>
                <div className="flex-.5 font-bold text-gray-800">URL</div>
              </div>
              {filteredLaws.map((law, index) => (
                <LawCard key={index} law={law} />
              ))}
              {filteredDecisions.map((decision, index) => (
                <DecisionCard key={index} decision={decision} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laws;
