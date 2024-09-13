import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ children, realUser = false }) => {
  const user = useSelector((state) => state.user);

  if (user.role === "admin") {
    return <Navigate to="/dashboard" />;
  }
  if (realUser && !user.role) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedUserRoute;
