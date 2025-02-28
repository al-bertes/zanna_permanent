"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  onLastSlide: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, onLastSlide }) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    loop={true} // Плавный цикличный переход
    onReachEnd={() => {
      setTimeout(onLastSlide, 2000); // Пауза перед переключением категории
    }}
    spaceBetween={10}
    slidesPerView={1}
    breakpoints={{
      480: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="w-full"
  >
    {images.map((imgSrc, index) => (
      <SwiperSlide key={index}>
        <Image
          src={imgSrc}
          alt={`Slide ${index + 1}`}
          width={600}
          height={400}
          className="w-full h-80 md:h-64 object-cover rounded-2xl shadow-lg"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageSlider;
