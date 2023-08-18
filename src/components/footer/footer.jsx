const Footer = () => {
  return (
    <section className="bg-[#000220] py-10 2xl:py-16 flex justify-center items-center w-full">
      <div className="max-w-[1200px] w-full flex ms-8 md:ms-0 md:justify-around">
        <div>
          <h1 className="text-red-500 text-3xl xl:text-5xl font-semibold">
            CPMovies
          </h1>
          <i
            className="text-gray-200 text-xs lg:text-base
          ">
            Beli tiket Film mudah kapanpun dimanapun
          </i>
        </div>

        <ul
          className="text-gray-200 text-xl hidden md:block
        ">
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            FAQ
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Way to wacth
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Corporate infomatioon
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            CPMovie original
          </li>
        </ul>

        <ul
          className="text-gray-200 text-xl hidden md:block
        ">
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Account
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Terms of use
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Contact Us
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-sm lg:text-base">
            Media Center
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
