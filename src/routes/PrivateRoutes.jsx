import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" /> 
  }
  return user ? <Outlet/> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
