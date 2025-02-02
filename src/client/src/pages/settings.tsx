import { Navigate, useLocation } from "react-router-dom";
import Profile from "@/pages/profile";
import PersonalData from "@/pages/personal-data";

const Settings = () => {
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("");

  if (!tab) return <Navigate to="/settings?=profile" replace />;

  switch (tab) {
    case "profile":
      return <Profile />;
    case "personal-data":
      return <PersonalData />;
    default:
      return <Navigate to="/settings?=profile" replace />;
  }
};

export default Settings;