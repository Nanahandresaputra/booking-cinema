import { Navigate } from "react-router-dom";

const PrivateAdmin = ({ children }) => {
  let role = sessionStorage.getItem("role");
  let auth = sessionStorage.getItem("auth");

  if (auth && role === "Admin") {
    return children;
  } else if (auth && role === "client") {
    return <Navigate to="/" />;
  }
  return <Navigate to="/login" />;
};

export default PrivateAdmin;
