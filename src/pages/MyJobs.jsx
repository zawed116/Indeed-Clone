import React, { useState } from "react";
import { MoreHorizontal, Bookmark, MapPin, IndianRupee } from "lucide-react";

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("Saved");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const jobsData = {
    Saved: [
      {
        title: "Full Stack Developer",
        company: "Scideas Solutions Pvt. Ltd.",
        location: "Laxmi Nagar, Delhi",
        salary: "₹6,00,000 - ₹8,00,000 a year",
        type: "Full-time",
        skills: "React, Node.js, MongoDB",
        date: "Saved on 7 Jan",
      },
      {
        title: "Frontend Developer",
        company: "TechNova Pvt Ltd",
        location: "Noida, Uttar Pradesh",
        salary: "₹5,50,000 a year",
        type: "Remote",
        skills: "React, Tailwind CSS",
        date: "Saved on 10 Jan",
      },
      {
        title: "React Developer",
        company: "Websoft Solutions",
        location: "Gurgaon, Haryana",
        salary: "₹7,20,000 a year",
        type: "Hybrid",
        skills: "React, Redux",
        date: "Saved on 12 Jan",
      },
    ],

    Applied: [
      {
        title: "Software Engineer",
        company: "Infosys",
        location: "Bangalore",
        status: "Application under review",
      },
      {
        title: "Backend Developer",
        company: "TCS",
        location: "Hyderabad",
        status: "Shortlisted",
      },
      {
        title: "UI Developer",
        company: "Wipro",
        location: "Pune",
        status: "Application sent",
      },
    ],

    Interviews: [
      {
        title: "React JS Developer",
        company: "Google",
        location: "Bangalore",
        interviewDate: "25 Jan 2026",
      },
      {
        title: "Frontend Engineer",
        company: "Amazon",
        location: "Hyderabad",
        interviewDate: "28 Jan 2026",
      },
    ],

    Archived: [
      {
        title: "Junior Developer",
        company: "StartupX",
        location: "Delhi",
        reason: "Position Closed",
      },
      {
        title: "Web Designer",
        company: "Creative Labs",
        location: "Mumbai",
        reason: "Job Expired",
      },
    ],
  };

  const suggestedJobs = [
    {
      title: "JavaScript Developer",
      company: "TechSoft Pvt Ltd",
      location: "Noida",
    },
    {
      title: "MERN Stack Developer",
      company: "CodeCraft",
      location: "Delhi",
    },
    {
      title: "Frontend Engineer",
      company: "StartupHub",
      location: "Gurgaon",
    },
  ];

  const tabs = ["Saved", "Applied", "Interviews", "Archived"];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">My jobs</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b mb-8 text-gray-600 font-bold">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowSuggestions(false);
            }}
            className={`pb-2 cursor-pointer ${
              activeTab === tab
                ? "border-b-4 border-black text-black"
                : "hover:text-black"
            }`}
          >
            {jobsData[tab].length} {tab}
          </span>
        ))}
      </div>

      {/* Main Jobs */}
      <div className="space-y-6">
        {jobsData[activeTab].map((job, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 flex justify-between items-start shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                <Bookmark size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  {job.location}
                </div>

                {job.salary && (
                  <div className="flex items-center gap-2 text-sm text-green-600 mt-2">
                    <IndianRupee size={14} />
                    {job.salary}
                  </div>
                )}

                {job.type && (
                  <p className="text-sm text-blue-600 mt-1">{job.type}</p>
                )}

                {job.skills && (
                  <p className="text-sm text-gray-500 mt-1">
                    Skills: {job.skills}
                  </p>
                )}

                {job.status && (
                  <p className="text-sm text-blue-500 mt-2">{job.status}</p>
                )}

                {job.interviewDate && (
                  <p className="text-sm text-green-500 mt-2">
                    Interview: {job.interviewDate}
                  </p>
                )}

                {job.reason && (
                  <p className="text-sm text-red-500 mt-2">{job.reason}</p>
                )}

                {job.date && (
                  <p className="text-xs text-gray-400 mt-2 italic">
                    {job.date}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Bookmark
                className="fill-black text-black cursor-pointer"
                size={20}
              />
              <MoreHorizontal
                className="text-gray-500 cursor-pointer"
                size={20}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Not seeing a job */}
      <button
        onClick={() => setShowSuggestions(!showSuggestions)}
        className="mt-10 text-[#2557a7] font-bold hover:underline"
      >
        Not seeing a job?
      </button>

      {/* Suggested Jobs */}
      {showSuggestions && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Suggested jobs for you</h2>

          <div className="space-y-4">
            {suggestedJobs.map((job, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 bg-gray-50 hover:bg-white hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.location}</p>

                <button className="mt-4 bg-[#2557a7] text-white px-5 py-2 rounded-lg font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJobs;