import { Navigate } from "react-router-dom";

const PrivateRouterUser = ({ children }) => {
  let role = sessionStorage.getItem("role");
  let auth = sessionStorage.getItem("auth");

  if (auth && role === "Admin") {
    return <Navigate to="/admin" />;
  } else if (auth && role === "client") {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRouterUser;
