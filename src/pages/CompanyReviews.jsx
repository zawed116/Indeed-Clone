import React, { useState } from "react";
import { Search, Star, Building2 } from "lucide-react";

const CompanyReviews = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    { name: "Google", rating: 4.5, reviews: "12,450 reviews" },
    { name: "Amazon", rating: 4.2, reviews: "10,210 reviews" },
    { name: "Microsoft", rating: 4.6, reviews: "8,920 reviews" },
    { name: "Infosys", rating: 4.0, reviews: "20,500 reviews" },
    { name: "TCS", rating: 4.1, reviews: "25,200 reviews" },
    { name: "Wipro", rating: 4.0, reviews: "15,800 reviews" },
    { name: "Accenture", rating: 4.3, reviews: "18,600 reviews" },
    { name: "Capgemini", rating: 4.1, reviews: "11,900 reviews" },
    { name: "Cognizant", rating: 4.2, reviews: "14,300 reviews" },
    { name: "Tech Mahindra", rating: 4.0, reviews: "9,714 reviews" },
    { name: "Reliance Retail", rating: 4.1, reviews: "1,102 reviews" },
    { name: "Axis Bank", rating: 4.0, reviews: "3,725 reviews" },
    { name: "Concentrix", rating: 4.3, reviews: "41,850 reviews" },
    { name: "HCL", rating: 4.1, reviews: "13,210 reviews" },
    { name: "Flipkart", rating: 4.2, reviews: "7,820 reviews" },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4].map((star) => (
          <Star key={star} size={18} className="fill-black text-black" />
        ))}
        <Star size={18} className="text-black" />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Find great places to work
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Get access to millions of company reviews
        </p>

        {/* Search */}
        <p className="font-semibold mb-3 text-gray-800">
          Company name or job title
        </p>

        <div className="flex flex-col md:flex-row gap-3 max-w-5xl">
          <div className="flex items-center border border-gray-400 rounded-xl flex-1 px-4 py-4">
            <Search size={22} className="text-gray-400" />
            <input
              type="text"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full ml-3 outline-none"
            />
          </div>

          <button className="bg-[#2557a7] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#164081]">
            Find Companies
          </button>
        </div>

        <p className="mt-6 text-[#2557a7] font-medium underline cursor-pointer">
          Do you want to search for salaries?
        </p>
      </div>

      {/* Popular Companies */}
      <h2 className="text-4xl font-bold mb-10">Popular companies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
        {filteredCompanies.map((company, index) => (
          <div key={index} className="flex gap-4">
            {/* Logo */}
            <div className="w-14 h-14 border rounded-xl flex items-center justify-center bg-white shadow-sm">
              <Building2 size={26} />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-2xl text-gray-800">
                {company.name}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                {renderStars()}
                <span className="text-[#2557a7] text-sm font-medium">
                  {company.reviews}
                </span>
              </div>

              <div className="flex gap-6 mt-4 text-gray-500 text-sm">
                <span className="cursor-pointer hover:underline">
                  Salaries
                </span>
                <span className="cursor-pointer hover:underline">
                  Questions
                </span>
                <span className="cursor-pointer hover:underline">
                  Open jobs
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No result */}
      {filteredCompanies.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">No company found</h2>
          <p className="text-gray-500 mt-2">
            Try searching another company name.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyReviews;