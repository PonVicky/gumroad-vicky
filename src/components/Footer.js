import arrow from "../images-and-logos/right-arrow.png";
import smallLogo from "../images-and-logos/smallG.svg";
import facebook from "../images-and-logos/facebook.svg";
import instagram from "../images-and-logos/insta.svg";
import youtube from "../images-and-logos/youtube.svg";
import twitter from "../images-and-logos/twitter.svg";
import pinterest from "../images-and-logos/pinterest.svg";
function Footer() {
  return (
    <div
      className="w-full
  h-[542px] bg-black 
    flex
      flex-row"
    >
      <div className="container1 text-white px-[60px] py-[90px] w-[690px]">
        <p className="text-[45px] font-medium leading-[1.1]">
          Subscribe to get tips and tactics to grow the way you want.
        </p>
        <div className="flex">
          <input
            type="text"
            className="outline-none border border-[#888] rounded-md bg-black p-[15px] text-[#888] w-[650px] mt-[40px]"
            placeholder="Your email address"
          />
          <nav
            className="p-[15px] bg-[#ff90e8] ml-[5px] rounded-md px-[25px] mt-[40px] cursor-pointer
          
            transition-all duration-300 ease-out transform-gpu
  hover:-translate-x-[6px] hover:-translate-y-[6px]
  hover:shadow-[8px_8px_0_#FFD700,14px_14px_0_#FF4500]
          "
          >
            <img src={arrow} className="w-[18px]" />
          </nav>
        </div>

        <div className="mt-[80px] flex gap-3">
          <img src={smallLogo} className="w-[24px]" />{" "}
          <p>&copy; Gumroad, Inc.</p>
        </div>
      </div>

      <div className="container 2 px-[60px] py-[90px]">
        <div className="flex gap-[350px] text-white ">
          <nav>
            <p className="mb-[20px] cursor-pointer hover:text-[#ff90e8]">
              Discover
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Blog
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Pricing
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Features
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              About
            </p>
            <p className=" cursor-pointer hover:text-[#ff90e8]">Small Bets</p>
          </nav>
          <nav>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Help
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Board meetings
            </p>
            <p className="mb-[18px] cursor-pointer hover:text-[#ff90e8]">
              Terms of Service
            </p>
            <p className="cursor-pointer hover:text-[#ff90e8]">
              Privacy policy
            </p>
          </nav>
        </div>
        <div className="flex flex-row gap-[120px] mt-[90px]">
          <img
            src={twitter}
            className="cursor-pointer  w-[35px] invert   hover:text-pink-500   "
          />
          <img src={youtube} className="cursor-pointer  w-[35px] invert " />
          <img src={instagram} className="cursor-pointer  w-[35px] invert " />
          <img src={facebook} className="cursor-pointer  w-[35px] invert " />
          <img src={pinterest} className="cursor-pointer  w-[35px] invert " />
        </div>
      </div>
    </div>
  );
}

export default Footer;
