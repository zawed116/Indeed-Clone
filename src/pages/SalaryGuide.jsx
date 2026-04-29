import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  MapPin,
  Briefcase,
} from "lucide-react";

const SalaryGuide = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("India");
  const [selectedJob, setSelectedJob] = useState(null);

  const salaryData = [
    {
      title: "Software Engineer",
      salary: "₹8,81,328 per year",
      openings: "245 job openings",
      industry: "IT",
    },
    {
      title: "Business Analyst",
      salary: "₹7,77,539 per year",
      openings: "120 job openings",
      industry: "IT",
    },
    {
      title: "Accountant",
      salary: "₹2,66,547 per year",
      openings: "98 job openings",
      industry: "Finance",
    },
    {
      title: "Human Resources Specialist",
      salary: "₹3,05,453 per year",
      openings: "85 job openings",
      industry: "HR",
    },
    {
      title: "Customer Service Representative",
      salary: "₹2,84,983 per year",
      openings: "142 job openings",
      industry: "Support",
    },
    {
      title: "Graphic Designer",
      salary: "₹2,64,900 per year",
      openings: "76 job openings",
      industry: "Design",
    },
    {
      title: "Data Entry Clerk",
      salary: "₹3,10,551 per year",
      openings: "88 job openings",
      industry: "Admin",
    },
    {
      title: "Office Assistant",
      salary: "₹2,14,706 per year",
      openings: "91 job openings",
      industry: "Admin",
    },
    {
      title: "Back Office Executive",
      salary: "₹5,00,821 per year",
      openings: "60 job openings",
      industry: "Operations",
    },
    {
      title: "Front Desk Manager",
      salary: "₹2,57,297 per year",
      openings: "44 job openings",
      industry: "Management",
    },
    {
      title: "Sales Executive",
      salary: "₹2,61,736 per year",
      openings: "132 job openings",
      industry: "Sales",
    },
    {
      title: "Nursing Assistant",
      salary: "₹2,80,237 per year",
      openings: "55 job openings",
      industry: "Healthcare",
    },
  ];

  const filteredJobs = salaryData.filter((job) =>
    job.title.toLowerCase().includes(jobTitle.toLowerCase())
  );

  const relatedJobs = selectedJob
    ? salaryData.filter(
        (job) =>
          job.industry === selectedJob.industry &&
          job.title !== selectedJob.title
      )
    : [];

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      {/* Hero Section */}
      <div className="bg-[#0d2d6c] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">
            Discover your earning potential
          </h1>

          <p className="text-sm text-gray-200 mb-8">
            Explore high-paying careers, salaries and job openings by
            industry and location.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl p-4 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-black text-sm font-bold mb-2">What</p>
              <input
                type="text"
                placeholder="Job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-black outline-none"
              />
            </div>

            <div>
              <p className="text-black text-sm font-bold mb-2">Where</p>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-black outline-none"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-[#9fc0f3] text-white font-bold py-3 rounded-lg hover:bg-[#2557a7] transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Cards */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-3">
          Browse top-paying jobs by industry
        </h2>

        <p className="text-gray-600 mb-8">Choose an industry</p>

        {/* Industry dropdown */}
        <select className="border rounded-lg px-4 py-3 mb-8 bg-white">
          <option>All industries</option>
          <option>IT</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Sales</option>
        </select>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job)}
              className="bg-white border rounded-xl p-5 cursor-pointer hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-3">{job.title}</h3>

              <p className="text-[#2557a7] font-semibold text-sm mb-4">
                Average salary {job.salary}
              </p>

              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>{job.openings}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Related Jobs */}
        {selectedJob && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              Related jobs for {selectedJob.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase size={20} />
                    <h3 className="font-bold text-lg">{job.title}</h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    {location}
                  </div>

                  <p className="text-[#2557a7] font-semibold mb-3">
                    {job.salary}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">
                    {job.openings}
                  </p>

                  <button className="bg-[#2557a7] text-white px-6 py-2 rounded-lg font-medium">
                    View Job
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">No jobs found</h2>
            <p className="text-gray-500 mt-2">
              Try another job title
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryGuide;