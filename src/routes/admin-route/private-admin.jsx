import { Navigate } from "react-router-dom";

const PrivateAdmin = ({ children }) => {
  let role = sessionStorage.getItem("role");
  let auth = sessionStorage.getItem("auth");

  if (auth && role === "Admin") {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateAdmin;
