/** @format */

import Topbar from "./components/topbar/topbar";
import Homepage from "./pages/user/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
