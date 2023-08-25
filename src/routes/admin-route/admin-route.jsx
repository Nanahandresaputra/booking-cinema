import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard/dashboard";
import DetailAdmin from "../../pages/admin/detail-film-admin/detailAdmin";
import AddData from "../../pages/admin/add-data/add-data";
import UpdateData from "../../pages/admin/update-data/updateData";
import PrivateAdmin from "./private-admin";
import Summary from "../../pages/admin/summary/summary";

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
        path="/admin/detail-film/:id"
        element={
          <PrivateAdmin>
            <DetailAdmin />
          </PrivateAdmin>
        }
      />
      <Route
        path="/admin/detail-film/:id/update-data/:id"
        element={
          <PrivateAdmin>
            <UpdateData />
          </PrivateAdmin>
        }
      />
      <Route
        path="/admin/summary"
        element={
          <PrivateAdmin>
            <Summary />
          </PrivateAdmin>
        }
      />
    </Routes>
  );
};

export default AdminRoute;
