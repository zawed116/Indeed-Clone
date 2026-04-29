import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Bookmark,
  Settings,
  HelpCircle,
  Shield,
  LogOut,
  ChevronRight,
  Star,
  Phone,
} from "lucide-react";

const AccountSettings = () => {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Profile");
  const [helpDetail, setHelpDetail] = useState(null);

  const menuItems = [
    { id: "Profile", icon: <FileText size={20} />, label: "Profile" },
    { id: "Reviews", icon: <Bookmark size={20} />, label: "My reviews" },
    { id: "Settings", icon: <Settings size={20} />, label: "Settings" },
    { id: "Help", icon: <HelpCircle size={20} />, label: "Help" },
    { id: "Privacy", icon: <Shield size={20} />, label: "Privacy Centre" },
  ];

  const helpData = {
    jobseeker: {
      title: "Jobseeker Help Center",
      content:
        "Get help with profile creation, resume upload, job applications, and account management.",
      topics: [
        "How to create profile",
        "Upload resume",
        "Apply for jobs",
        "Track applications",
      ],
    },
    employer: {
      title: "Employer Help Center",
      content:
        "Support for recruiters and employers for posting jobs and managing candidates.",
      topics: [
        "Post a new job",
        "Manage applications",
        "Employer billing",
        "Candidate search",
      ],
    },
    general: {
      title: "General Help Centre",
      content:
        "Find answers to commonly asked questions related to your account and platform usage.",
      topics: [
        "Account issues",
        "Password reset",
        "Notifications",
        "Privacy settings",
      ],
    },
    contact: {
      title: "Contact Support",
      content:
        "Need direct help? Reach out to our support team through available channels.",
      topics: [
        "Email support",
        "Live chat",
        "Call support",
        "Raise ticket",
      ],
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="animate-in fade-in duration-300 max-w-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-[#2d2d2d] uppercase tracking-tight">
                  Intern Developer
                </h1>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FileText size={18} />
                    <span>intern.developer@example.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} />
                    <span>+91 98765 43210</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Shield size={18} />
                    <span>New Delhi, Delhi, 110001, IN</span>
                  </div>
                </div>
              </div>

              <div className="w-20 h-20 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                ID
              </div>
            </div>

            <div className="bg-[#e7f3e8] border border-[#d1e7dd] p-3 rounded-lg flex justify-between items-center mb-10">
              <div className="flex items-center gap-2 text-[#0f5132] font-medium text-sm">
                <Shield size={16} />
                <span>Employers can find you</span>
              </div>
              <ChevronRight
                size={18}
                className="text-[#0f5132] rotate-90"
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-xl py-4">
                Improve your job matches
              </h3>

              {[
                {
                  label: "Qualifications",
                  sub: "Highlight your skills and experience.",
                },
                {
                  label: "Job preferences",
                  sub: "Save details like salary and schedule.",
                },
                {
                  label: "Hide jobs with these details",
                  sub: "Manage hidden job preferences.",
                },
                {
                  label: "Ready to work",
                  sub: "Let employers know you’re available.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-5 border-t border-gray-200 group cursor-pointer hover:bg-gray-50 px-2 transition-all"
                >
                  <div>
                    <p className="font-bold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-gray-400 group-hover:text-black"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case "Reviews":
        return (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-4xl font-bold mb-4 text-[#2d2d2d]">
              My contributions
            </h1>

            <p className="text-[15px] text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Your reviews, questions and answers will appear on the company
              page and won’t be linked to your applications.
            </p>

            <div className="flex gap-10 border-b border-gray-200 mb-16 font-bold text-sm">
              <span className="pb-3 border-b-4 border-black cursor-pointer">
                Reviews (0)
              </span>
              <span className="text-gray-500 pb-3 cursor-pointer hover:text-black">
                Questions (0)
              </span>
              <span className="text-gray-500 pb-3 cursor-pointer hover:text-black">
                Answers (0)
              </span>
            </div>

            <div className="flex flex-col items-center text-center py-10">
              <div className="bg-[#dcae6d] w-28 h-20 rounded-xl p-4 shadow-lg flex flex-col justify-center items-center mb-8">
                <div className="flex gap-1.5 mb-2">
                  {[1, 2, 3].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-white text-white"
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-black mb-3">
                Unlock all reviews
              </h2>

              <p className="text-gray-600 mb-8 font-medium">
                Access all reviews by writing yours
              </p>

              <button className="bg-[#2557a7] text-white px-10 py-3.5 rounded-xl font-black hover:bg-[#164081]">
                Write a review →
              </button>
            </div>
          </div>
        );

      case "Settings":
        return (
          <div className="animate-in fade-in duration-300 max-w-3xl">
            <h1 className="text-3xl font-black mb-8 text-[#2d2d2d]">
              Account settings
            </h1>

            <div className="space-y-0 border-t border-gray-200">
              {[
                {
                  label: "Account type:",
                  value: "Jobseeker",
                  btn: "Change account type",
                },
                {
                  label: "Email",
                  value: "intern.developer@example.com",
                  btn: "Change email",
                },
                {
                  label: "Phone number",
                  value: "+91 98765 43210",
                  btn: "Change phone number",
                },
                {
                  label: "Passkey",
                  value: "Create passkey for faster login",
                  btn: "Create passkey",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="py-6 border-b border-gray-200 flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold text-[#2d2d2d]">{row.label}</p>
                    <p className="text-gray-600 text-sm">{row.value}</p>
                  </div>

                  <button className="text-[#2557a7] font-bold border border-[#2557a7] px-4 py-1.5 rounded-lg hover:bg-blue-50 text-sm">
                    {row.btn}
                  </button>
                </div>
              ))}

              <div className="py-8 flex justify-between items-center">
                <p className="text-gray-600 text-sm">
                  intern.developer@example.com
                </p>

                <button className="text-[#2557a7] font-bold border border-[#2557a7] px-6 py-1.5 rounded-lg hover:bg-blue-50 text-sm">
                  Sign out
                </button>
              </div>

              <button className="text-[#d60027] font-bold hover:underline text-sm">
                Close my account
              </button>
            </div>
          </div>
        );

      case "Help":
        if (helpDetail) {
          return (
            <div className="animate-in fade-in duration-300">
              <button
                onClick={() => setHelpDetail(null)}
                className="text-[#2557a7] font-bold mb-4 flex items-center gap-1 hover:underline"
              >
                ← Back to Help
              </button>

              <div className="bg-white border rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-2">
                  {helpDetail.title}
                </h2>

                <p className="text-gray-600 mb-6">{helpDetail.content}</p>

                <div className="space-y-3">
                  {helpDetail.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 border rounded-lg hover:bg-gray-50 flex justify-between cursor-pointer"
                    >
                      <span className="font-medium text-sm text-gray-800">
                        {topic}
                      </span>
                      <ChevronRight size={14} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-3xl font-light text-[#2d2d2d] mb-10">
              If you are looking for help, you are in the right place
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-3">
                    Help for jobseekers
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Get support for account, profile, and job applications.
                  </p>
                </div>

                <button
                  onClick={() => setHelpDetail(helpData.jobseeker)}
                  className="text-[#2557a7] font-bold hover:underline text-sm"
                >
                  Jobseeker Help Center →
                </button>
              </div>

              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-3">
                    Help for employers
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Recruiter and employer support for hiring.
                  </p>
                </div>

                <button
                  onClick={() => setHelpDetail(helpData.employer)}
                  className="text-[#2557a7] font-bold hover:underline text-sm"
                >
                  Employer Help Center →
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-t">
              <h3 className="text-xl font-bold mb-6">We're here to help</h3>

              <div className="flex gap-4">
                <button
                  onClick={() => setHelpDetail(helpData.general)}
                  className="bg-white border border-gray-300 px-6 py-2 rounded-lg font-bold text-[#2557a7] text-sm shadow-sm hover:bg-gray-50"
                >
                  Help Centre
                </button>

                <button
                  onClick={() => setHelpDetail(helpData.contact)}
                  className="bg-white border border-gray-300 px-6 py-2 rounded-lg font-bold text-[#2557a7] text-sm shadow-sm hover:bg-gray-50"
                >
                  Contact support
                </button>
              </div>
            </div>
          </div>
        );

      case "Privacy":
        return (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold mb-4">Privacy Centre</h2>

            <div className="bg-white p-6 border rounded-xl shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-6">
                Control how your data is used and who can see your profile.
              </p>

              <button className="bg-[#2557a7] text-white px-8 py-2.5 rounded-lg font-bold">
                Manage settings
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-12 bg-[#f3f2f1] min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-80">
        <h1 className="text-2xl font-black mb-6 px-2 text-[#2d2d2d]">
          Settings
        </h1>

        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden sticky top-24">
          <div className="p-5 border-b bg-gray-50/50">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">
              Account
            </p>
            <p className="font-bold text-gray-800 truncate text-sm">
              intern.developer@example.com
            </p>
          </div>

          <div className="py-2">
            {menuItems.map((item) => (
              <div
                key={item.id}
                // Sidebar ke andar jahan onClick={...} likha hai, usey aise badlein:
onClick={() => {
    if (item.id === "Privacy") {
      navigate("/privacy-center"); // Privacy pe tap karte hi naye page pe bhej dega
    } else {
      setActiveTab(item.id);
      setHelpDetail(null);
    }
  }}
                className={`flex justify-between items-center px-5 py-4 cursor-pointer transition-all ${
                  activeTab === item.id
                    ? "bg-blue-50 text-[#2557a7] border-l-4 border-[#2557a7]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="font-bold text-[15px]">{item.label}</span>
                </div>

                <ChevronRight
                  size={16}
                  className={
                    activeTab === item.id
                      ? "text-[#2557a7]"
                      : "text-gray-300"
                  }
                />
              </div>
            ))}
          </div>

          <div className="border-t p-5">
            <button className="flex items-center gap-4 text-[#2557a7] font-bold w-full hover:underline text-[15px]">
              <LogOut size={20} /> Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-4">{renderContent()}</div>
    </div>
  );
};

export default AccountSettings;