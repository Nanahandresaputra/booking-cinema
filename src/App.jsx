/** @format */

import Footer from "./components/footer/footer";
import Topbar from "./components/topbar/topbar";
import { BrowserRouter as Router } from "react-router-dom";
import UserRoute from "./routes/user-route/userRoute";

function App() {
  return (
    <section className="overflow-x-hidden">
      <Router>
        <Topbar />
        <section className="pt-20 lg:pt-32 pb-10 lg:pb-40 w-screen flex flex-col justify-center items-center">
          <UserRoute />
        </section>
      </Router>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
