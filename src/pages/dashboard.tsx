import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; 
import ContactSubmissions from "./ContactSubmissions";
import CareerSubmissions from "./CareerSubmissions";
import FutureCareerSubmissions from "./FutureCareerSubmissions";

const ADMIN_CREDENTIALS = {
  id: import.meta.env.VITE_ADMIN_ID,
  password: import.meta.env.VITE_ADMIN_PASSWORD,
};

const generateFakeJWT = () => {
  const fakePayload = {
    id: "xtmx",
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 60 * 60, 
  };
  return btoa(JSON.stringify(fakePayload)); 
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "contacts");

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token"); 
          setIsAuthenticated(false);
        }
      } catch (error) {
        localStorage.removeItem("token"); 
        setIsAuthenticated(false);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === ADMIN_CREDENTIALS.id && adminPassword === ADMIN_CREDENTIALS.password) {
      const token = generateFakeJWT(); 
      localStorage.setItem("token", token); 
      setIsAuthenticated(true);
      setError("");
    } else {
      setError(" Invalid Admin ID or Password.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    setAdminId("");
    setAdminPassword("");
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-6 sm:p-12 bg-transparent sm:bg-black">
      {!isAuthenticated ? (
        <div className="w-full max-w-sm sm:max-w-lg p-6 sm:p-8 bg-transparent sm:bg-gray-900 rounded-lg shadow-xl flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white"> Admin Login</h2>
          {error && <p className="text-red-400 text-center text-base">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4 flex flex-col">
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button type="submit" className="w-full p-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-400 transition">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col p-6 sm:p-10 md:p-16 bg-transparent sm:bg-gray-900 rounded-lg shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white"> Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-500 transition"
            >
              Logout
            </button>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-6">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-5 py-2 rounded-md font-semibold text-lg ${
                activeTab === "contacts" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Contact Submissions 
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`px-5 py-2 rounded-md font-semibold text-lg ${
                activeTab === "applications" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Job Applications 
            </button>
            <button
              onClick={() => setActiveTab("futurecareers")}
              className={`px-5 py-2 rounded-md font-semibold text-lg ${
                activeTab === "futurecareers" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              Future of Work 
            </button>
          </div>
          <div className="flex-grow overflow-auto">
            {activeTab === "contacts" && <ContactSubmissions />}
            {activeTab === "applications" && <CareerSubmissions />}
            {activeTab === "futurecareers" && <FutureCareerSubmissions />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
