import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- 1. DATA IMPORT ---
import { jobsData } from './data/jobsData';

// --- 2. PAGES IMPORT ---
import CompanyReviews from './pages/CompanyReviews';
import SalaryGuide from './pages/SalaryGuide';
import PostJob from './pages/PostJob';
import MyJobs from './pages/MyJobs';
import AccountSettings from './pages/AccountSettings';
import PrivacyCenter from './pages/PrivacyCenter'; // Naya Page Import

// --- 3. COMPONENTS IMPORT ---
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';
import Auth from './pages/Auth';

// --- 4. HOME PAGE COMPONENT ---
const HomePage = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [search, setSearch] = useState({ title: '', loc: '' });

  const handleSearch = () => {
    const filtered = jobsData.filter(j => 
      j.title.toLowerCase().includes(search.title.toLowerCase()) &&
      j.location.toLowerCase().includes(search.loc.toLowerCase())
    );
    setJobs(filtered);
    if (filtered.length > 0) setSelectedJob(filtered[0]);
  };

  const toggleSave = (id) => {
    setSavedJobs(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#f3f2f1]">
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <main className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
        <div className="w-full lg:w-[450px] space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-[#2d2d2d]">Jobs for you</h2>
          {jobs.length > 0 ? (
            jobs.map(job => (
              <JobCard 
                key={job.id} 
                job={job} 
                isSelected={selectedJob?.id === job.id} 
                onClick={() => setSelectedJob(job)}
                onSave={toggleSave}
                isSaved={savedJobs.includes(job.id)}
              />
            ))
          ) : (
            <p className="p-10 text-center text-gray-500 font-bold bg-white rounded-xl border">No jobs found.</p>
          )}
        </div>
        {selectedJob && (
          <JobDetails 
            job={selectedJob} 
            isSaved={savedJobs.includes(selectedJob.id)} 
            onSave={toggleSave} 
          />
        )}
      </main>
    </div>
  );
};

// --- 5. MAIN APP ---
export default function App() {
  return (
    <Router>
      <div className="font-sans text-[#2d2d2d] min-h-screen bg-white">
        <Navbar notificationCount={4} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<CompanyReviews />} />
          <Route path="/salary" element={<SalaryGuide />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="/privacy-center" element={<PrivacyCenter />} /> 
          <Route path="/auth" element={<Auth />} />
        </Routes>

        <footer className="bg-white border-t mt-20 py-8 text-center text-gray-400 text-sm">
          <p>© 2026 Indeed Clone - Professional Internship Project</p>
        </footer>
      </div>
    </Router>
  );
}