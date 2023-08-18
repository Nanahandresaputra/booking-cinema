/** @format */

import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
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
              <Link>List Film</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
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
          <Link className="btn btn-ghost normal-case text-xl">List Film</Link>

          <details className="dropdown">
            <summary className="m-1 btn btn-ghost">
              <FaUserCircle className="text-3xl" />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 text-black text-lg">
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
