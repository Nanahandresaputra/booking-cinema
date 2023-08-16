/** @format */

import Footer from "./components/footer/footer";
import Topbar from "./components/topbar/topbar";
import Homepage from "./pages/user/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="overflow-x-hidden">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </section>
  );
}

export default App;
