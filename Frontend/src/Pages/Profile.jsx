import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Users from "../Pages/Users";
import { getAllUsers } from "../Service/userApi";

function Profile() {
  const location = useLocation();
  const { email, password } = location.state || {};
  const [userName, setUserName] = useState("");

  // always look up name from backend when email is available
  useEffect(() => {
    if (email) {
      getAllUsers()
        .then((res) => {
          const list = res.data.data || res.data;
          const me = list.find((u) => u.email === email);
          if (me && me.fullName) {
            setUserName(me.fullName);
          }
        })
        .catch((err) => {
          console.error("failed to fetch user name", err);
        });
    }
  }, [email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-extrabold animate-fade-in">
                {(userName || email)
                  ? (userName || email).charAt(0).toUpperCase()
                  : 'U'}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-800">{userName || 'Your Profile'}</h2>
              {email && <p className="text-gray-600 mt-1 break-all">{email}</p>}

              <div className="mt-6 w-full space-y-4">
                {userName && (
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500 uppercase">Name</span>
                    <span className="text-lg font-semibold text-gray-800">{userName}</span>
                  </div>
                )}
                {email && (
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500 uppercase">Email</span>
                    <span className="text-lg font-semibold text-gray-800 break-all">{email}</span>
                  </div>
                )}
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 uppercase">Password</span>
                  <span className="text-lg font-semibold text-gray-800">●●●●●●</span>
                </div>
              </div>

              <button
                className="mt-8 btn-primary w-full py-2 rounded-lg shadow-md hover:shadow-lg transition"
                onClick={() => alert('Add profile editing feature')}
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Users Manager */}
          <div className="lg:col-span-2">
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
