// import { useAuth } from "@/context/auth";
// import { Navigate } from "react-router-dom";
// import LoadingSpinner from "@/shared/loading";

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user, isLoading } = useAuth();

//   if (isLoading) return <LoadingSpinner />;
//   if (!user) return <Navigate to="/login" />;

//   return <>{children}</>;
// };

// export default PrivateRoute;