// src/components/Hero.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from './Dropdown';

const Hero = ({ searchQuery, setSearchQuery, handleSearch, handleFilter }) => {
  return (
    <div className="bg-gray-200 min-h-[65vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">T-LawGPT</h1>
      <div className="flex flex-col items-center mb-6 w-full px-4">
        <div className="text-gray-700 flex items-left mb-2">
          <span className="mr-2">ค้นหาล่าสุด:</span>
          <button className="underline text-gray-500 hover:text-gray-700 mx-1" onClick={() => setSearchQuery('ทรัพยากรน้ำ')}>ทรัพยากรน้ำ</button>
          <button className="underline text-gray-500 hover:text-gray-700 mx-1" onClick={() => setSearchQuery('กัดเซาะชายฝั่ง')}>กัดเซาะชายฝั่ง</button>
          <button className="underline text-gray-500 hover:text-gray-700 mx-1" onClick={() => setSearchQuery('ทรัพย์สิน')}>ทรัพย์สิน</button>
      <button className="underline text-gray-500 hover:text-gray-700 mx-1" onClick={() => setSearchQuery('สมรสเท่าเทียม')}>สมรสเท่าเทียม</button>        
</div>
        <div className="relative w-full max-w-lg"> {/* Adjusted max width to make search bar longer */}
          <input
            type="text"
            placeholder="ค้นหา"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-8 pr-12 text-lg border border-gray-300 rounded-full"
          />
          <button
            onClick={handleSearch}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="text-gray-700 flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          <button onClick={() => handleFilter('ภาพรวม')}>ทั้งหมด</button>
          <button onClick={() => handleFilter('รายงานการประชุม')}>วิชาการ</button>
        </div>
        <div className="flex space-x-8">
          <Dropdown label="กฎหมายแม่บท" items={['รัฐธรรมนูญ', 'พระราชบัญญัติประกอบรัฐธรรมนูญ', 'พระราชบัญญัติ', 'ประมวลกฎหมาย', 'พระราชกำหนด']} handleFilter={handleFilter} />
          <Dropdown label="กฎหมายลำดับรอง" items={['พระราชกฤษฎีกา', 'กฏกระทรวง', 'ข้อบัญญัติท้องถิ่น กทม.', 'ข้อบัญญัติท้องถิ่น พัทยา']} handleFilter={handleFilter} />
          <button onClick={() => handleFilter('คำพิพากษาฎีกา')}>คำพิพากษาฎีกา</button>
          <Dropdown label="คำวินิจฉัย" items={['คำวินิจฉัยศาลรัฐธรรมนูญ', 'คำวินิจฉัยศาลปกครอง']} handleFilter={handleFilter} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
