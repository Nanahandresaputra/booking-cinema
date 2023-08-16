/** @format */

import React from "react";

const Topbar = () => {
  return (
    <section className='fixed top-0 z-20 navbar bg-red-500 flex justify-center items-center'>
      <div className='flex px-5 lg:w-10/12 max-w-[1500px] text-white text-xl'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
        </div>

        <details className='md:hidden dropdown'>
          <summary className='m-1 btn normal-case btn-outline border-none text-white'>
            open or close
          </summary>
          <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>

        <div className='hidden w-80 md:flex justify-around'>
          <a className='btn btn-ghost normal-case text-xl'>Home</a>
          <a className='btn btn-ghost normal-case text-xl'>List Film</a>
          <a className='btn btn-ghost normal-case text-xl'>Invoice</a>
          <a className='btn btn-ghost normal-case text-xl'>Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
