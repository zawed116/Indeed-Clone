import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, MessageSquare, Bookmark, User, FileText, Settings, HelpCircle, Shield, LogOut, ChevronRight, LogIn } from 'lucide-react';

const Navbar = ({ notificationCount = 4 }) => {
  const [showAccount, setShowAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  // Check login status on load
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  const handleNav = (path) => {
    setShowAccount(false);
    navigate(path);
  };

  const handleSignOut = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setShowAccount(false);
    navigate('/auth');
  };

  const activeLink = "border-b-4 border-[#2557a7] pb-1 text-black font-bold";
  const idleLink = "text-gray-600 hover:text-black transition-all";

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-8 h-16 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-[#2557a7] text-3xl font-black italic tracking-tighter">indeed</Link>
        <div className="hidden lg:flex gap-6 font-semibold text-[15px]">
          <Link to="/" className={location.pathname === "/" ? activeLink : idleLink}>Home</Link>
          <Link to="/reviews" className={location.pathname === "/reviews" ? activeLink : idleLink}>Company reviews</Link>
          <Link to="/salary" className={location.pathname === "/salary" ? activeLink : idleLink}>Salary guide</Link>
        </div>
      </div>

      <div className="flex items-center gap-6 relative">
        <Link to="/my-jobs"><Bookmark size={22} className="cursor-pointer text-gray-700 hover:text-[#2557a7]" /></Link>
        <MessageSquare size={22} className="cursor-pointer text-gray-700" />

        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-[#d60027] text-white text-[10px] px-1.5 rounded-full border-2 border-white font-bold">4</span>
        </div>

        {/* --- ACCOUNT SECTION --- */}
        <div className="relative">
          <div 
            onClick={() => setShowAccount(!showAccount)}
            className={`border rounded-full p-1 cursor-pointer transition-all ${showAccount ? 'border-[#2557a7] bg-blue-50' : 'border-gray-400 hover:bg-gray-100'}`}
          >
            <User size={20} className={showAccount ? 'text-[#2557a7]' : 'text-gray-700'} />
          </div>

          {showAccount && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowAccount(false)}></div>
              <div className="absolute top-12 right-0 w-72 bg-white border shadow-2xl rounded-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                
                {isLoggedIn ? (
                  // --- LOGGED IN VIEW ---
                  <>
                    <div className="p-4 border-b">
                      <p className="font-bold text-gray-900 text-[14px] truncate">{userEmail}</p>
                    </div>
                    
                    <div className="py-2">
                      {[
                        { label: 'Profile', icon: <FileText size={20} />, path: '/settings' },
                        { label: 'My reviews', icon: <Bookmark size={20} />, path: '/settings' },
                        { label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
                        { label: 'Help', icon: <HelpCircle size={20} />, path: '/settings' },
                        { label: 'Privacy Centre', icon: <Shield size={20} />, path: '/privacy-center' },
                      ].map((item, index) => (
                        <div 
                          key={index}
                          onClick={() => handleNav(item.path)} 
                          className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer group ${item.label === 'Privacy Centre' ? 'border-t mt-1' : ''}`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-gray-600 group-hover:text-black">{item.icon}</span>
                            <span className="text-gray-800 font-medium">{item.label}</span>
                          </div>
                          <ChevronRight size={16} className="text-gray-300 group-hover:text-black" />
                        </div>
                      ))}
                    </div>

                    <div className="border-t p-4">
                       <button 
                        onClick={handleSignOut}
                        className="text-[#2557a7] font-bold hover:underline flex items-center justify-center gap-2 w-full text-[16px]"
                       >
                         Sign out <LogOut size={18} />
                       </button>
                    </div>
                  </>
                ) : (
                  // --- LOGGED OUT / SIGN IN VIEW ---
                  <div className="p-6 text-center">
                    <p className="text-gray-600 mb-4 text-sm font-medium">Manage your account and job applications</p>
                    <button 
                      onClick={() => handleNav('/auth')}
                      className="w-full bg-[#2557a7] text-white py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#164081] transition-all shadow-md"
                    >
                      <LogIn size={18} /> Sign in
                    </button>
                    <p className="mt-4 text-xs text-gray-400">
                      New to Indeed? <span className="text-[#2557a7] font-bold cursor-pointer hover:underline" onClick={() => handleNav('/auth')}>Create an account</span>
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="h-8 w-[1px] bg-gray-300"></div>
        <Link to="/post-job" className="font-bold text-[15px] hover:underline text-[#2d2d2d]">Employers / Post Job</Link>
      </div>
    </nav>
  );
};

export default Navbar;