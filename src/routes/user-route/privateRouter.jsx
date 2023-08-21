import { Navigate } from "react-router-dom";

const PrivateRouterUser = ({ children }) => {
  let auth = "sdfsdferr3434";
  let role = "admin";

  if (auth && role === "admin") {
    return <Navigate to="/admin" />;
  } else if (auth && role === "user") {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRouterUser;
