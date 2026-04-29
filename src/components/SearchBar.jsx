import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ setSearch, search, handleSearch }) => {
  return (
    <div className="bg-white pt-10 pb-6 px-4 border-b">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row border-2 border-gray-400 rounded-xl overflow-hidden shadow-sm focus-within:border-[#2557a7] transition-all">
        {/* Title Search */}
        <div className="flex-1 flex items-center px-4 py-3 bg-white border-b md:border-b-0 md:border-r border-gray-300">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Job title, keywords, or company" 
            className="w-full outline-none font-medium text-gray-800"
            value={search.title}
            onChange={(e) => setSearch({ ...search, title: e.target.value })}
          />
        </div>

        {/* Location Search */}
        <div className="flex-1 flex items-center px-4 py-3 bg-white">
          <MapPin size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="City, state, or zip code" 
            className="w-full outline-none font-medium text-gray-800"
            value={search.loc}
            onChange={(e) => setSearch({ ...search, loc: e.target.value })}
          />
        </div>

        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="bg-[#2557a7] text-white px-10 py-3 font-bold hover:bg-[#164081] transition-colors active:scale-95"
        >
          Find jobs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;