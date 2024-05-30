import ScrollToTop from "react-scroll-up";
import imageToTop from "../../assets/totopimage.png";

const ScrollUp = () => {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <div className="lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-white rounded-full opacity-40 cursor-pointer hover:opacity-70 hover:border-blue-500 ">
          <img src={imageToTop} alt="" className="" />
        </div>
      </ScrollToTop>
    </div>
  );
};

export default ScrollUp;
