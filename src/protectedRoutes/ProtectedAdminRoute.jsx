import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (user.role === "user") {
    return <Navigate to="/" />;
  }
  if (!user.uid) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedAdminRoute;
