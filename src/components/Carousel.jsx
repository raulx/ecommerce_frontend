import { useState } from "react";
import { useEffect } from "react";

/* eslint-disable react/prop-types */

function Carousel({
  children,
  slides = 2,
  autoslide = false,
  autoSlideInterval = 3000,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setTimeout(() => {
      if (currentSlide === slides - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, autoSlideInterval);
    return () => clearTimeout(slideInterval);
  }, [autoslide, currentSlide, slides, autoSlideInterval]);
  return (
    <>
      <div className={`grid overflow-hidden`} style={{ width: windowWidth }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${slides},minmax(0,1fr))`,

            width: windowWidth * slides,
            transform: `translateX(-${windowWidth * currentSlide}px)`,
          }}
          className={`grid-rows-1 h-full transition-all bg-white duration-1000 `}
        >
          {children}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        {Array(slides)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 hover:bg-gray-600 ${
                  currentSlide === i ? "bg-gray-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(i)}
              />
            );
          })}
      </div>
    </>
  );
}

export default Carousel;