import paint from "../images-and-logos/paint.png";
import { Link } from "react-router-dom";

function Blog1() {
  return (
    <div className="w-[768px] min-h-[500px]  mx-auto mt-[120px] font-montserrat tracking-tight">
      <Link to="/" className="text-sm font-mono cursor-pointer">
        ⬅ Back to Blog.
      </Link>
      <h1 className="mt-[20px] text-[40px] font-medium ">
        🚀Gumroad April Recap: What We've Shipped
      </h1>
      <p className="mt-[8px] text-sm">May 1, 2025</p>
      <img src={paint} className="mt-[50px] rounded-md" />
      <div className="font-medium text-[20px]">
        <h1 className=" mt-[100px] mb-[20px] font-bold text-[25px]">
          We're now MIT licensed!💫
        </h1>
        <p className=" mb-[20px]">
          After helping creators earn over $1 billion (yes, billion with a B),
          we'e opened our entire codebase to everyone. This means:
        </p>
        <ul className="ml-[50px] list-disc">
          <li className="mb-[10px]">
            Complete freedom to use our code however you want
          </li>
          <li className="mb-[10px]">
            Build on top of Gumroad for your own projects{" "}
          </li>
          <li className="mb-[10px]">
            Modify anything without restrictive rules
          </li>
          <li className="mb-[10px]">Commercial use? Absolutely allowed</li>
          <li className="mb-[10px]">More features shipped faster than ever</li>
        </ul>
        <p className="mt-[20px] mb-[15px]">
          The MIT license is like getting the keys to the castle-maximum
          flexibility with minimal restrictions. Whether you want to explore how
          we wrk, contribute improvements, or build something entirely new-and
          even charge for it-it's all there for you.
        </p>
        <p
          className="text-base px-[10px] py-[20px] bg-[#dddddd] w-[230px] rounded-md mb-[20px]  hover:bg-[#ff90e8]
        
        
            transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[8px_8px_0_#000000]
    active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0_#000000]
        "
        >
          Check the GitHub repo ➡️
        </p>
      </div>

      <div className="font-medium text-[20px]">
        <h1 className=" mt-[35px] mb-[20px] font-bold text-[25px]">
          Small Bets joins the Gumroad family
        </h1>
        <p className="  mb-[20px]">
          We're thrilled to announce that Small Bets has officially joined the
          Gumroad family! This partnership brings as incredible enterpreneurial
          community right to your fingertips.
        </p>
        <h1 className=" mt-[35px] mb-[20px] font-bold ">
          What this means for you:
        </h1>
        <ul className="ml-[50px] list-disc">
          <li className="mb-[10px]">
            Access to a thriving community of 6,775+ entrepreneurs building
            businesses their way
          </li>
          <li className="mb-[10px]">
            13 resident experts across coding, marketing, design, and e-commerce
            ready to help you
          </li>
          <li className="mb-[10px]">
            A negativity-free zone focused on practical advice and genuine
            support{" "}
          </li>
          <li className="mb-[10px]">Commercial use? Absolutely allowed</li>
          <li className="mb-[10px]">
            Lifetime access with NO recurring fees if you join today
          </li>
        </ul>
        <p className="mt-[20px] mb-[15px]">
          Small Bets began as a Gumroad course and evolved into something much
          bigger—a place where creators support each other in building
          sustainable businesses that fit their ideal lifestyles.
        </p>
        <p className="mt-[20px] mb-[15px]">
          Whether you're just starting out or looking to scale, this community
          provides the guidance, feedback, and encouragement you need to succeed
          on your creator journey.
        </p>
        <p
          className="text-base px-[10px] py-[20px] bg-[#dddddd] w-[230px] rounded-md mb-[20px]  hover:bg-[#ff90e8]
        
        
            transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[8px_8px_0_#000000]
    active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0_#000000]
        "
        >
          Join Small Bets today
        </p>
      </div>

      <div className="font-medium text-[20px]">
        <h1 className=" mt-[100px] mb-[20px] font-bold text-[25px]">
          Introducing Gumroad Community
        </h1>
        <p className=" mb-[20px]">
          You asked, we delivered! Now you can build a thriving community right
          alongside your products:
        </p>
        <ul className="ml-[50px] list-disc">
          <li className="mb-[10px]">
            Enable chat for any product with one click
          </li>
          <li className="mb-[10px]">
            Let customers connect with each other (and you)
          </li>
          <li className="mb-[10px]">Track unread messages easily </li>
          <li className="mb-[10px]">
            Moderate discussions with admin controls
          </li>
          <li className="mb-[10px]">Get daily or weekly recap emails</li>
        </ul>
        <p className="mt-[20px] mb-[15px]">
          The best part? It's completely FREE for all Gumroad creators.
          Communities reduce churn and build loyal customers-and now they're
          built right into your produts.
        </p>
        <p
          className="text-base px-[10px] py-[20px] bg-[#dddddd] w-[230px] rounded-md mb-[20px]  hover:bg-[#ff90e8]
        
        
            transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[8px_8px_0_#000000]
    active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0_#000000]
        "
        >
          Enable Community Now
        </p>
      </div>
      <hr className="mb-[20px] " />
    </div>
  );
}

export default Blog1;
