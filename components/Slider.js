"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ items }) {
  const sliderRef = useRef(null);

  const settings = {
    focusOnSelect: true,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="slick-slider max-w-full mx-auto mt-10 flex items-center cursor-grab">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="slick-slide px-[10px] transition-all duration-200 ease-in-out"
          >
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
}
