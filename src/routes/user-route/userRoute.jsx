import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/user/homepage/homepage";
import DetailFIlm from "../../pages/user/detail-film/detailFIlm";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail-film/:id" element={<DetailFIlm />} />
    </Routes>
  );
};

export default UserRoute;
