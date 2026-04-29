import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Dummy Login Logic: Hum email ko localStorage mein save kar rahe hain
      localStorage.setItem('userEmail', email);
      alert(isSignIn ? "Signed in successfully!" : "Account created successfully!");
      navigate('/'); // Login ke baad Home page par bhej dega
      window.location.reload(); // Navbar update karne ke liye refresh
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12 px-4">
      {/* Logo */}
      <div className="text-[#2557a7] text-4xl font-black italic tracking-tighter mb-8 cursor-pointer" onClick={() => navigate('/')}>
        indeed
      </div>

      <div className="w-full max-w-[450px] bg-white border rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2">
          {isSignIn ? "Ready to take the next step?" : "Create an account"}
        </h1>
        <p className="text-gray-600 mb-6">
          {isSignIn ? "Create an account or sign in." : "By creating an account, you agree to our Terms."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Email address *</label>
            <input 
              type="email" 
              required
              className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-[#2557a7] outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#2557a7] text-white py-3 rounded-xl font-bold text-lg hover:bg-[#164081] transition-colors"
          >
            {isSignIn ? "Continue" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsSignIn(!isSignIn)}
              className="ml-2 text-[#2557a7] font-bold hover:underline"
            >
              {isSignIn ? "Register" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="mt-12 text-sm text-gray-500 flex gap-4">
        <span>© 2026 Indeed</span>
        <span className="cursor-pointer hover:underline">Cookies, Privacy and Terms</span>
      </div>
    </div>
  );
};

export default Auth;