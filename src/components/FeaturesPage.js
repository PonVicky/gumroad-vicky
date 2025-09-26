import paper1 from "../images-and-logos/paper1.svg";
import paper2 from "../images-and-logos/paper2.svg";
import paper3 from "../images-and-logos/paper3.svg";
import paper4 from "../images-and-logos/paper4.svg";
import paper5 from "../images-and-logos/paper5.svg";
import paper6 from "../images-and-logos/paper6.svg";
import arrow from "../images-and-logos/arrowright.svg";

import cardimage1 from "../images-and-logos/cardimage3.svg";
import cardimage2 from "../images-and-logos/cardimage2.svg";
import cardimage3 from "../images-and-logos/cardimage1.svg";
import cardimage4 from "../images-and-logos/cardimage4.svg";

function FeaturesPage() {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] bg-[#f1f333] h-[1252px] flex flex-col items-center relative ">
        <p className="text-[24px] pt-[190px] pb-[20px]">Product features</p>
        <p className="text-[96px] w-[700px] font-medium text-center leading-[1.1] pb-[40px]">
          Built for new beginnings
        </p>
        <p className="text-center w-[750px] text-[24px] font-medium leading-[1.3] mb-[90px]">
          Gumroad is a powerful, but simple, e-commerce platform that puts a
          wide selection of tools at your fingertips. Now you can sell the
          digital services you want-books, memberships, courses, and more-right
          to your audience.
        </p>
        <img
          alt="nothing"
          src={paper1}
          className="absolute top-[199px] left-[128px]"
        />
        <img
          alt="nothing"
          src={paper4}
          className="absolute top-[210px] right-[128px]"
        />
        <img
          alt="nothing"
          src={paper2}
          className="absolute bottom-[335px] left-[-48px]"
        />
        <img
          alt="nothing"
          src={paper5}
          className="absolute bottom-[420px] right-[58px] w-[200px]"
        />
        <img
          alt="nothing"
          src={paper6}
          className="absolute bottom-[-70px] right-[240px] w-[200px]"
        />
        <img
          src={paper3}
          alt="noting"
          className="absolute bottom-[-75px] left-[80px] w-[230px]"
        />
        <div className="mb-[50px] bg-[#ff90e8] w-[1152px] h-[384px] rounded-full border border-black flex justify-center items-center ">
          <div className="w-[1086px] h-[318px] border border-black px-[32px] rounded-full relative flex justify-center items-center">
            <p className="text-[24px] w-[290px] bg-[#ff90e8] text-center absolute top-[-18px] left-[200px]">
              The Gumroad Way
            </p>
            <p className="text-[24px] w-[220px] bg-[#ff90e8] text-center absolute top-[-18px] right-[150px]">
              Start Small
            </p>
            <p className="text-[24px] w-[290px] px-[20px] bg-[#ff90e8] text-center absolute bottom-[-18px] left-[200px]">
              Get Better Together
            </p>
            <p className="text-[24px] w-[220px]  bg-[#ff90e8] text-center absolute bottom-[-18px] right-[150px]">
              Learn Quickly
            </p>
            <div className="flex justify-center items-center gap-[90px]">
              <img alt="nothing" src={cardimage1} />
              <img alt="nothing" src={cardimage2} />
              <img alt="nothing" src={cardimage3} />
              <img alt="nothing" src={cardimage4} />
            </div>

            <img
              alt="nothing"
              src={arrow}
              className="w-[14px] absolute top-[-13px] left-[193px]"
            />
            <img
              alt="nothing"
              src={arrow}
              className="w-[14px] absolute top-[-13px] left-[700px]"
            />
            <img
              alt="nothing"
              src={arrow}
              className=" rotate-180 w-[14px] absolute bottom-[-13px] left-[490px]"
            />
            <img
              alt="nothing"
              src={arrow}
              className=" rotate-180 w-[14px] absolute bottom-[-13px] left-[930px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[220px] bg-white flex flex-col justify-center items-center border-t border-black">
        <p className="text-[20px] font-medium">Customizable Options</p>
      </div>
    </div>
  );
}

export default FeaturesPage;
