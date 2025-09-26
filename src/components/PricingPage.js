import goldcoin1 from "../images-and-logos/goldcoin1.svg";
import goldcoin2 from "../images-and-logos/goldcoin2.svg";
import goldcoin3 from "../images-and-logos/goldcoin3.svg";
import goldcoin4 from "../images-and-logos/goldcoin4.svg";
import goldcoin5 from "../images-and-logos/goldcoin5.svg";
import goldcoin6 from "../images-and-logos/goldcoin6.svg";
import features from "../images-and-logos/features.svg";

function PricingPage() {
  return (
    <div className="w-[100%] bg-[#ffc900] min-h-[300px] flex justify-center overflow-hidden flex-col ">
      <div className="relative mb-[140px]">
        <p className="mt-[180px] text-[24px] font-medium mb-[30px] text-center">
          Pricing
        </p>
        <p className="text-[96px] text-center w-[500px] font-medium leading-none mb-[50px] mx-auto">
          {" "}
          Simple, transparent pricing
        </p>
        <p className="text-[24px] mx-auto w-[750px] text-center font-medium">
          We believe in transparent pricing that helps you grow. No hidden fees,
          no monthly charges.
        </p>
        <img
          className="absolute w-[170px] right-[-20px] bottom-[100px]"
          src={goldcoin5}
        />
        <img className="absolute top-[-20px] left-[180px]" src={goldcoin2} />
        <img
          className="absolute w-[240px] left-[-33px]  bottom-[80px] "
          src={goldcoin3}
        />
        <img className="absolute top-[110px] right-[150px]" src={goldcoin4} />
        {/* <img className="absolute " src={goldcoin5} /> */}
        <img
          className="absolute right-[690px] bottom-[-200px]"
          src={goldcoin6}
        />
      </div>
      <div className="flex">
        <div className="container1 w-[50%] h-[444px] bg-[#90a8ed] border border-black flex justify-center items-center flex-col">
          <p className="text-[60px] font-medium text-center">10% + $0.50</p>
          <p className="text-[24px] w-[520px] text-center leading-[1.3] font-medium mt-[20px]">
            Per transaction for all sales through your profile or direct links
            to your customers.
          </p>
        </div>
        <div className="container2 w-[50%] h-[444px] bg-[#23a094] border-t border-b border-black flex justify-center items-center flex-col">
          <p className="text-[60px] font-medium text-center">30%</p>
          <p className="text-[24px] w-[500px] text-center leading-[1.3] font-medium mt-[20px]">
            Per transaction when new customers find and buy fro you through our
            discover marketplace.
          </p>
        </div>
      </div>
      <div className="pt-[110px] bg-white min-h-[200px] w-[100%] flex flex-col justify-center items-center">
        <p className="text-[20px] font-medium mb-[20px]">Tax management</p>
        <p className="text-[96px] w-[765px] leading-none text-center font-medium mb-[30px]">
          We're a Merchant of Record
        </p>
        <p className="text-center text-[30px] w-[768px] leading-[1.3] mb-[130px]">
          Since January 1, 2024, Gumroad handles ALL your tax obligations. Yes,
          you read that right - we manage sales tax collection and remittance
          worldwide.
        </p>
      </div>
      <div className="flex h-[740px] ">
        <div className="container1 w-[50%] h-[100%] bg-[#ff90e8] border border-black flex justify-center items-center flex-col">
          <img src={features} />
        </div>
        <div className="container2 w-[50%] h-[100%] bg-black border-t border-b border-black flex justify-center items-center flex-col text-white">
          <div>
            <p className="text-[48px] font-medium text-start text-[#90a8ed]">
              What this means for you
            </p>
            <p className="text-[24px] w-[500px] text-start leading-[1.3] font-medium mt-[5px] mb-[29px] w-[550px]">
              Build your creative business with confidence. We're taking care of
              all tax complexity worldwide, so you can focus on what you do
              best: creating.
            </p>
            <ul className="list-disc list-inside text-[18px] text-start">
              <li className="mb-[15px]">
                No more tax headaches - we handle everyting
              </li>
              <li className="mb-[15px]">
                Simplified global selling - we manage international tax
                compliance
              </li>
              <li className="mb-[15px]">
                More time for creating - leass time dealing with paperwork
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" question-box w-[100%] flex flex-col justify-center items-center bg-white pt-[100px]  ">
        <p className="text-[72px] mb-[100px] font-medium">
          Frequently asked questions
        </p>
        <div className="w-[85%]  hover:cursor-pointer ">
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What can I sell on Gumroad?
            </p>
          </nav>

          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What can't I sell on Gumroad?
            </p>
          </nav>
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">How do I get paid?</p>
          </nav>
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">What are the fees?</p>
          </nav>

          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              Can I use Gumroad for memberships?
            </p>
          </nav>

          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What's changing with taxes?
            </p>
          </nav>
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What do I need to do to prepare for this change?
            </p>
          </nav>

          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What about international sales?
            </p>
          </nav>
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              What happens to my tax collection settings?
            </p>
          </nav>

          <nav className="border-t flex gap-[200px] items-center border-black py-[60px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              Will Gumroad collect taxes everywhere?
            </p>
          </nav>
          <nav className="border-t flex gap-[200px] items-center border-black py-[60px] pb-[120px]">
            <p className="text-[25px] ml-[10px]">➕</p>{" "}
            <p className="text-[36px] font-medium">
              Need a Reseller Certificate from Gumroad?
            </p>
          </nav>
        </div>
        <div className="w-[100%] h-[464px] bg-[#ff90e8] border-t border-black flex justify-center items-center flex-col gap-[60px]">
          <div className="leading-[1.1]">
            <p className="text-[72px] font-medium w-[930px] text-center">
              Share your work.
            </p>
            <p className="text-[72px] font-medium w-[930px] text-center">
              Someone out there needs it.
            </p>
          </div>
          <p
            className="text-[20px] px-[35px] py-[15px] bg-black text-white text-center rounded-md
          
                      transition-all duration-300 ease-out transform-gpu
  hover:-translate-x-[6px] hover:-translate-y-[6px]
  hover:shadow-[8px_8px_0_#FFD700,14px_14px_0_#FF4500]

  hover:cursor-pointer
          "
          >
            Start selling
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
