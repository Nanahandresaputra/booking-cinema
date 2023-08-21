import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/user/homepage/homepage";
import DetailFIlm from "../../pages/user/detail-film/detailFIlm";
import Login from "../../pages/user/auth/login/login";
import Register from "../../pages/user/auth/register/register";
import Seat from "../../pages/user/seat-studio/seat";
import PrivateRouterUser from "./privateRouter";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/detail-film/:id"
        element={
          // <PrivateRouterUser>
          <DetailFIlm />
          // </PrivateRouterUser>
        }
      />
      <Route
        path="/detail-film/:id/seat/:id"
        element={
          // <PrivateRouterUser>
          <Seat />
          // </PrivateRouterUser>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default UserRoute;
