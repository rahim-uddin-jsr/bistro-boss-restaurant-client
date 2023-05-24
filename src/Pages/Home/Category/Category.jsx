// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Conponents/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <>
      <SectionTitle
        heading={"From 11.00 to 10.00pm"}
        subHeading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img className="relative" src={slideImg1} alt="" />
          <h3 className="text-4xl mx-auto w-full absolute bottom-16 text-white drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slideImg2} alt="" />
          <h3 className="text-4xl mx-auto w-full absolute bottom-16 text-white drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slideImg3} alt="" />
          <h3 className="text-4xl mx-auto w-full absolute bottom-16 text-white drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slideImg4} alt="" />
          <h3 className="text-4xl mx-auto w-full absolute bottom-16 text-white drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slideImg5} alt="" />
          <h3 className="text-4xl mx-auto w-full absolute bottom-16 text-white drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
