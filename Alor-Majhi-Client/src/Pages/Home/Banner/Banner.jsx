import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";


import { Slide } from "react-awesome-reveal";

AOS.init();

const Banner = () => {
  return (
    <div className="w-[100%] mx-auto my-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 4000 }} // Add this line for autoplay with a delay of 3000 milliseconds (3 seconds)
      >
        <SwiperSlide className="relative hid-bid">
          <img src="https://i.ibb.co/bLC1NGS/img1.jpg" alt="" />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="absolute top-30 left-20 text-justify">
            <Slide>
              <h1 className="text-2xl md:text-6xl font-semibold text-white font-[arial] ">
                Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
                elit deserunt.
              </h1>
            </Slide>
            <Slide>
              {" "}
              <p className="text-[16px] md:text-2xl font-medium my-5 text-yellow-50 font-[arial] ">
                Lorem ipsum dolor sit amet consectetur.
              </p>{" "}
            </Slide>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Slide delay={1e2}>
                <button className="px-4 py-2 border-2 font-medium bg-transparent text-white hover:border-2 hover:bg-yellow-500 hover:text-black font-[arial] ">
                  Apply
                </button>
              </Slide>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative hid-bid">
          <img src="https://i.ibb.co/BCZcQb1/img2.jpg" alt="" />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="absolute top-30 left-20 text-justify">
            <Slide>
              <h1 className="text-2xl md:text-6xl font-semibold text-white font-[arial] ">
                Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
                elit deserunt.
              </h1>
            </Slide>
            <Slide>
              {" "}
              <p className="text-[16px] md:text-2xl font-medium my-5 text-yellow-50 font-[arial] ">
                Lorem ipsum dolor sit amet consectetur.
              </p>{" "}
            </Slide>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Slide delay={1e2}>
                <button className="px-4 py-2 border-2 font-medium bg-transparent text-white hover:border-2 hover:bg-yellow-500 hover:text-black font-[arial] ">
                  Apply
                </button>
              </Slide>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative hid-bid">
          <img src="https://i.ibb.co/gJxQKYk/img3.jpg" alt="" />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="absolute top-30 left-20 text-justify">
            <Slide>
              <h1 className="text-2xl md:text-6xl font-semibold text-white font-[arial] ">
                Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing
                elit deserunt.
              </h1>
            </Slide>
            <Slide>
              {" "}
              <p className="text-[16px] md:text-2xl font-medium my-5 text-yellow-50 font-[arial] ">
                Lorem ipsum dolor sit amet consectetur.
              </p>{" "}
            </Slide>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Slide delay={1e2}>
                <button className="px-4 py-2 border-2 font-medium bg-transparent text-white hover:border-2 hover:bg-yellow-500 hover:text-black font-[arial]">
                  Apply
                </button>
              </Slide>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
