import Image from "next/image";
import TestimonialCard from "../TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { useRef } from "react";

const HomePageTestimonial = () => {
    const swiperRef = useRef();
    return (
        <div className="w-full h-[600px] flex flex-col justify-center items-center bg-white px-32 py-12 ">
            <div className="w-full h-full flex justify-center items-center">
                <Image src={"/Assets/images/Icons/Sayings.png"}
                    width={100} height={100}
                    className="w-24 h-20 object-center"
                    alt="Sayings" />
            </div>
            <div className="w-full h-10 flex justify-center items-center pb-4">
                <span className="text-[#1B2C60] text-2xl font-bold ">What traveler are saying about us?</span>
            </div>
            <div className="w-full h-10 flex justify-center items-center">
                <span className="text-2xl font-normal ">Many of our travelers have shared their review about tour, hotels, food and many more</span>
            </div>
            <div className="w-full bg-white rounded-lg flex justify-center gap-4 shadow-2xl drop-shadow-2xl my-14 p-5 py-10">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={false}
                    // modules={[Pagination]}
                    className=""
                >
                    {[1, 2, 3, 4, 5, 6].map(
                        (card, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TestimonialCard />
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default HomePageTestimonial;