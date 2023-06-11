import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import Filters from "@/Component/Filter/Filter";
import Card from "@/Component/Common/CardComponents/Card";
import SearchFilter from "@/Component/Common/SearchFilter/SearchFilter";
import { useEffect, useState } from "react";
import { getDestinationList, getTourList } from "@/Services/commonServices";

export default function Tours() {

    const [domesticList, setDomesticList] = useState([]);
    const [i18nList, setI18nList] = useState([]);
    const [popularDestinations, setPopularDestinations] = useState([]);
    const [tourPackages, setTourPackages] = useState([]);
    const [selectDestArr, setSelectDestArr] = useState(['Andaman', 'UK']);

    const getList = async () => {
        const list = await getDestinationList();
        setDomesticList(list?.domestic);
        setI18nList(list?.international);
    }

    const tourList = async () => {
        const tourList = await getTourList();
        setPopularDestinations(tourList?.popDest);
        setTourPackages(tourList?.tourPackage);
    }

    useEffect(() => {
        getList();
        tourList();
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
    ];

    const cardsTour = [
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
                enable: true
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
                enable: true
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
                enable: true
            }
        }
    ];

    const handleChecked = (value, name) => {
        setTourPackages(() => tourPackages?.filter(tour => tour?.name === name));
        setPopularDestinations(() => popularDestinations?.filter(tour => tour?.name === name))
    }

    return (
        <main className="bg-gradient-to-l from-cyan-200 to-white">
            <Header />
            <div className="flex flex-col relative w-full h-[350px] justify-center items-center gap-8 bg-scroll banner-image px-16">
                <Image
                    src={"/Assets/images/common/Banner_a.jpeg"}
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
            <div className="w-full px-28 pt-4 h-full flex flex-row">
                <div className="w-1/4 p-4 flex flex-col gap-4">
                    <div className="w-full flex justify-end items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            320 Tour Options
                        </button>
                    </div>
                    {/* Filter Section */}
                    <Filters
                        title="Domestic Tours"
                        TourList={domesticList}
                        // handleChecked={handleChecked}
                    />
                    <Filters
                        title="International Tours"
                        TourList={i18nList}
                        // handleChecked={handleChecked}
                    />
                    <Filters
                        title="Special Tours"
                        TourList={i18nList}
                        // handleChecked={handleChecked}
                    />
                </div>
                <div className="w-9/12 p-4 flex flex-col gap-4">
                    <div className="w-full flex justify-start items-center">
                        <div className="relative text-gray-600 focus-within:text-gray-400 border border-[#C6C6C6] rounded-md">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                            <input type="search" name="sub-search" className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
                        </div>
                    </div>
                    {/* Tour Card Section */}
                    <div className="flex flex-col gap-8">
                        <div className="">
                            <div className="h-14">
                                <span className="text-2xl  font-medium text-black">Popular Destinations</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row justify-between">
                                    {
                                        tourPackages?.length > 0 ?
                                            tourPackages.map((data, index) => <Card key={index} cardDetails={data} />) :
                                            (
                                                <div className="font-bold text-lg text-black">
                                                    No Destinations available
                                                </div>
                                            )
                                    }
                                </div>
                                <div className="flex flex-row justify-between">
                                    {
                                        popularDestinations?.length > 0 ?
                                            popularDestinations?.map((data, index) => <Card key={index} cardDetails={data} />) :
                                            (
                                                <div className="font-bold text-lg text-black">
                                                    No Destinations available
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="h-14">
                                <span className="text-2xl  font-medium text-black">Popular Tour Packages</span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row justify-between">
                                    {
                                        tourPackages?.length > 0 ?
                                            tourPackages?.map((data, index) => <Card key={index} cardDetails={data} />) :
                                            (
                                                <div className="font-bold text-lg text-black">
                                                    No Destinations available
                                                </div>
                                            )
                                    }
                                </div>
                                <div className="flex flex-row justify-between">
                                    {
                                        tourPackages?.length > 0 ?
                                            tourPackages?.map((data, index) => <Card key={index} cardDetails={data} />) :
                                            (
                                                <div className="font-bold text-lg text-black">
                                                    No Destinations available
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}