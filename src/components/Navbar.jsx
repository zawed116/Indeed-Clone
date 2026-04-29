import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Bell,
  MessageSquare,
  Bookmark,
  User,
  FileText,
  Settings,
  HelpCircle,
  Shield,
  LogOut,
  ChevronRight,
  LogIn,
  MoreHorizontal,
  Circle
} from "lucide-react";

const Navbar = ({ notificationCount = 4 }) => {
  const [showAccount, setShowAccount] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [savedCount, setSavedCount] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Close other dropdowns when one is opened
  const toggleDropdown = (type) => {
    setShowAccount(type === 'account' ? !showAccount : false);
    setShowMessages(type === 'messages' ? !showMessages : false);
    setShowNotifications(type === 'notifications' ? !showNotifications : false);
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
    updateSavedCount();
    window.addEventListener("storage", updateSavedCount);
    return () => window.removeEventListener("storage", updateSavedCount);
  }, []);

  const updateSavedCount = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedCount(savedJobs.length);
  };

  const handleNav = (path) => {
    setShowAccount(false);
    setShowMessages(false);
    setShowNotifications(false);
    navigate(path);
  };

  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setShowAccount(false);
    navigate("/auth");
  };

  const activeLink = "border-b-4 border-[#2557a7] pb-1 text-black font-bold";
  const idleLink = "text-gray-600 hover:text-black transition-all";

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-8 h-16 flex justify-between items-center shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-[#2557a7] text-3xl font-black italic tracking-tighter">indeed</Link>
        <div className="hidden lg:flex gap-6 font-semibold text-[15px]">
          <Link to="/" className={location.pathname === "/" ? activeLink : idleLink}>Home</Link>
          <Link to="/reviews" className={location.pathname === "/reviews" ? activeLink : idleLink}>Company reviews</Link>
          <Link to="/salary" className={location.pathname === "/salary" ? activeLink : idleLink}>Salary guide</Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 relative">
        <Link to="/my-jobs" className="relative">
          <Bookmark size={22} className="cursor-pointer text-gray-700 hover:text-[#2557a7]" />
          {savedCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#2557a7] text-white text-[10px] px-1.5 rounded-full border-2 border-white font-bold">{savedCount}</span>
          )}
        </Link>

        {/* --- MESSAGES DROPDOWN --- */}
        <div className="relative">
          <MessageSquare 
            size={22} 
            className={`cursor-pointer transition-colors ${showMessages ? 'text-[#2557a7]' : 'text-gray-700 hover:text-black'}`} 
            onClick={() => toggleDropdown('messages')}
          />
          {showMessages && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMessages(false)}></div>
              <div className="absolute top-10 right-[-50px] w-80 bg-white border shadow-2xl rounded-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-bold text-lg">Messages</h3>
                  <MoreHorizontal size={18} className="text-gray-500 cursor-pointer" />
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    { name: "Google HR", msg: "We reviewed your application for React Developer...", time: "2h ago", unread: true },
                    { name: "Tech Mahindra", msg: "Are you available for a quick call tomorrow?", time: "5h ago", unread: false },
                    { name: "Amazon Recruitment", msg: "Thank you for showing interest in our...", time: "1d ago", unread: false }
                  ].map((chat, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer flex gap-3 border-b border-gray-50">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#2557a7]">{chat.name[0]}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <p className={`text-sm ${chat.unread ? 'font-bold' : 'font-medium'}`}>{chat.name}</p>
                          <span className="text-[10px] text-gray-400">{chat.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate w-48">{chat.msg}</p>
                      </div>
                      {chat.unread && <Circle size={8} className="fill-[#2557a7] text-[#2557a7] mt-2" />}
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t">
                  <button className="text-[#2557a7] font-bold text-sm hover:underline">View all messages</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* --- NOTIFICATIONS DROPDOWN --- */}
        <div className="relative">
          <div className="relative cursor-pointer" onClick={() => toggleDropdown('notifications')}>
            <Bell size={22} className={showNotifications ? 'text-[#2557a7]' : 'text-gray-700'} />
            <span className="absolute -top-2 -right-2 bg-[#d60027] text-white text-[10px] px-1.5 rounded-full border-2 border-white font-bold">{notificationCount}</span>
          </div>
          {showNotifications && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
              <div className="absolute top-10 right-[-20px] w-80 bg-white border shadow-2xl rounded-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b">
                  <h3 className="font-bold text-lg">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    { title: "New Job Alert", desc: "15 new jobs found for 'React Developer'", type: "job", time: "Just now" },
                    { title: "Application Viewed", desc: "Microsoft viewed your resume.", type: "view", time: "1h ago" },
                    { title: "Salary Update", desc: "Salary trends updated for Web Developer.", type: "info", time: "3h ago" }
                  ].map((notif, i) => (
                    <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 flex gap-3">
                       <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${i === 0 ? 'bg-[#d60027]' : 'bg-transparent'}`}></div>
                       <div>
                         <p className="text-sm font-bold text-gray-800">{notif.title}</p>
                         <p className="text-xs text-gray-600 mt-0.5">{notif.desc}</p>
                         <span className="text-[10px] text-gray-400 mt-1 block">{notif.time}</span>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t bg-gray-50">
                  <button className="text-[#2557a7] font-bold text-sm hover:underline">See all notifications</button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* --- ACCOUNT DROPDOWN --- */}
        <div className="relative">
          <div onClick={() => toggleDropdown('account')} className={`border rounded-full p-1 cursor-pointer transition-all ${showAccount ? "border-[#2557a7] bg-blue-50" : "border-gray-400 hover:bg-gray-100"}`}>
            <User size={20} className={showAccount ? "text-[#2557a7]" : "text-gray-700"} />
          </div>
          {showAccount && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowAccount(false)}></div>
              <div className="absolute top-12 right-0 w-72 bg-white border shadow-2xl rounded-xl z-50 overflow-hidden">
                {isLoggedIn ? (
                  <>
                    <div className="p-4 border-b"><p className="font-bold text-gray-900 text-[14px] truncate">{userEmail}</p></div>
                    <div className="py-2">
                      {[
                        { label: "Profile", icon: <FileText size={20} />, path: "/settings" },
                        { label: "My reviews", icon: <Bookmark size={20} />, path: "/settings" },
                        { label: "Settings", icon: <Settings size={20} />, path: "/settings" },
                        { label: "Help", icon: <HelpCircle size={20} />, path: "/settings" },
                        { label: "Privacy Centre", icon: <Shield size={20} />, path: "/privacy-center" },
                      ].map((item, index) => (
                        <div key={index} onClick={() => handleNav(item.path)} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-4">{item.icon}<span>{item.label}</span></div>
                          <ChevronRight size={16} />
                        </div>
                      ))}
                    </div>
                    <div className="border-t p-4">
                      <button onClick={handleSignOut} className="text-[#2557a7] font-bold hover:underline flex items-center justify-center gap-2 w-full">Sign out <LogOut size={18} /></button>
                    </div>
                  </>
                ) : (
                  <div className="p-6 text-center">
                    <button onClick={() => handleNav("/auth")} className="w-full bg-[#2557a7] text-white py-2.5 rounded-lg font-bold flex items-center justify-center gap-2"><LogIn size={18} /> Sign in</button>
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