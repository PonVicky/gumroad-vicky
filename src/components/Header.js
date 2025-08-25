import gumroad from "../images-and-logos/gumroad.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="bg-black w-full flex items-center justify-between pl-6 cursor-pointer border-b-[1.5px] border-black">
        <img alt="nothing" src={gumroad} className="w-[236px] h-auto invert" />
        <div className="text-[#ffffff] flex gap-4 text-lg items-center font-montserrat ">
          <p className="hover:bg-white hover:text-black rounded-3xl px-[12px] py-[10px] cursor-pointer ">
            Discover
          </p>
          <Link
            to="/blogs"
            className="hover:bg-white hover:text-black rounded-3xl px-[12px] py-[10px] cursor-pointer "
          >
            Blog
          </Link>
          <p className="hover:bg-white hover:text-black rounded-3xl px-[12px] py-[10px] cursor-pointer ">
            Pricing
          </p>
          <p className=" hover:bg-white hover:text-black rounded-3xl px-[12px] py-[10px] cursor-pointer ">
            Features
          </p>
          <Link
            to="/"
            className="  hover:bg-white hover:text-black rounded-3xl px-[12px] py-[10px] cursor-pointer mr-[10px] "
          >
            About
          </Link>
          <p className=" border-l-[0.5px] py-[26px] pl-[22px] pr-[10px] cursor-pointer  ">
            Log in
          </p>
          <p className="py-[26px] bg-[#ff90e8] text-black px-[12px] cursor-pointer hover:bg-white">
            Start selling
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
