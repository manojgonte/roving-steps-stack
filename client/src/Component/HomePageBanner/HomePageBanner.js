import Image from "next/image";
import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SearchFilter from "../Common/SearchFilter/SearchFilter";

const HomePageBanner = () => {

    return (
        <div className="flex flex-col m-0 p-0 relative w-full h-[600px] justify-center items-center">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                // navigation={false}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <Image
                        src={"/Assets/images/Banner/BannerFour.jpeg"}
                        fill
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        alt="bg-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/Assets/images/Banner/BannerOne.jpeg"}
                        fill
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        alt="bg-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/Assets/images/Banner/BannerTwo.jpeg"}
                        fill
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        alt="bg-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/Assets/images/Banner/BannerThree.jpeg"}
                        fill
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        alt="bg-image"
                    />
                </SwiperSlide>
            </Swiper>
            <div className="z-10 flex flex-col absolute w-full h-[500px] justify-center items-center gap-8">
                <div className="w-[600px] text-center font-bold text-white text-4xl drop-shadow-lg">
                    {`Explore the huge word and enjoy it's beauty`}
                </div>
                <div className="w-4/5 text-white text-xl font-thin text-center tracking-widest ">
                    {`Let's experience moments which leave us stunned and gives us goosebumps and so much more that we cannot express when we travel to places we always wished for`}
                </div>
                <div className="w-full flex justify-center">
                    <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-28 h-8 rounded-md text-sm drop-shadow-lg text-center">
                        EXPLORE
                    </button>
                </div>
                {/* <div className="w-11/12 h-9">
                    <div className="bg-white w-full h-full rounded-3xl flex items-center">
                        <div className="w-1/5 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                            <Image
                                src={"/Assets/images/icons/LocationDefault.svg"}
                                width={10}
                                height={10}
                                alt=""
                            />
                            <input placeholder="Location" className="p-1 rounded-l-3xl w-full  text-sm" />
                        </div>
                        <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                            <Image
                                src={"/Assets/images/icons/DateDefault.svg"}
                                width={15}
                                height={15}
                                alt=""
                            />
                            <input placeholder="Check in" className="p-1 w-full  text-sm" />
                        </div>
                        <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                            <Image
                                src={"/Assets/images/icons/DateDefault.svg"}
                                width={15}
                                height={15}
                                alt=""
                            />
                            <input placeholder="Check out" className="p-1 w-full  text-sm" />
                        </div>
                        <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                            <Image
                                src={"/Assets/images/icons/DateDefault.svg"}
                                width={15}
                                height={15}
                                alt=""
                            />
                            <input placeholder="Adult" className="w-full p-1  text-sm" />
                        </div>
                        <div className="w-1/6 border-[#ECBF40] h-2/3 flex items-center rounded-l-3xl border-r-2 my-2 ml-2 pl-4 gap-1">
                            <Image
                                src={"/Assets/images/icons/DateDefault.svg"}
                                width={15}
                                height={15}
                                alt=""
                            />
                            <input placeholder="Kids" className="w-full p-1  text-sm" />
                        </div>
                        <div className="w-1/6 h-full flex items-center pl-6 rounded-r-3xl hover:bg-[#ECBF40]">
                            <button className="text-[#C6C6C6] hover:text-white  text-sm">
                                Search
                            </button>
                        </div>
                    </div>
                </div> */}
                <SearchFilter />
            </div>

        </div>
    )
}

export default HomePageBanner;