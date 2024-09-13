import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (user.role === "admin") {
    return <Navigate to="/dashboard" />;
  }
  if (user.role === "user") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAuthRoute;
