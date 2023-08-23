import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard/dashboard";
import DetailAdmin from "../../pages/admin/detail-film-admin/detailAdmin";
import AddData from "../../pages/admin/add-data/add-data";
import UpdateData from "../../pages/admin/update-data/updateData";
import PrivateAdmin from "./private-admin";

const AdminRoute = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateAdmin>
            <Dashboard />
          </PrivateAdmin>
        }
      />
      <Route
        path="/admin/add-data"
        element={
          <PrivateAdmin>
            <AddData />
          </PrivateAdmin>
        }
      />
      <Route
        path="/admin/detail-film"
        element={
          <PrivateAdmin>
            <DetailAdmin />
          </PrivateAdmin>
        }
      />
      <Route
        path="/admin/detail-film/update-data"
        element={
          <PrivateAdmin>
            <UpdateData />
          </PrivateAdmin>
        }
      />
    </Routes>
  );
};

export default AdminRoute;
