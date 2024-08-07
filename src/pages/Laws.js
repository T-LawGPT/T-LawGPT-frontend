import React, { useState, useEffect } from 'react';
import LawCard from '../components/LawCard';
import DecisionCard from '../components/DecisionCard';
import Hero from '../components/Hero';
import laws from '../data/laws';
import decisions from '../data/decisions'; // Assuming you have a decisions data file
import { FaSpinner } from 'react-icons/fa';

const Laws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLaws, setFilteredLaws] = useState(laws);
  const [filter, setFilter] = useState('');
  const [filteredDecisions, setFilteredDecisions] = useState(decisions);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const applyFilterAndSearch = (criteria, query) => {
    setLoading(true);
    setTimeout(() => {
      let results = laws;
      let decisionResults = decisions;

      if (criteria) {
        results = results.filter(law => law.hierarchy_of_law === criteria);
        decisionResults = decisionResults.filter(decision => decision.type === criteria);
      }

      if (query) {
        results = results.filter(law =>
          law.title.toLowerCase().includes(query.toLowerCase()) ||
          law.date.toLowerCase().includes(query.toLowerCase()) ||
          law.hierarchy_of_law.toLowerCase().includes(query.toLowerCase()) ||
          law.regional.toLowerCase().includes(query.toLowerCase()) ||
          law.reference.toLowerCase().includes(query.toLowerCase()) ||
          law.summary.includes(query.toLowerCase())
        );
        decisionResults = decisionResults.filter(decision =>
          decision.title.toLowerCase().includes(query.toLowerCase()) ||
          decision.summary.toLowerCase().includes(query.toLowerCase()) ||
          decision.date.toLowerCase().includes(query.toLowerCase())
        );
      }
      setSearch(searchQuery)
      setFilter(criteria)
      setFilteredLaws(results);
      setFilteredDecisions(decisionResults);
      setLoading(false);
    }, 1000); // Simulate a delay for loading
  };

  const handleSearch = () => {
    applyFilterAndSearch(filter, searchQuery);
  };

  const handleFilter = (criteria) => {
    setFilter(criteria === "ภาพรวม" ? '' : criteria);
    applyFilterAndSearch(criteria === "ภาพรวม" ? '' : criteria, searchQuery);
  };

  useEffect(() => {
    if (!searchQuery) {
      applyFilterAndSearch(filter, searchQuery);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div>
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} handleFilter={handleFilter} />
      <div className="p-6 bg-gray-100 min-h-screen">

        <div className="container mx-auto">
          <p className="mb-6">ค้นหา: {search} {filter}</p>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="text-4xl text-blue-500 animate-spin" />
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex bg-gray-200 p-4 mb-2">
                <div className="flex-1 font-bold text-gray-800">หัวข้อกฏหมาย</div>
                <div className="flex-1 font-bold text-gray-800">
                  สรุป <span className="text-xs text-gray-500">(ไม่สามารถอ้างอิงทางกฏหมายได้)</span>
                </div>
                <div className="flex-.5 font-bold text-gray-800">อ้างอิง</div>
              </div>
              {!filteredLaws && !filteredDecisions ? <>Sorry no code</> : <>{filteredLaws.map((law, index) => (
                <LawCard key={index} law={law} />
              ))}
                {filteredDecisions.map((decision, index) => (
                  <DecisionCard key={index} decision={decision} />
                ))}
              </>}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Laws;
