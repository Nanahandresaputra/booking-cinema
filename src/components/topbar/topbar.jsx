/** @format */

import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="fixed top-0 z-20 navbar bg-red-500 flex justify-center items-center">
      <div className="flex w-full px-5  md:w-10/12 max-w-[1500px] text-white text-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CPMovies</a>
        </div>

        <details className="md:hidden dropdown dropdown-end">
          <summary className="m-1 btn normal-case btn-ghost active:scale-125 border-none text-white">
            <FiMenu className="text-3xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>List Film</Link>
            </li>
            <li>
              <Link>Invoice</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
        </details>

        <div className="hidden w-80 md:flex justify-around">
          <a className="btn btn-ghost normal-case text-xl">Home</a>
          <a className="btn btn-ghost normal-case text-xl">List Film</a>
          <a className="btn btn-ghost normal-case text-xl">Invoice</a>
          <a className="btn btn-ghost normal-case text-xl">Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
