import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Users from "../Pages/Users";

function Profile() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="card lg:col-span-1">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {email ? email.charAt(0).toUpperCase() : 'U'}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile</h2>
              {email && (
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="text-sm font-semibold text-gray-800 break-all">{email}</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Password</p>
                    <p className="text-sm font-semibold text-gray-800">●●●●●●</p>
                  </div>
                </div>
              )}
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
