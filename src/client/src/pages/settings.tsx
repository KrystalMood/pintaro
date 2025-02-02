import { FC } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import Profile from "@/components/settings/profile";
import PersonalData from "@/components/settings/personal-data";
import Main from "@/layouts/main";

const Settings: FC = () => {
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("");

  if (!tab) return <Navigate to="/settings?=profile" replace />;

  const renderContent = () => {
    switch (tab) {
      case "profile":
        return <Profile />;
      case "personal-data":
        return <PersonalData />;
      default:
        return <Navigate to="/settings?=profile" replace />;
    }
  };

  return (
    <Main title="Settings" description="Manage your account settings">
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Account Settings
            </h1>
            <p className="mt-2 text-base text-gray-600">
              Manage your profile and personal information
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-72 space-y-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                <Link
                  to="/settings?=profile"
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    tab === "profile"
                      ? "bg-primary shadow-md border-2 border-gray-400"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <i className="fas fa-user-circle text-lg" />
                  <span className="ml-3 font-medium">Profile Settings</span>
                </Link>
                <Link
                  to="/settings?=personal-data"
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    tab === "personal-data"
                      ? "bg-primary shadow-md border-2 border-gray-400"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <i className="fas fa-address-card text-lg" />
                  <span className="ml-3 font-medium">Personal Data</span>
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Settings;