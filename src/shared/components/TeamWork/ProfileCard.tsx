import { profileItems } from "../../utils/constants";
import { useState } from "react";
import arrowLeft from "../../../assets/svgs/arrow-left.svg";
import arrowRight from "../../../assets/svgs/arrow-right.svg";

const ProfileCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(profileItems.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profileItems.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profileItems.length - 3 ? 0 : prevIndex + 3
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index * itemsPerPage);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute -left-10 z-10 p-4 bg-gray-800 text-white rounded-full shadow bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5]"
        >
          <img src={arrowLeft} alt="My SVG" width={10} height={10} />
        </button>
        <div className="overflow-hidden w-full mx-10">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {profileItems.map((item, index) => (
              <div key={index} className="w-1/3 px-4 flex-shrink-0">
                <div className="bg-black bg-opacity-50 pt-12 shadow rounded-[40px] rounded-t-2xl text-center relative overflow-visible">
                  <div className="mt-4 p-6 rounded-[40px] relative overflow-visible  bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5] ">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="absolute w-16 h-16 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 z-10"
                    />
                    <h3 className="pt-6 text-lg font-semibold">{item.name}</h3>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-justify mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute -right-10 z-10 p-4 bg-gray-800 text-white rounded-full shadow bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5]"
        >
          <img src={arrowRight} alt="My SVG" width={10} height={10} />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex / 3
                ? "bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5]"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
