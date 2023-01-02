import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const sliders = [
    {
      url: "https://i.pinimg.com/564x/56/24/c2/5624c24cf3a37ffc0cbed2845086097c.jpg",
      title: "Bali Yemek",
    },
    {
      url: "https://i.pinimg.com/564x/3c/0a/b7/3c0ab7137f0e69b65452df9f2fd30593.jpg",
      title: "Bali Yemek",
    },
    {
      url: "https://i.pinimg.com/564x/96/2f/30/962f30f1add78ef906fd2e9ef28da506.jpg",
      title: "Bali Yemek",
    },
    {
      url: "https://i.pinimg.com/564x/b1/e4/5d/b1e45d7f3de20e9ed3239a09cdc84004.jpg",
      title: "Bali Yemek",
    },
    {
      url: "https://i.pinimg.com/564x/a7/0b/8f/a70b8fde37a14292f7d318fbe951fc7c.jpg",
      title: "Bali Yemek",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlider = currentIndex === sliders.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    
    setCurrentIndex(newIndex);
  };

  const goToSlider = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  return (
    <div className="max-w-[1400px] h-[680px] w-full m-auto mt-24 py-16 px-4 relative group shadow">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      {/*sol */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-orange-50 border-orange-800/20 mr-4 text-orange-800 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} size={30} />
      </div>
      {/*sağ */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-orange-50 border-orange-800/20 mr-4 text-orange-800 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {sliders.map((slider, sliderIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={sliderIndex}
            onClick={() => goToSlider(sliderIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
{/* <div  className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <div className="min-h-116 rounded-xl bg-center bg-cover transform duration-500 hover:-translate-y-1">
        <img src={Manzara} />
        </div>

      </div> */}