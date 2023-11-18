import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import img1 from "../../../assets/banner image/img1.jpeg";
import img2 from "../../../assets/banner image/img2.jpg";
import img3 from "../../../assets/banner image/img3.jpg";

AOS.init();

const Banner = () => {
  return (
    <div className="w-[100%] mx-auto my-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 6000 }} // Add this line for autoplay with a delay of 3000 milliseconds (3 seconds)
      >
        <SwiperSlide className="relative hid-bid">
          <img src={img1} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-30 left-20 text-justify" >
          <h1 className="text-6xl font-semibold secondary-text " data-aos="fade-right" data-aos-duration="500">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit deserunt.
            </h1>
            <p className="text-2xl font-medium my-5 secondary-text " data-aos="fade-right" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur.</p>
     <div data-aos="fade-right" data-aos-duration="1000">

            <button className="px-4 py-2 border-2 font-medium bg-transparent text-black hover:border-2 hover:bg-yellow-500 hover:text-white ">Apply</button>
     </div>
          </div>
        </SwiperSlide>



        <SwiperSlide className="relative">
          <img src={img2} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-50 left-50">
            <h1 className="text-6xl font-semibold text-white"  data-aos="fade-down" data-aos-duration="1000">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit deserunt.
            </h1>
            <p className="text-2xl font-medium my-5 text-white"  data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="primary-btn ml-56"  data-aos="fade-up" data-aos-duration="2000">Apply</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img3} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute top-50 right-20 text-end">
            <motion.h1
            initial={{x: 200}}
            animate={{x:0}}
            transition={{
              // repeat: "Infinity",
               duration:2, delay:5
            }}
            className="text-6xl font-semibold text-white">
              Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit deserunt.
            </motion.h1>
            <p className="text-2xl font-medium my-5 text-white">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="primary-btn ml-56">Apply</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
