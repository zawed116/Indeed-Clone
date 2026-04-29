import React, { useState, useRef } from "react";
import {
  CheckCircle,
  Users,
  Briefcase,
  Search,
  Star,
  Building2,
  MapPin,
} from "lucide-react";

const PostJob = () => {
  const [showForm, setShowForm] = useState(false);
  const [postedJobs, setPostedJobs] = useState([]);

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
  });

  const hiringBenefits = [
    {
      title: "Reach quality candidates",
      desc: "Millions of job seekers visit every month.",
    },
    {
      title: "Hire faster",
      desc: "Get matched with relevant applicants quickly.",
    },
    {
      title: "Manage applications easily",
      desc: "Track and review applicants in one place.",
    },
  ];

  const recentCompanies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  // 🔥 Show form + scroll
  const handleShowForm = () => {
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // 🔥 Post job
  const handlePostJob = () => {
    if (
      !formData.title ||
      !formData.company ||
      !formData.location
    )
      return;

    setPostedJobs([
      ...postedJobs,
      {
        ...formData,
        applicants: Math.floor(Math.random() * 50) + 1,
      },
    ]);

    setFormData({
      title: "",
      company: "",
      location: "",
    });

    setShowForm(false);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO */}
      <section className="bg-[#f3f2f1] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] leading-tight mb-6">
              You're here to hire.
              <br />
              We're here to help.
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Post your job and find the right candidates faster.
            </p>

            <button
              onClick={handleShowForm}
              className="bg-[#2557a7] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#164081]"
            >
              Post a job
            </button>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Hiring"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      {showForm && (
        <section ref={formRef} className="py-10 px-6">
          <div className="max-w-3xl mx-auto bg-white border rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">
              Create a job post
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Job title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="w-full border p-4 rounded-lg"
              />

              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: e.target.value,
                  })
                }
                className="w-full border p-4 rounded-lg"
              />

              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  })
                }
                className="w-full border p-4 rounded-lg"
              />

              <button
                onClick={handlePostJob}
                className="w-full bg-[#2557a7] text-white py-4 rounded-lg font-bold"
              >
                Publish Job
              </button>
            </div>
          </div>
        </section>
      )}

      {/* POSTED JOBS */}
      {postedJobs.length > 0 && (
        <section className="py-14 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Your posted jobs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {postedJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold">
                    {job.title}
                  </h3>

                  <p className="text-gray-700 mt-2">
                    {job.company}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <MapPin size={16} />
                    {job.location}
                  </div>

                  <p className="mt-4 text-[#2557a7] font-bold">
                    {job.applicants} Applicants
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            Why employers choose us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {hiringBenefits.map((item, index) => (
              <div key={index} className="border rounded-xl p-6">
                <CheckCircle className="text-[#2557a7] mb-4" />
                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT EMPLOYERS */}
      <section className="bg-[#f8f8f8] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Trusted by top employers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {recentCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 flex items-center gap-4"
              >
                <Building2 className="text-[#2557a7]" />
                <span className="font-bold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            How hiring works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-xl">
              <Briefcase className="mb-4 text-[#2557a7]" />
              Create your job
            </div>

            <div className="border p-6 rounded-xl">
              <Search className="mb-4 text-[#2557a7]" />
              Get applicants
            </div>

            <div className="border p-6 rounded-xl">
              <Users className="mb-4 text-[#2557a7]" />
              Hire the best
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[#2557a7] py-14 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find your next hire?
        </h2>

        <button
          onClick={handleShowForm}
          className="bg-white text-[#2557a7] px-8 py-4 rounded-lg font-bold"
        >
          Post a job
        </button>
      </section>
    </div>
  );
};

export default PostJob;