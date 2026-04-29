import React from 'react';

const PostJob = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-20 px-4 text-center">
      <h1 className="text-5xl font-black text-[#2d2d2d] mb-6">You're here to hire. <br/>We're here to help.</h1>
      <p className="text-lg text-gray-600 mb-10">Post your job on the world's #1 job site.</p>
      <button className="bg-[#2557a7] text-white px-10 py-4 rounded-xl font-bold text-xl shadow-lg">
        Post a job
      </button>
    </div>
  );
};

export default PostJob;