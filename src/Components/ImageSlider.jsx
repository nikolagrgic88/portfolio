import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      speed={1000}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full rounded-xl"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`img-${index}`}
            className="object-fit w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
