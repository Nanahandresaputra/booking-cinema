/** @format */

import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  let role = sessionStorage.getItem("role");
  let token = sessionStorage.getItem("auth");

  const naviate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("role");
    naviate("/login");
    window.location.reload(false);
  };

  return (
    <section className="fixed top-0 z-20 navbar bg-red-500 flex justify-center items-center">
      <div className="flex w-full px-5  md:w-10/12 max-w-[1500px] text-white text-xl">
        <div className="flex-1">
          <Link to="/" className="text-xl lg:text-3xl font-bold">
            CPMovies
          </Link>
        </div>

        <details className="lg:hidden dropdown dropdown-end">
          <summary className="m-1 btn normal-case btn-ghost active:scale-125 border-none text-white">
            <FiMenu className="text-3xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
            <li>
              <Link to={role === "Admin" ? "/admin" : "/invoice"}>
                {role === "Admin" ? "Dashboard" : "My Ticket"}
              </Link>
            </li>
            <li className={token ? "hidden" : "block"}>
              <Link to="login">Login</Link>
            </li>
            <li className={token ? "hidden" : "block"}>
              <Link to="register">Register</Link>
            </li>
            <li className={token ? "block" : "hidden"} onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </details>

        <div className="hidden w-80 lg:flex justify-around">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl"
            onClick={() => window.scroll({ top: 0 })}>
            Home
          </Link>
          <Link
            to={role === "Admin" ? "/admin" : "/invoice"}
            className="btn btn-ghost normal-case text-xl">
            {role === "Admin" ? "Dashboard" : "My Ticket"}
          </Link>

          <Link
            to="/admin/summary"
            className={`${
              role === "Admin" ? "inline-flex" : "hidden"
            } btn btn-ghost normal-case text-xl`}>
            Summary
          </Link>

          <details className="dropdown">
            <summary className="m-1 btn btn-ghost">
              <FaUserCircle className="text-3xl" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 text-black text-lg">
              <li className={token ? "hidden" : "block"}>
                <Link to="login">Login</Link>
              </li>
              <li className={token ? "hidden" : "block"}>
                <Link to="register">Register</Link>
              </li>
              <li className={token ? "block" : "hidden"} onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
