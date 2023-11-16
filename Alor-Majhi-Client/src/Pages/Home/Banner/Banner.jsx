import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import img1 from "../../../assets/banner image/img1.jpeg"
import img2 from  "../../../assets/banner image/img2.jpg"
import img3 from  "../../../assets/banner image/img3.jpg"

// import required modules
import {  Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-[100%] mx-auto my-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
       
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'> <img className='' src={img1} alt="" />
        <div className="absolute mx-20 text-justify ">
            <div className="w-[70%] my-20 justify-start">
              <h1 className="text-stone-200 text-2xl md:text-5xl md:my-8 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quisquam.
              </h1>
              <p className="text-white md:text-xl md:my-5">
                Find articulated, highly detailed Toys of heroes and villains
              </p>

              <button>Register</button>
             
            </div>
            </div>
       

     </SwiperSlide>

        <SwiperSlide> <img src={img2}alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={img3}alt="" /> </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;










// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Typed from "react-typed";
// import img1 from "../../../assets/banner image/img1.jpeg";
// import img2 from "../../../assets/banner image/img2.jpg";
// import img3 from "../../../assets/banner image/img3.jpg";


// const Banner = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src={img1} className="w-full md:h-[500px]" />

//           <div className="absolute flex justify-between gap-4 w-full h-full top-0 left-0 bg-gradient-to-r from-[#322828] to-[rgba(21, 21, 21, 0)]">
//             <div className="w-[50%] mx-auto mt-6 md:mt-[10%] md:pl-10">
//               <h1 className="text-stone-200 text-2xl md:text-5xl md:my-10 font-bold">
//                 WELCOME TO <span className="text-yellow-200">BATTLEHEROES</span>{" "}
//                 TOY CITY
//               </h1>
//               <p className="text-white md:text-xl md:my-5">
//                 Find articulated, highly detailed Toys of heroes and villains
//               </p>
//               <p className="text-white md:text-4xl font-semibold ">
//                 THE <Typed
//                   strings={[" MULTIVERSE NOW IN STOCK"]}
//                   typeSpeed={100}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </p>
//             </div>
//           </div>

//           <div className="absolute flex justify-between gap-4 bottom-0 md:bottom-10 left-[50%]">
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide4"
//             >
//               {" "}
//               <FaArrowLeft></FaArrowLeft>{" "}
//             </a>
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide2"
//             >
//               {" "}
//               <FaArrowRight></FaArrowRight>{" "}
//             </a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <img src={img2} className="w-full md:h-[500px]" />
//           <div className="absolute flex justify-between gap-4 w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             <div className="w-[50%] mx-auto md:mt-[10%] md:pl-10">
//               <h1 className="text-stone-200 mt-6 text-2xl md:text-5xl md:my-10 font-bold">
//                 WELCOME TO <span className="text-yellow-200">BATTLEHEROES</span>{" "}
//                 TOY CITY
//               </h1>
//               <p className="text-white md:text-xl md:my-5">
//                 Find articulated, highly detailed Toys of heroes and villains
//               </p>
//               <p className="text-white md:text-4xl font-semibold ">
//                 THE
//                 <Typed
//                   strings={[" STAR WARS NOW IN STOCK"]}
//                   typeSpeed={100}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </p>
//             </div>
//           </div>

//           <div className="absolute flex justify-between gap-4 bottom-0 md:bottom-10 left-[50%]">
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide1"
//             >
//               {" "}
//               <FaArrowLeft></FaArrowLeft>{" "}
//             </a>
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide3"
//             >
//               {" "}
//               <FaArrowRight></FaArrowRight>{" "}
//             </a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src={img3} className="w-full md:h-[500px]" />
//           <div className="absolute flex justify-between gap-4 w-full h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
//             <div className="w-[50%] mx-auto mt-6 md:mt-[10%] md:pl-10">
//               <h1 className="text-stone-200  text-2xl md:text-5xl md:my-10 font-bold">
//                 WELCOME TO <span className="text-yellow-200">BATTLEHEROES</span>{" "}
//                 TOY CITY
//               </h1>
//               <p className="text-white md:text-xl md:my-5">
//                 Find articulated, highly detailed Toys of heroes and villains
//               </p>
//               <p className="text-white md:text-4xl font-semibold ">
//                 THE
//                 <Typed
//                   strings={[" TRANSFORMERS NOW IN STOCK"]}
//                   typeSpeed={100}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </p>
//             </div>
//           </div>

//           <div className="absolute flex justify-between gap-4 bottom-0 md:bottom-10 left-[50%]">
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide2"
//             >
//               {" "}
//               <FaArrowLeft></FaArrowLeft>{" "}
//             </a>
//             <a
//               className="duration-300 text-2xl p-2 text-white bg-transparent hover:p-3"
//               href="#slide4"
//             >
//               {" "}
//               <FaArrowRight></FaArrowRight>{" "}
//             </a>
//           </div>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Banner;