import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import TourDay from "@/Component/TourDay";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SearchFilter from "@/Component/Common/SearchFilter/SearchFilter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import EnquiryModal from "@/Component/EnquiryModal";
import Ratings from "../../Component/Common/Ratings";
import { getTourDetails } from "@/Services/commonServices";

export default function TourDetail() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const router = useRouter();

    const [tourDetail, setTourDetail] = useState({});

    const getDetails = async (id) => {
        const data = await getTourDetails(id);
        if (data) {
            setTourDetail(data);
        } else {
            setTourDetail({
                basicTour: data,
                itinerary: []
            })
        }
    }

    console.log(tourDetail)
    useEffect(() => {
        getDetails(router?.query?.TourID)
    }, [router?.query?.TourID]);

    const showList = (paragraph, type) => {
        console.log(paragraph, type);
        const lines = paragraph?.split('\n');
        return (
            <ul>
                {lines?.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        );
    }

    return (
        <main className="bg-white" style={{ backgroundImage: 'url(/Assets/images/elements/bg_element.png)', backgroundPosition: 'center' }}>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="modal w-8/12 p-0"
                overlayClassName="overlay" >
                <EnquiryModal closeModal={closeModal} />
            </Modal>

            <Header />
            <div className="flex flex-col relative w-full h-[350px] justify-center items-center gap-8 bg-scroll banner-image px-16">
                <Image
                    src={"/Assets/images/background/tour_detail_bg.jpg"}
                    fill
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    alt="bg-image"
                />
                <div className="z-10 flex flex-col relative w-full h-full justify-center items-center gap-8">
                    <div className="w-full text-center">
                        <span className="text-4xl  text-white font-bold">
                            Tours
                        </span>
                    </div>
                    <SearchFilter />
                </div>
            </div>

            <div className="container w-full px-28 pt-4 relative">
                <div>
                    <nav className="w-full rounded-md">
                        <ol className="list-reset flex text-sm">
                            <li>
                                <div className="text-[#6b6b6b] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Tours</div>
                            </li>
                            <li><span className="mx-2 text-neutral-500">/</span></li>
                            <li>
                                <div href="#" className="text-[#6b6b6b] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">{tourDetail?.destination}</div>
                            </li>
                            <li><span className="mx-2 text-neutral-500 ">/</span></li>
                            <li className="text-[#6b6b6b]">{tourDetail?.basicTour?.name}</li>
                        </ol>
                    </nav>
                    <h2 className="text-[#1b2c60] text-2xl font-bold">{tourDetail?.basicTour?.name}</h2>
                </div>

                <div className="my-1">
                    <Swiper
                        modules={[Navigation, Scrollbar, Autoplay]}
                        spaceBetween={50}
                        // navigation
                        autoplay={{
                            delay: 2500,
                        }}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                    >
                        <div className="slanted text-xl font-bold absolute z-50 left-3 bottom-14 w-10 flex bg-[#df1e1e]">
                            <div className="flex h-screen justify-center items-center">
                                <div className="text-left font-bold">
                                    <div className="block text-white">INR {tourDetail?.basicTour?.adult_price} /- </div>
                                    <div className="block text-sm text-white">Per Person</div>
                                </div>
                            </div>
                        </div>

                        <div className="slanted-left text-xl justify-end font-bold absolute z-50 right-3 top-14 w-10 flex bg-[#df1e1e]">
                            <div className="flex h-screen justify-center items-center">
                                <div className="text-left font-bold">
                                    <div className="block text-white">{tourDetail?.basicTour?.days}D/{tourDetail?.basicTour?.nights}N</div>
                                </div>
                            </div>
                        </div>

                        <SwiperSlide>
                            <Image
                                src={"/Assets/images/Banner/tour_slider.jpg"}
                                width={1200} height={400}
                                className="w-full rounded-3xl p-3 shadow-md bg-white my-5"
                                alt="image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/Assets/images/Banner/tour_slider.jpg"}
                                width={1200} height={400}
                                className="w-full object-fill rounded-3xl p-3 shadow-md bg-white my-5"
                                alt="image"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="w-full h-full flex flex-row my-8">
                    <div className="w-8/12 flex flex-col gap-4">
                        <div className="w-full justify-start items-center">
                            <h5 className="text-[#6b6b6b] font-bold text-xl mb-2">Overview</h5>
                            <p className="text-[#6b6b6b] pr-4">
                                {tourDetail?.basicTour?.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 px-4 flex gap-4 justify-start align-bottom items-end border-l-2 border-[#dbdbdb]">
                        <div className="align-bottom">
                            {<Ratings ratings={5} />}
                            <div className="text-sm text-[#000] mt-2">4 Stay | Meal | Siteseeing | Private Transport | Visa</div>
                            <div className="flex justify-start mt-5">
                                <button onClick={openModal} className="bg-[#c6c6c6] hover:bg-[#6b6b6b] w-full h-10 p-3 flex items-center justify-center rounded-md  font-normal opacity-100 text-xs hover:shadow-lg">
                                    ENQUIRE</button>
                                <button className="bg-[#ECBF40] hover:bg-[#eca740] ml-3 w-full h-10 p-3 flex items-center justify-center rounded-md  font-normal opacity-100 text-xs hover:shadow-lg">
                                    BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slanted text-xl font-bold flex bg-[#1b2c60]">Itinerary</div>

                {
                    tourDetail?.itinerary?.length > 0 ?
                        tourDetail?.itinerary?.map((data, index) => <TourDay key={index} TourDays={data} />) :
                        <div className="my-8 border-b-2 text-black">No itineraries available for this tour</div>
                }

                <div className="w-full h-full flex flex-row my-8">
                    <div className="w-5/12 pr-4 flex gap-4 justify-start align-start items-start border-r-2 border-[#dbdbdb]">
                        <div>
                            <h4 className="text-[#6b6b6b] text-xl font-bold">Inclusions:</h4>
                            {/* <ul className="text-[#6b6b6b] mt-5 list-item list-disc ml-3"> */}
                            <div className="text-[#6b6b6b] mt-5 ml-3">
                                {showList(tourDetail?.basicTour?.inclusions, "inclusions")}
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 flex flex-col gap-4 px-4">
                        <div>
                            <h4 className="text-[#6b6b6b] text-xl font-bold">Exclusions:</h4>
                            <div className="text-[#6b6b6b] mt-5 ml-3">
                            {showList(tourDetail?.basicTour?.exclusions, "exclusions")}
                            </div>                            
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    )
}