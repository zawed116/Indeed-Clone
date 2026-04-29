import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  MapPin,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const SalaryGuide = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("India");
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");

  const salaryData = [
    // --- IT INDUSTRY ---
    { title: "Software Engineer", salary: "₹8,81,328 per year", openings: "245 job openings", industry: "IT" },
    { title: "Business Analyst", salary: "₹7,77,539 per year", openings: "120 job openings", industry: "IT" },
    { title: "React Developer", salary: "₹6,50,000 per year", openings: "310 job openings", industry: "IT" },
    { title: "Data Scientist", salary: "₹12,40,000 per year", openings: "85 job openings", industry: "IT" },
    { title: "Cyber Security Analyst", salary: "₹9,20,000 per year", openings: "45 job openings", industry: "IT" },
    
    // --- FINANCE INDUSTRY ---
    { title: "Accountant", salary: "₹2,66,547 per year", openings: "98 job openings", industry: "Finance" },
    { title: "Investment Banker", salary: "₹15,00,000 per year", openings: "30 job openings", industry: "Finance" },
    { title: "Financial Advisor", salary: "₹5,40,000 per year", openings: "65 job openings", industry: "Finance" },
    { title: "Chartered Accountant", salary: "₹10,20,000 per year", openings: "112 job openings", industry: "Finance" },

    // --- HEALTHCARE INDUSTRY ---
    { title: "Nursing Assistant", salary: "₹2,80,237 per year", openings: "55 job openings", industry: "Healthcare" },
    { title: "Medical Officer", salary: "₹9,50,000 per year", openings: "40 job openings", industry: "Healthcare" },
    { title: "Pharmacist", salary: "₹3,20,000 per year", openings: "78 job openings", industry: "Healthcare" },
    { title: "Lab Technician", salary: "₹2,40,000 per year", openings: "120 job openings", industry: "Healthcare" },

    // --- SALES & MARKETING ---
    { title: "Sales Executive", salary: "₹2,61,736 per year", openings: "132 job openings", industry: "Sales" },
    { title: "Digital Marketing Manager", salary: "₹6,80,000 per year", openings: "95 job openings", industry: "Sales" },
    { title: "Real Estate Agent", salary: "₹4,50,000 per year", openings: "200 job openings", industry: "Sales" },
    { title: "Content Strategist", salary: "₹5,20,000 per year", openings: "56 job openings", industry: "Sales" },

    // --- ADMIN & MANAGEMENT ---
    { title: "HR Specialist", salary: "₹3,05,453 per year", openings: "85 job openings", industry: "HR" },
    { title: "Data Entry Clerk", salary: "₹3,10,551 per year", openings: "88 job openings", industry: "Admin" },
    { title: "Office Assistant", salary: "₹2,14,706 per year", openings: "91 job openings", industry: "Admin" },
    { title: "Back Office Executive", salary: "₹5,00,821 per year", openings: "60 job openings", industry: "Operations" },
    { title: "Front Desk Manager", salary: "₹2,57,297 per year", openings: "44 job openings", industry: "Management" },
  ];

  // Filtering Logic (Industry + Search Title)
  const filteredJobs = salaryData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(jobTitle.toLowerCase());
    const matchesIndustry = selectedIndustry === "All industries" || job.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const relatedJobs = selectedJob
    ? salaryData.filter(
        (job) => job.industry === selectedJob.industry && job.title !== selectedJob.title
      ).slice(0, 4) // Sirf top 4 related jobs dikhane ke liye
    : [];

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Hero Section */}
      <div className="bg-[#0d2d6c] text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
             <TrendingUp size={24} className="text-blue-400" />
             <span className="uppercase tracking-widest text-xs font-bold text-blue-300">Salary Insights 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Discover your earning potential
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl">
            Explore high-paying careers, salaries and job openings by industry and location in India.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2557a7]" size={20} />
              <input
                type="text"
                placeholder="Job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-black outline-none rounded-xl bg-gray-50 focus:bg-white transition-all"
              />
            </div>

            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2557a7]" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-black outline-none rounded-xl bg-gray-50 focus:bg-white transition-all"
              />
            </div>

            <button className="w-full bg-[#2557a7] text-white font-black py-4 rounded-xl hover:bg-[#164081] transition-all shadow-lg active:scale-95">
              Search Salaries
            </button>
          </div>
        </div>
      </div>

      {/* Salary Cards Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-black text-[#2d2d2d] mb-2">
              Browse top-paying jobs
            </h2>
            <p className="text-gray-500 font-medium italic">Showing results for {selectedIndustry}</p>
          </div>
          
          <div className="flex flex-col">
            <label className="text-xs font-black uppercase text-gray-400 mb-2 ml-1">Filter by Industry</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="border-2 border-gray-200 rounded-xl px-6 py-3 bg-white font-bold text-[#2d2d2d] focus:border-[#2557a7] outline-none cursor-pointer transition-all shadow-sm"
            >
              <option>All industries</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Sales</option>
              <option>HR</option>
              <option>Admin</option>
            </select>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job)}
              className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-xl ${selectedJob?.title === job.title ? 'border-[#2557a7] ring-4 ring-blue-50' : 'border-transparent shadow-sm'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[#2557a7] group-hover:bg-[#2557a7] group-hover:text-white transition-colors">
                  <Briefcase size={24} />
                </div>
                <span className="text-[10px] font-black bg-gray-100 px-2 py-1 rounded-full uppercase text-gray-500">{job.industry}</span>
              </div>
              
              <h3 className="font-black text-xl mb-1 text-[#2d2d2d]">{job.title}</h3>
              <p className="text-[#2557a7] font-bold text-lg mb-6">
                {job.salary}
              </p>

              <div className="flex justify-between items-center text-gray-400 font-bold text-xs pt-4 border-t border-gray-50">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {job.openings}
                </span>
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* Related Jobs Section */}
        {selectedJob && (
          <div className="mt-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-10 w-2 bg-[#2557a7] rounded-full"></div>
              <h2 className="text-3xl font-black text-[#2d2d2d]">
                Recommended for you in {selectedJob.industry}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedJobs.map((job, index) => (
                <div key={index} className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-all gap-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="bg-gray-100 p-4 rounded-xl text-gray-600"><Briefcase size={24}/></div>
                    <div>
                      <h3 className="font-bold text-lg text-[#2d2d2d]">{job.title}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <MapPin size={14} /> {location} • {job.salary}
                      </div>
                    </div>
                  </div>
                  <button className="whitespace-nowrap bg-[#2557a7] text-white px-8 py-3 rounded-xl font-black hover:bg-[#164081] transition-all w-full md:w-auto">
                    View Jobs
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <Search size={64} className="mx-auto text-gray-200 mb-4" />
            <h2 className="text-2xl font-black text-gray-400 uppercase tracking-widest">No matching jobs found</h2>
            <p className="text-gray-400 mt-2 font-medium">Try searching for a different title or reset filters.</p>
            <button 
              onClick={() => {setJobTitle(""); setSelectedIndustry("All industries");}}
              className="mt-6 text-[#2557a7] font-black underline underline-offset-8"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryGuide;