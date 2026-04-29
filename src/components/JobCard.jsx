import React from 'react';
import { Bookmark, ThumbsDown } from 'lucide-react';

const JobCard = ({ job, isSelected, onClick, onSave, isSaved }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white p-5 rounded-xl border-2 cursor-pointer shadow-sm relative transition-all duration-200 
        ${isSelected ? 'border-[#2557a7]' : 'border-transparent hover:border-gray-300 hover:shadow-md'}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex gap-2 mb-2 flex-wrap">
            {job.tags.map(tag => (
              <span key={tag} className="bg-[#e8f0fe] text-[#2557a7] px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-[#2d2d2d] hover:underline leading-tight decoration-gray-400">
            {job.title}
          </h3>
          <p className="text-gray-800 font-medium mt-1">{job.company}</p>
          <p className="text-gray-600 text-sm">{job.location}</p>
        </div>

        <div className="flex flex-col gap-4 ml-2">
          <Bookmark 
            size={20} 
            onClick={(e) => { e.stopPropagation(); onSave(job.id); }}
            className={`cursor-pointer transition-colors ${isSaved ? 'fill-[#2557a7] text-[#2557a7]' : 'text-gray-400 hover:text-black'}`} 
          />
          <ThumbsDown size={20} className="text-gray-400 cursor-pointer hover:text-black" />
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
        <span className="bg-[#f3f2f1] text-gray-700 px-2 py-1 rounded text-xs font-bold italic">
          {job.salary}
        </span>
        <span className="bg-[#f3f2f1] text-[#2557a7] px-2 py-1 rounded text-xs font-bold italic">
          ✓ {job.type}
        </span>
      </div>

      <p className="text-xs text-gray-500 mt-4 font-medium italic">Just posted</p>
    </div>
  );
};

export default JobCard;