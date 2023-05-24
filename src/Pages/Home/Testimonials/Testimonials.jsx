import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import SectionTitle from "../../../Conponents/SectionTitle/SectionTitle";
const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper
        navigation={true}
        autoplay={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex justify-center flex-col items-center space-y-6 px-12 my-12">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="w-9/12">{review.details}</p>
              <h2 className="uppercase text-3xl text-yellow-500">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
