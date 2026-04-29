import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  ChevronRight,
} from "lucide-react";

const PrivacyCenter = () => {
  const [activeTab, setActiveTab] = useState("About HR Tech");
  const [activeSidebar, setActiveSidebar] = useState("Introduction");

  const topNavItems = [
    "Privacy Policy",
    "Cookie Policy",
    "Ad Choices",
    "Indeed Sites",
    "Glassdoor Sites",
    "About HR Tech",
  ];

  const sidebarItems = [
    "Introduction",
    "Our privacy values",
    "The benefits of data sharing",
    "Platform activity recording",
  ];

  const contentData = {
    "Privacy Policy": {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Information We Collect",
          text:
            "We collect your profile details, resumes, job preferences, search history, and application activity.",
        },
        {
          heading: "How We Use Information",
          text:
            "Your data helps us improve job matching, recommend jobs, and provide personalized hiring experiences.",
        },
        {
          heading: "Data Protection",
          text:
            "We protect your information using secure storage, encryption, and access controls.",
        },
        {
          heading: "Third-Party Sharing",
          text:
            "Data may be shared with employers and trusted partners for better hiring outcomes.",
        },
      ],
    },

    "Cookie Policy": {
      title: "Cookie Policy",
      cards: [
        "Essential Cookies for login and security",
        "Analytics Cookies for performance insights",
        "Advertising Cookies for personalized ads",
        "Preference Cookies for better user experience",
      ],
    },

    "Ad Choices": {
      title: "Ad Choices",
      description:
        "Control the ads you see and manage personalized advertisement settings.",
    },

    "Indeed Sites": {
      title: "Indeed Sites",
      list: [
        "Indeed India",
        "Indeed USA",
        "Indeed Canada",
        "Indeed UK",
        "Indeed Australia",
      ],
    },

    "Glassdoor Sites": {
      title: "Glassdoor Sites",
      list: [
        "Glassdoor Reviews",
        "Glassdoor Salaries",
        "Glassdoor Interviews",
        "Glassdoor Benefits",
        "Glassdoor Jobs",
      ],
    },

    "About HR Tech": {
      Introduction: {
        title: "Welcome to HR Tech Privacy Center",
        description:
          "We focus on building trust by protecting user data and improving job search experiences.",
      },

      "Our privacy values": {
        title: "Our Privacy Values",
        points: [
          "Transparency in data collection",
          "Security-first infrastructure",
          "User data ownership",
          "Privacy by design",
        ],
      },

      "The benefits of data sharing": {
        title: "Benefits of Data Sharing",
        points: [
          "Better job recommendations",
          "Faster application processing",
          "Smarter recruiter matching",
          "Improved hiring experience",
        ],
      },

      "Platform activity recording": {
        title: "Platform Activity Recording",
        points: [
          "Tracks profile updates",
          "Tracks applications",
          "Improves platform security",
          "Helps detect suspicious activity",
        ],
      },
    },
  };

  const renderContent = () => {
    if (activeTab === "About HR Tech") {
      const section = contentData["About HR Tech"][activeSidebar];

      return (
        <div>
          <h1 className="text-4xl font-black mb-6">{section.title}</h1>

          {section.description && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {section.description}
            </p>
          )}

          {section.points && (
            <div className="space-y-4">
              {section.points.map((point, index) => (
                <div
                  key={index}
                  className="p-5 border rounded-xl shadow-sm hover:shadow-md"
                >
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    const current = contentData[activeTab];

    return (
      <div>
        <h1 className="text-4xl font-black mb-8">{current.title}</h1>

        {current.sections &&
          current.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}

        {current.cards && (
          <div className="grid md:grid-cols-2 gap-6">
            {current.cards.map((card, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md"
              >
                {card}
              </div>
            ))}
          </div>
        )}

        {current.description && (
          <div className="space-y-6">
            <p className="text-lg text-gray-600">{current.description}</p>
            <button className="bg-[#2557a7] text-white px-8 py-3 rounded-lg font-bold">
              Manage Preferences
            </button>
          </div>
        )}

        {current.list && (
          <div className="space-y-4">
            {current.list.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#2d2d2d]">
      {/* Top Navbar */}
      <div className="border-b sticky top-0 bg-white z-50 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center px-4 md:px-8 whitespace-nowrap h-16">
          {topNavItems.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveSidebar("Introduction");
              }}
              className={`px-5 h-full text-sm font-bold border-b-4 ${
                activeTab === tab
                  ? "border-[#2557a7] text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-8 py-10 gap-10">
        {/* Sidebar only for About HR Tech */}
        {activeTab === "About HR Tech" && (
          <div className="w-full md:w-72 shrink-0">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveSidebar(item)}
                  className={`py-4 px-6 cursor-pointer border-l-4 rounded-r-lg ${
                    activeSidebar === item
                      ? "border-[#2557a7] bg-blue-50 font-bold"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    {item}
                    {activeSidebar === item && (
                      <ChevronRight
                        size={16}
                        className="text-[#2557a7]"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">{renderContent()}</div>
      </div>

      {/* Footer */}
      <footer className="border-t py-10 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-black text-[#2557a7] text-xl italic mb-4">
              indeed
            </p>
            <p className="text-xs text-gray-500">
              © 2026 HR Tech Privacy Center
            </p>
          </div>

          <div className="space-y-2 text-sm font-bold text-gray-600">
            <p>Security Center</p>
            <p>Accessibility</p>
            <p>Data Policy</p>
          </div>

          <div className="text-sm text-gray-600">
            We help people get jobs while protecting privacy.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyCenter;