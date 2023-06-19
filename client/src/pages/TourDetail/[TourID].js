import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
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
import { BASE_URL } from "@/config";
import EnquiryModal from "@/Component/EnquiryModal";

export default function TourDetail() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const TourDays = [
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 1: Arriving in Dubai",
            desc: "Welcome to Dubai!!! A land full of surprises and a complete destination. Dubai offers an extensive horizon of things to do, see, experience and learn. It is surrounded by mysterious deserts, sand dunes and within the city you will find amazing beach resorts, incredibly high tech buildings with old traditional houses and mosques. Upon arrival at the airport, you will be transferred to your hotel. And later in the evening will be proceed to Dhow cruise. Overnight at the hotel in Dubai",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        },
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 2: Dubai City tour with Burj Khalifa",
            desc: "Today after breakfast enjoy the city tour of Dubai. Visit Palm Island, take a photo at the famous iconic Burj Al Arab, see Dubai Marina Skylines. Drive to Dubai Creek, Jumeirah Mosque, Burj Al Arab (Photo Stop), Atlantis the Palm, Burj Khalifa (No entrance), Dubai Mall, Jumeirah Beach, Shaikh Zayed Road. Later proceed to 124th Floor – At the Top Burj Khalifa. Overnight at the hotel in Dubai.",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        },
        {
            img: "/Assets/images/common/Banner_a.jpg",
            title: "Day 3: Abu Dhabi - City tour with Ferrari World",
            desc: "Today after breakfast proceed to Abu dhabi. Visit Sheikh Zayed Grand Mosque - This architectural work of art is one of the world largest mosques, with a capacity for an astonishing 41,000 worshipers. Later visit the world most famous Ferrari Park. Overnight at the hotel in Dubai.",
            activity: "Hotel Name",
            stay: "Hotel Name",
            food: "Breakfast | Lunch | Dinner",
        }
    ];
    const router = useRouter();

    const [tourDetail, setTourDetail] = useState();

    const tourDetails = async (id) => {
        console.log(id)
        try {
            let result = await fetch(`${BASE_URL}/tour/get/id/${id}`);
        result = await result.json();
            setTourDetail(result.data[0]); 
        } catch (error) {
            console.error("An error occurred:", error);
        }
        // console.log(data);
    }

    useEffect(() => {
      tourDetails(router?.query?.TourID)
    }, [router?.query?.TourID]);
    
    return (
        <main className="bg-white" style={{backgroundImage:'url(/Assets/images/elements/bg_element.png)', backgroundPosition:'center'}}>

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
                            <li className="text-[#6b6b6b]">{tourDetail?.name}</li>
                        </ol>
                    </nav>                    
                    <h2 className="text-[#1b2c60] text-2xl font-bold">{tourDetail?.name}</h2>
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
                                    <div className="block text-white">INR {tourDetail?.adult_price} /- </div>
                                    <div className="block text-sm text-white">Per Person</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="slanted-left text-xl justify-end font-bold absolute z-50 right-3 top-14 w-10 flex bg-[#df1e1e]">
                            <div className="flex h-screen justify-center items-center">
                                <div className="text-left font-bold">
                                    <div className="block text-white">{tourDetail?.days}D/{tourDetail?.nights}N</div>
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
                                {tourDetail?.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 px-4 flex gap-4 justify-start align-bottom items-end border-l-2 border-[#dbdbdb]">
                        <div className="align-bottom">
                            <div className="flex justify-start">
                                <FaStar color="#eca740" size={20} />
                                <FaStar color="#eca740" size={20} />
                                <FaStar color="#eca740" size={20} />
                                <FaStarHalfAlt color="#eca740" size={20} />
                                <FaRegStar color="#eca740" size={20} />
                            </div>
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
                    TourDays.map((data, index) => <TourDay key={index} TourDays={data} /> )                    
                }

                <div className="w-full h-full flex flex-row my-8">
                    <div className="w-5/12 pr-4 flex gap-4 justify-start align-start items-start border-r-2 border-[#dbdbdb]">
                        <div>
                            <h4 className="text-[#6b6b6b] text-xl font-bold">Inclusions:</h4>
                            <ul className="text-[#6b6b6b] mt-5 list-item list-disc ml-3">
                                <li>Ex-Mumbai Airfare </li>
                                <li>5 nights accommodation in 3+ property </li>
                                <li>5 Breakfast and 2 Dinner </li>
                                <li>Dhow Dinner Cruise </li>
                                <li>Dubai city tour </li>
                                <li>Burj Khalifa 124th Floor with Dubai Mall and Fountain Show </li>
                                <li>Abu Dhabi city tour with Ferrari World </li>
                                <li>Desert Safari with BBQ Dinner </li>
                                <li>Global Village and Miracle Garden </li>
                                <li>All tours and transfers on SIC basis</li>
                                <li>Airport Transfers on PVT Basis </li>
                                <li>Visa </li>
                                <li>Insurance upto 60 years</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-7/12 flex flex-col gap-4 px-4">
                        <div>
                            <h4 className="text-[#6b6b6b] text-xl font-bold">Exclusions:</h4>
                            <ul className="text-[#6b6b6b] mt-5 list-item list-disc ml-3">
                            <li>Tips and porter charges </li>
                            <li>Cost of any excursions not included in the package </li>
                            <li>Early check in and late check out will be as per hotel policy and availability. (Extra charges may be applicable)</li>
                            <li>Items of any personal nature such as phone calls, pay movies, room services, mini bars, laundries or other expenditures during the tour</li>
                            <li>Tours can be cancelled or postponed without prior notice in case of any natural calamities</li>
                            <li>SIC means seat in coach basis. Drivers would communicate with the guests if there is any change in assigned pick up time</li>
                            <li>If guests fails to reach within the time arranged , there will be no replacement given. Any other services not specified above </li>
                            <li>Note :- Ø Please note that As per DTCM Rules, based on the Executive Council Resolution No 2 of 2014. With effective 31 March 2014, Every Guest has to pay Tourism Dirham that is AED 7/- per room per night for all 2* hotels, AED 10/- per room per night for all 3* Hotels, AED 15/- per room per night for all 4 * And AED 20/- per room per night for all 5* Hotels, at the time of check in.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    )
}