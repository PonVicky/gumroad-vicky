import quote from "../images-and-logos/quote.svg";
function Testimonial({ testimonial, image, peru, velai }) {
  return (
    <div className="h-[270px] w-[544px]  ">
      <div className="border border-black px-[32px] py-[16px] rounded-t-3xl rounded-br-3xl mb-[25px] bg-white">
        <img src={quote} className="pb-[10px]" />
        <p className="text-[20px]">{testimonial}</p>
      </div>
      <div className="h-[56px] pl-[10px] flex items-center gap-[18px]">
        <img src={image} className="w-[48px]" />
        <div>
          <p className="text-[18px] font-medium">{peru}</p>
          <p className="text-[14px]">{velai}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
