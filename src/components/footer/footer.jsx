const Footer = () => {
  return (
    <section className="bg-[#000220] h-72 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex justify-around">
        <div>
          <h1 className="text-red-500 text-5xl font-semibold">CPMovies</h1>
          <i
            className="text-gray-200
          ">
            Beli tiket Film mudah kapanpun dimanapun
          </i>
        </div>

        <ul
          className="text-gray-200 text-xl
        ">
          <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
          <li className="hover:text-gray-300 cursor-pointer">Way to wacth</li>
          <li className="hover:text-gray-300 cursor-pointer">
            Corporate infomatioon
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            CPMovie original
          </li>
        </ul>

        <ul
          className="text-gray-200 text-xl
        ">
          <li className="hover:text-gray-300 cursor-pointer">Account</li>
          <li className="hover:text-gray-300 cursor-pointer">Terms of use</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          <li className="hover:text-gray-300 cursor-pointer">Media Center</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
