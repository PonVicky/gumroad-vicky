import oss from "../images-and-logos/osshackathon.jpg";
import arrow from "../images-and-logos/right-arrow.png";
import Cards from "./Cards";
import image1 from "../images-and-logos/image1.png";
import image2 from "../images-and-logos/image2.png";
import image3 from "../images-and-logos/image3.png";
import image4 from "../images-and-logos/image4.png";
import image5 from "../images-and-logos/image5.png";
import image6 from "../images-and-logos/image6.png";
import image7 from "../images-and-logos/image7.png";
import image9 from "../images-and-logos/image9.png";
import image8 from "../images-and-logos/monkeynewsletter.png";
import image10 from "../images-and-logos/image10.png";

import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="w-[96%] min-h-[200px] mx-auto pt-[150px] pb-[50px]    ">
      <h1 className="text-[60px] font-medium">Blog</h1>
      <nav className="mt-[20px] w-full flex gap-[25px] ">
        <div
          className="w-[66%] rounded-md transition duration-300 ease-out transform-gpu
      hover:-translate-x-[2px] hover:-translate-y-[2px]
      hover:shadow-[4px_4px_0_#000000] 
      active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]"
        >
          <img
            alt="nothing"
            src={oss}
            className="cursor-pointer rounded-t-md border border-black  "
          />
          <div className="p-[24px] border border-black rounded-b-md">
            <p className="text-[36px]">UPDATED: OSS Hackathon</p>
            <p className="mt-[8px]">May 8, 2025</p>
          </div>
        </div>
        <div className="w-[465px]  min-h-[200px]">
          <nav className="flex items-end pb-[15px]">
            <div>
              <p className="text-[24px] mb-[5px]">
                🚀Gumroad April Recap: What We've Shipped
              </p>
              <p>May 1,2025</p>
            </div>
            <Link
              to="/blog1"
              className="cursor-pointer p-[10px] border border-black rounded-md
              
                          transition duration-300 ease-out transform-gpu
      hover:-translate-x-[2px] hover:-translate-y-[2px]
      hover:shadow-[4px_4px_0_#000000] 
      active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]"
            >
              <img alt="nothing" src={arrow} className="w-[18px] " />
            </Link>
          </nav>
          <hr className="border-none h-[0.5px] bg-black mb-[15px]" />

          <nav className="flex items-end pb-[15px] justify-between">
            <div>
              <p className="text-[24px] mb-[5px]">
                LifeMathMoney: How I launched my product and grew a following
              </p>
              <p>April 23,2025</p>
            </div>
            <nav
              className="cursor-pointer p-[10px] border border-black rounded-md
              
                          transition duration-300 ease-out transform-gpu
      hover:-translate-x-[2px] hover:-translate-y-[2px]
      hover:shadow-[4px_4px_0_#000000] 
      active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]"
            >
              <img alt="nothing" src={arrow} className="w-[30px] " />
            </nav>
          </nav>
          <hr className="border-none h-[0.5px] bg-black mb-[15px]" />

          <nav className="flex items-end pb-[15px] justify-between">
            <div>
              <p className="text-[24px] mb-[5px]">
                Small Bets is joining Gumroad 🎉
              </p>
              <p>April 22,2025</p>
            </div>
            <nav
              className="cursor-pointer p-[10px] border border-black rounded-md justify-between
              
              transition duration-300 ease-out transform-gpu
      hover:-translate-x-[2px] hover:-translate-y-[2px]
      hover:shadow-[4px_4px_0_#000000] 
      active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]"
            >
              <img alt="nothing" src={arrow} className="w-[18px] " />
            </nav>
          </nav>
        </div>
      </nav>

      <div className="grid grid-cols-3 auto-rows-auto w-full mt-[35px]  gap-[36px] ">
        <Cards
          image={image1}
          heading={"🚀 Gumroad April Recap: What We've Shipped"}
          date={"May 1, 2025"}
          haveImage={true}
        />
        <Cards
          image={image2}
          heading={
            "Creator Spotlight: Kyle T Webster | How selling brushes on Gumroad led to partnerships with Pixar, Disney, and eventually Adobe"
          }
          date={"April 16, 2025"}
          haveImage={true}
        />
        <Cards
          image={image3}
          heading={
            "Creator Spotlight: Kyle T Webster | How selling brushes on Gumroad led to partnerships with Pixar, Disney, and eventually Adobe"
          }
          date={"April 10, 2025"}
          haveImage={true}
        />
        <Cards
          image={image4}
          heading={"A trip down Gumroad: The Road Ahead"}
          date={"April 8, 2025"}
          haveImage={true}
        />
        <Cards
          image={image5}
          heading={"A trip down Gumroad: The highs"}
          date={"March 30, 2025"}
          haveImage={true}
        />
        <Cards
          image={image6}
          heading={"A trip down Gumroad: The lows"}
          date={"May 1, 2025"}
          haveImage={true}
        />
        <Cards
          image={image7}
          heading={"A trip down Gumroad: How it started"}
          date={"May 1, 2025"}
          haveImage={true}
        />
        <Cards
          image={image8}
          heading={
            "🎉 Celebrating Gumroad's 13th Year: 2024 Feature Roundup ✨"
          }
          date={"May 1, 2025"}
          haveImage={true}
        />
        <Cards
          heading={
            "Creator Spotlight: Alvaro Trigo | How I Truned a Side Project Into a Profitable Business with Gumroad"
          }
          image={image10}
          date={"June 10, 2025"}
          haveImage={true}
        />

        <Cards
          heading={"🗓️ Next Gumroad public board meeting: May 15 in NYC"}
          text={
            "Register for the webinar via Zoom here. If you'd like to attend in person (we have a new office in NYC!) please register to attend here."
          }
          date={"May 1, 2025"}
          haveImage={false}
        />

        <Cards
          image={image9}
          heading={"NEW: Bulk-review your favorite products!"}
          date={"March 23, 2025"}
          haveImage={true}
        />

        <Cards
          heading={"TONS of new Gumroad features"}
          text={
            "I hope you're doing well and enjoying your creative journey with us at Gumroad. We're always striving to improve and simplify your experience, and today, I'm thrilled to share some brand new..."
          }
          date={"October 9, 2025"}
          haveImage={false}
        />

        <Cards
          heading={"New feature: Archive your products"}
          text={"We have a new feature for you this week: Archive your..."}
          date={"July 3, 2023"}
          haveImage={false}
        />
        <Cards
          heading={"Specify a Refund Policy for Your Products"}
          date={"May 22, 2023"}
          haveImage={false}
        />
        <Cards
          heading={"Introducing: Purchasing Power Parity"}
          date={"May 22, 2023"}
          text={"Creators have global audiences, and can now offer.."}
          haveImage={false}
        />
      </div>
    </div>
  );
}

export default Blogs;
