function Cards({ image, heading, text, date, haveImage }) {
  let withImage = () => {
    return (
      <div
        className="w-[462px] h-full border border-black rounded-md cursor-pointer
    
    
     transition duration-300 ease-out transform-gpu
    hover:-translate-x-[2px] hover:-translate-y-[2px]
    hover:shadow-[4px_4px_0_#000000] 
    active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000000]
    "
      >
        <div className="h-[276px] overflow-hidden">
          <img
            alt="nothing"
            src={image}
            className="w-full h-full object-cover block rounded-md"
          />
        </div>
        <div className="p-[24px] rounded-b-md">
          <p className="text-[24px] mb-[15px]  leading-[1.1]">{heading}</p>
          <p>{text}</p>
          <p>{date}</p>
        </div>
      </div>
    );
  };
  let withoutImage = () => {
    return (
      <div
        className="w-[462px] h-full border border-black rounded-md cursor-pointer
    
    
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
      </div>
    );
  };
  return haveImage ? withImage() : withoutImage();
}

export default Cards;
