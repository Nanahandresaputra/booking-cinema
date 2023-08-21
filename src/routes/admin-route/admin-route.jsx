import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard/dashboard";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoute;
