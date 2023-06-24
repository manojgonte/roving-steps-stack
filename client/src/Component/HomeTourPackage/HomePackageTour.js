import Card from "../Common/CardComponents/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import PopularTourCard from "../Common/PopularTourCard";
import { getTourList } from "@/Services/commonServices";
import Image from "next/image";

const HomeTourPackage = () => {

    const swiperRef = useRef();
    const [tourPackages, setTourPackages] = useState([]);

    const tourListFun = async () => {
        const tourList = await getTourList();
        setTourPackages(tourList?.tourPackage);
    }

    useEffect(() => {
        tourListFun();
    }, []);
    return (
        <div className="flex flex-col w-full h-[700px] px-16 py-5 gap-8">
            <div className="text-2xl font-bold text-[#1B2C60] text-center w-full py-5">
                Popular Tour Packages
            </div>
            {/* 
                TODO: For improvements of the product carousel
                https://stackoverflow.com/a/73642499
                https://stackoverflow.com/a/73984522
             */}
            <div className="w-full px-16 flex flex-row h-full gap-10 justify-center">
                <button onClick={() => {
                    swiperRef.current?.slidePrev()
                }}>
                    <Image height={70} width={70} src="/Assets/images/Icons/BackEnd.svg" alt="" />
                </button>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {tourPackages.map(
                        (card, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <PopularTourCard cardDetails={card} />
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                <button onClick={() => swiperRef.current?.slideNext()}>
                    <Image height={70} width={70} src="/Assets/images/Icons/NextEnd.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default HomeTourPackage;