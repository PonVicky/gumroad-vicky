import { Link } from "react-router-dom";
function Cards({ image, heading, text, date, haveImage }) {
  let withImage = () => {
    return (
      <Link
        to="/blog1"
        className="w-[462px] h-auto border border-black rounded-md cursor-pointer
    
    
     transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[4px_4px_0_#000000] 
    active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]
    "
      >
        <div className="h-[276px] overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover block rounded-md"
          />
        </div>
        <div className="p-[24px] rounded-b-md">
          <p className="text-[24px] mb-[15px]  leading-[1.1]">{heading}</p>
          <p>{text}</p>
          <p>{date}</p>
        </div>
      </Link>
    );
  };
  let withoutImage = () => {
    return (
      <Link
        to="/blog1"
        className="w-[462px] h-auto border border-black rounded-md cursor-pointer
    
    
     transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[4px_4px_0_#000000] 
    active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]
    "
      >
        <div className="p-[24px] rounded-b-md">
          <p className="text-[24px] mb-[15px]  leading-[1.1]">{heading}</p>
          <p>{text}</p>
          <p>{date}</p>
        </div>
      </Link>
    );
  };
  return haveImage ? withImage() : withoutImage();
}

export default Cards;
