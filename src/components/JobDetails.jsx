import React from 'react';
import { Star, Bookmark, Share2, ThumbsDown, ExternalLink } from 'lucide-react';

const JobDetails = ({ job, isSaved, onSave }) => {
  if (!job) return null;

  return (
    <div className="hidden lg:block flex-1 bg-white border border-gray-200 rounded-2xl shadow-lg sticky top-24 h-fit max-h-[85vh] overflow-y-auto">
      {/* Header Info */}
      <div className="p-8 border-b">
        <h2 className="text-3xl font-extrabold text-[#2d2d2d] mb-2">{job.title}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#2557a7] hover:underline cursor-pointer font-bold border-b border-[#2557a7] leading-none pb-0.5">
            {job.company}
          </span>
          <span className="flex items-center gap-1 text-sm bg-gray-100 px-1.5 py-0.5 rounded font-bold border border-gray-200">
            {job.rating} <Star size={12} className="fill-black" />
          </span>
        </div>
        <p className="text-gray-700 font-medium">{job.location}</p>
        <p className="font-bold text-lg mt-4 text-[#2d2d2d]">{job.salary}</p>
        
        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="bg-[#2557a7] text-white px-8 py-2.5 rounded-lg font-bold text-lg hover:bg-[#164081] transition-all active:scale-95">
            Apply with Indeed
          </button>
          <button 
            onClick={() => onSave(job.id)}
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors"
          >
            <Bookmark size={20} className={isSaved ? "fill-[#2557a7] text-[#2557a7]" : ""} />
          </button>
          <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"><ThumbsDown size={20} /></button>
          <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 border border-gray-300"><Share2 size={20} /></button>
        </div>
      </div>

      {/* Full Description Section */}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4 text-[#2d2d2d]">Job details</h3>
        <div className="space-y-6 text-[#2d2d2d] text-[16px] leading-relaxed">
          <p className="font-medium">{job.description}</p>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Full Job Description:</h4>
            <p>Join our growing team at **{job.company}**! We are looking for a dedicated professional who is passionate about delivering high-quality results. In this role, you will work closely with other team members to contribute to the success of our ongoing projects.</p>
            
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Excellent communication skills.</li>
              <li>Ability to work in a fast-paced environment.</li>
              <li>Attention to detail and problem-solving skills.</li>
            </ul>
          </div>

          <button className="text-[#2557a7] font-bold flex items-center gap-2 hover:underline mt-8">
            View full job description <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;