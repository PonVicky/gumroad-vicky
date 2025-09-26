import search from "../images-and-logos/search-outline.svg";
import Testimonial from "./Testimonial";

import coin1 from "../images-and-logos/coin1.svg";
import coin2 from "../images-and-logos/coin2.svg";
import coin3 from "../images-and-logos/coin3.svg";
import coin4 from "../images-and-logos/coin4.svg";
import coin5 from "../images-and-logos/coin5.svg";

import sellAnything from "../images-and-logos/sellanything.png";
import stats from "../images-and-logos/stats.svg";
import sellanywhere from "../images-and-logos/sellanywhere.png";

import sideProject1 from "../images-and-logos/sideproject1.svg";
import sideProject2 from "../images-and-logos/sideproject2.svg";

import person1 from "../images-and-logos/person1.png";
import person2 from "../images-and-logos/person2.png";
import person3 from "../images-and-logos/person3.png";
import person4 from "../images-and-logos/person4.png";

import typing from "../images-and-logos/typing.svg";
import texting from "../images-and-logos/texting.svg";

import arrow from "../images-and-logos/arrowright.svg";

import footer from "../images-and-logos/footer.svg";
function LandingPage() {
  const array = [
    {
      image: person1,
      testimonial:
        "I launched MaxPacks as an experimental side gig; but within 2 years those Procreate brushes were earning more than my 6-figure salary in CG. Leaving in favor of Gumroad enabled me to explore other aspects of my art, develop new hobbies, and finally prioritize my personal life.",
      peru: "Max Ulichney",
      velai: "Sells Procreate brush packs",
    },
    {
      image: person2,
      testimonial:
        "For years, I had a goal to develop 'passive' income streams, but struggled to make that a reality. Last year, I started selling informational products on Gumroad and since then have made $10k+ per month building products that I love.",
      peru: "Step Smith",
      velai: "Sells content tutorials",
    },
    {
      image: person3,
      testimonial:
        "Originally, I took pre-orders for my Trend Reports on Gumroad. But I received... exactly $0. So I changed tactics: I made half of my report free, and the other half paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly subscriptions.",
      peru: "trendsvc",
      velai: "Sells business insigts and expertise",
    },
    {
      image: person4,
      testimonial:
        "I love Gumroad because it can't be any simpler. I upload a file, set a price, and I can start selling on the internet. The money I make from my sales lands directly in my bank account every Friday.",
      peru: "Daniel Vassallo",
      velai: "Sells business insights and expertise",
    },
  ];

  return (
    <div className="bg-[#f4f4f0] w-[100%] min-h-[1300px] overflow-hidden">
      <div className="starter w-[768px] min-h-[200px] p-[5px]  mx-auto">
        <p className="pt-[250px] text-center text-[96px] font-medium">
          Go from 0 to $1
        </p>
        <p className="text-center text-[24px]">
          Anyone can earn their first dollor online. Just start with what you
          know, see what sticks, and get paid. It's that easy.
        </p>
        <nav className="text-center flex gap-[20px] justify-center mt-[25px] relative">
          <p
            className="text-[20px] px-[35px] py-[15px] bg-black text-white text-center rounded-md
          
                      transition-all duration-300 ease-out transform-gpu
  hover:-translate-x-[6px] hover:-translate-y-[6px]
  hover:shadow-[8px_8px_0_#FFD700,14px_14px_0_#FF4500]

  hover:cursor-pointer
          "
          >
            Start selling
          </p>
          <div className="w-[310p] text-[20px] px-[20px]  bg-black text-white text-center rounded-md flex items-center gap-[30px]">
            {" "}
            Search marketplace ...
            <nav className="w-[36px] h-[34px] bg-white rounded-md flex  justify-center items-center">
              <img
                alt="nothing"
                className="w-[24px] h-[24px] text-center"
                src={search}
              />
            </nav>
          </div>
          <img
            alt="nothing"
            src={coin1}
            className=" hover:animate-spin hover:[animation-duration:5s] animation-play-state:paused absolute top-[102px] left-[700px]"
          />
          <img
            alt="nothing"
            src={coin2}
            className=" hover:animate-spin hover:[animation-duration:5s] animation-play-state:paused absolute bottom-[170px] right-[930px]"
          />
          <img
            alt="nothing"
            src={coin3}
            className=" hover:animate-spin hover:[animation-duration:5s] animation-play-state:paused absolute top-[-380px] left-[900px]"
          />
          <img
            alt="nothing"
            src={coin4}
            className=" hover:animate-spin hover:[animation-duration:5s] animation-play-state:paused absolute top-[-60px] left-[1000px] "
          />
          <img
            alt="nothing"
            src={coin5}
            className=" hover:animate-spin hover:[animation-duration:5s] animation-play-state:paused absolute top-[-60px] right-[900px] "
          />
        </nav>
      </div>
      <div className="mx-auto mt-[300px] min-h-[480px] w-[1120px] ">
        <div className="container1 flex gap-[35px] mb-[35px]">
          <nav className="p-[32px] w-[724px] h-[480px] border border-black rounded-[25px] bg-white flex justify-between flex-col font-medium relative">
            <p className="text-[36px]">Sell anything</p>
            <p className="w-[361px] text-[18px]">
              Video lessons. Monthly subscriptions. Whatever! Gumroad was
              created to help you experiment witha all kinds of ideas and
              formats.
            </p>

            <img
              alt="nothing"
              className="absolute w-[490px] right-[-8px] top-[-65px]"
              src={sellAnything}
            />
          </nav>
          <nav className="p-[32px]  w-[363px] h-[480px] border border-black rounded-[25px] bg-white font-medium relative overflow-hidden">
            <p className="text-[32px] mb-[20px] w-[200px] ">
              Make your own road
            </p>
            <p className="w-[301px] text-[18px]">
              Whether you need more balance, flexibility, or just a different
              gig, we make it easy to chart a new path.
            </p>
            <img
              alt="nothing"
              src={stats}
              className="absolute left-[0px] bottom-[-1px]"
            />
          </nav>
        </div>
        <div className="flex gap-[35px] mb-[35px]">
          <nav className="p-[32px]  w-[363px] h-[480px] border border-black rounded-[25px] bg-white font-medium relative overflow-hidden flex flex-col justify-between">
            <p className="text-[36px] mb-[20px] w-[300px] ">Sell to anyone</p>
            <ul className="list-disc list-inside w-[260px]">
              <li className="mb-[20px]">
                Go from 0 to $1 and automated workflows.
              </li>
              <li className="mb-[20px]">
                Let your customers pay in their own currency.
              </li>
              <li className="mb-[20px]">
                Choose between one-time, recurring, or fixed-length payments in
                your currency of choice.
              </li>
            </ul>
          </nav>
          <nav className="p-[32px] w-[724px] h-[480px] border border-black rounded-[25px] bg-white flex justify-between flex-col font-medium relative">
            <p className="text-[36px]">Sell anywhere</p>
            <p className="w-[320px] text-[18px] text-left">
              Create and customize your storefront with our all-in-one platform
              or choose to use your personal site instead. Seamlessly connect
              your Gumroad account to thousands of apps in your current stack.
            </p>

            <img
              alt="nothing"
              className="absolute w-[370px] right-[-20px] top-[30px]"
              src={sellanywhere}
            />
          </nav>
        </div>
        <div className="container3 mb-[35px] flex flex-row gap-[40px]">
          <nav className="w-[550px] h-[566px] flex justify-center items-center bg-white border relative border-black rounded-[25px]">
            <img alt="nothing" src={sideProject1} />
            <p className="absolute border border-black px-[25px] py-[15px] bg-white rounded-2xl text-[20px] font-medium top-[48px] left-[35px]">
              Instead of building a company...
            </p>
          </nav>
          <nav className="w-[550px] h-[566px] flex justify-center items-center bg-white border relative border-black rounded-[25px]">
            <img alt="nothing" src={sideProject2} />
            <p className="absolute  border border-black px-[25px] py-[15px] bg-white rounded-2xl text-[20px] font-medium bottom-[63px] left-[30px]">
              ...start selling a side project!
            </p>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="pt-[80px] mb-[100px] text-[48px] font-medium ">
            Your know all those great ideas you have?
          </p>
          <div className="mb-[50px] bg-[#ffc900] w-[1152px] h-[320px] rounded-full border border-black flex justify-center items-center ">
            <div className="w-[1086px] h-[254px] border border-black px-[32px] rounded-full relative flex justify-center items-center">
              <img
                alt="nothing"
                src={coin5}
                className="w-[230px] animate-spin [animation-duration:5s] hover:[animation-play-state:paused]"
              />
              <p className="text-[24px] w-[290px] bg-[#ffc900] text-center absolute top-[-18px] left-[200px]">
                The Gumroad Way
              </p>
              <p className="text-[24px] w-[220px] bg-[#ffc900] text-center absolute top-[-18px] right-[150px]">
                Start Small
              </p>
              <p className="text-[24px] w-[290px] px-[20px] bg-[#ffc900] text-center absolute bottom-[-18px] left-[200px]">
                Get Better Together
              </p>
              <p className="text-[24px] w-[220px]  bg-[#ffc900] text-center absolute bottom-[-18px] right-[150px]">
                Learn Quickly
              </p>
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
          <p className="w-[870px] text-[48px] mb-[20px] text-center font-medium leading-[1.1]">
            We want you to try them, lots of them, and find out what works.
          </p>
          <p className="text-[20px] w-[700px] mb-[20px] text-center">
            You don't have to be a teach expert or even understand how to start
            a business. You just gotta take what you know and sell it.
          </p>
          <p
            className="w-[200px] mt-[10px] mb-[30px] text-[20px] px-[35px] py-[15px] bg-black text-white text-center rounded-md
          
                      transition-all duration-300 ease-out transform-gpu
           hover:-translate-x-[6px] hover:-translate-y-[6px]
            hover:shadow-[8px_8px_0_#FFD700,14px_14px_0_#FF4500]

            hover:cursor-pointer
          "
          >
            Find out how
          </p>
          <p className="text-[192px] mt-[200px] font-medium ">$1,953,112</p>
          <p className="w-[640px] text-[30px] text-center mb-[70px]">
            The amount of income earned by Gumroad digital entrepreneurs last
            week.
          </p>
          <div className="w-[1152px] h-[749px] px-[16px] grid grid-cols-2 gap-[50px]">
            <Testimonial
              image={array[0].image}
              testimonial={array[0].testimonial}
              peru={array[0].peru}
              velai={array[0].velai}
            />
            <Testimonial
              image={array[1].image}
              testimonial={array[1].testimonial}
              peru={array[1].peru}
              velai={array[1].velai}
            />
            <Testimonial
              image={array[2].image}
              testimonial={array[2].testimonial}
              peru={array[2].peru}
              velai={array[2].velai}
            />
            <Testimonial
              image={array[3].image}
              testimonial={array[3].testimonial}
              peru={array[3].peru}
              velai={array[3].velai}
            />
          </div>
        </div>
        <div className="w-[1152px] min-h-[700px]  mt-[200px] flex gap-[35px] mb-[120px]">
          <div className="container1">
            <div className="p-[40px] mb-[35px] rounded-[25px] border border-black bg-white">
              <p className="text-[48px] w-[400px] font-medium leading-none ">
                Don't take risks. That's Scary!
              </p>
            </div>
            <nav className="w-[550px] h-[566px] flex justify-center items-center bg-white border relative border-black rounded-[25px]">
              <img alt="nothing" src={typing} />
              <p className="absolute border border-black px-[25px] py-[15px] bg-white rounded-2xl text-[20px] font-medium top-[48px] left-[35px]">
                Instead of selling a book...
              </p>
            </nav>
          </div>
          <div className="container2 ">
            <nav className="w-[550px] h-[566px] flex justify-center items-center bg-white border relative border-black rounded-[25px]">
              <img alt="nothing" src={texting} />
              <p className="absolute  border border-black px-[25px] py-[15px] bg-white rounded-2xl text-[20px] font-medium bottom-[63px] left-[30px]">
                ...start by selling a blog post!
              </p>
            </nav>
            <div className="p-[40px] mt-[35px] rounded-[25px] border border-black bg-white">
              <p className="text-[48px] w-[400px] font-medium leading-none ">
                Place small bets. That's Exciting!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1200px] flex ml-[50px] gap-[100px] items-center mb-[100px]">
          <div className="leading-none ">
            <p className="text-[60px]">Share your work.</p>
            <p className="text-[60px]">Someone out there needs it.</p>
          </div>
          <p
            className="w-[200px] mt-[10px] mb-[30px] text-[20px] px-[35px] py-[15px] bg-black text-white text-center rounded-md
          
                      transition-all duration-300 ease-out transform-gpu
           hover:-translate-x-[6px] hover:-translate-y-[6px]
            hover:shadow-[8px_8px_0_#FFD700,14px_14px_0_#FF4500]

            hover:cursor-pointer
          "
          >
            Start selling
          </p>
        </div>
      </div>
      <img alt="nothing" src={footer} className="w-[100%]" />
    </div>
  );
}

export default LandingPage;
