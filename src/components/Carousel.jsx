import { useState, useEffect, useRef } from "react";

/* eslint-disable react/prop-types */

function Carousel({
  children,
  slides = 2,
  autoslide = false,
  autoSlideInterval = 3000,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 50) {
      // Swipe left
      setCurrentSlide((prevIndex) =>
        prevIndex === slides - 1 ? 0 : prevIndex + 1
      );
    } else if (diffX < -50) {
      // Swipe right
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? slides - 1 : prevIndex - 1
      );
    }

    touchStartX.current = null;
  };
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
    <div className="flex flex-col gap-4">
      <div className={`grid overflow-hidden`} style={{ width: windowWidth }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${slides},minmax(0,1fr))`,

            width: windowWidth * slides,
            transform: `translateX(-${windowWidth * currentSlide}px)`,
          }}
          className={`grid-rows-1 h-full transition-all bg-white duration-1000 `}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {children}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 ">
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
    </div>
  );
}

export default Carousel;
