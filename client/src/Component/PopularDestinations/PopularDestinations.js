import Card from "@/Component/Common/CardComponents/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import { getTourList } from "@/Services/commonServices";
import { useRouter } from "next/router";
import Image from "next/image";

const PopularDestinations = () => {
    const swiperRef = useRef();
    const router = useRouter();

    const [popularDestinations, setPopularDestinations] = useState([]);

    const tourListFun = async () => {
        const tourList = await getTourList();
        setPopularDestinations(tourList?.popDest);
    }

    useEffect(() => {
        tourListFun();
    }, []);

    const cards = [
        {
            img: "/Assets/images/common/Hexagone_3.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        },
        {
            img: "/Assets/images/common/Hexagone_2.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        },
        {
            img: "/Assets/images/common/Hexagone_1.jpg",
            name: `Destination 10`,
            stars: 4,
            facility: "",
            cost: 5000,
            note: "per person twin sharing",
            seeMore: true,
            button: {
                text: "Book Now",
                enable: false
            }
        }
    ]

    const onClick = () => {
        router.push("/Tours");
    }

    return (
        <div className="flex flex-col w-full h-[600px] px-16 py-5 gap-8">
            <div className="text-2xl font-bold text-[#1B2C60] text-center w-full py-5">
                Popular Destinations
            </div>
            <div className="w-full px-16 flex flex-row h-full gap-10 justify-center">
                <button onClick={() => {
                    swiperRef.current?.slidePrev()
                }}>
                    <Image height={70} width={70} src="/Assets/images/Icons/BackEnd.svg" alt="" />
                </button>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {popularDestinations?.length > 0 && popularDestinations?.map(
                        (card, index) => {
                            return (
                                <SwiperSlide key={index + "._"}>
                                    <Card
                                        cardDetails={card}
                                    />
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                <button onClick={() => swiperRef.current?.slideNext()}>
                    <Image height={70} width={70} src="/Assets/images/Icons/NextEnd.svg" alt="" />
                </button>
            </div>
            <div className=" flex justify-center items-center">
                <button onClick={onClick} className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-36 h-8 rounded-md  text-sm drop-shadow-lg text-center">
                    EXPLORE MORE
                </button>
            </div>
        </div>
    )
}

export default PopularDestinations;