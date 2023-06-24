import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";
import Filters from "@/Component/Filter/Filter";
import Card from "@/Component/Common/CardComponents/Card";
import SearchFilter from "@/Component/Common/SearchFilter/SearchFilter";
import { useEffect, useState } from "react";
import { getDestinationList, getFilterTourList, getTourList } from "@/Services/commonServices";
import PopularTourCard from "@/Component/Common/PopularTourCard";

export default function Tours() {

    const [domesticList, setDomesticList] = useState([]);
    const [i18nList, setI18nList] = useState([]);
    const [popularDestinations, setPopularDestinations] = useState([]);
    const [tourPackages, setTourPackages] = useState([]);
    const [selectedDomesticItems, setSelectedDomesticItems] = useState([]);
    const [selectedI18nItems, setSelected18nItems] = useState([]);
    const [selectedSTItems, setSelectedSTItems] = useState([]);

    const handleDomesticItemClick = (item) => {
        setSelectedSTItems([]);
        setSelected18nItems([]);
        if (selectedDomesticItems.includes(item)) {
            // Item is already selected, remove it from the array
            setSelectedDomesticItems(selectedDomesticItems.filter((selectedItem) => selectedItem !== item));
        } else {
            // Item is not selected, add it to the array
            setSelectedDomesticItems([...selectedDomesticItems, item]);
        }
    };

    const handleI18nItemClick = (item) => {
        setSelectedDomesticItems([]);
        setSelectedSTItems([]);
        // Check if the item is already selected
        if (selectedI18nItems.includes(item)) {
            // Item is already selected, remove it from the array
            setSelected18nItems(selectedI18nItems.filter((selectedItem) => selectedItem !== item));
        } else {
            // Item is not selected, add it to the array
            setSelected18nItems([...selectedI18nItems, item]);
        }
    };

    const handleSpecialItemClick = (item) => {
        setSelectedDomesticItems([]);
        setSelected18nItems([]);
        // Check if the item is already selected
        if (selectedSTItems.includes(item)) {
            // Item is already selected, remove it from the array
            setSelectedSTItems(selectedSTItems.filter((selectedItem) => selectedItem !== item));
        } else {
            // Item is not selected, add it to the array
            setSelectedSTItems([...selectedSTItems, item]);
        }
    };

    const getList = async () => {
        const list = await getDestinationList();
        setDomesticList(list?.domestic);
        setI18nList(list?.international);
    }

    const tourListFun = async () => {
        const tourList = await getTourList();
        setPopularDestinations(tourList?.popDest);
        setTourPackages(tourList?.tourPackage);
    }

    useEffect(() => {
        getList();
        tourListFun();
    }, []);

    const filterList = async (filterList) => {
        const tourList = await getFilterTourList(filterList);
        setPopularDestinations(tourList?.popDest);
        setTourPackages(tourList?.tourPackage);
    }

    useEffect(() => {
        var filterOptions = {};
        if(selectedDomesticItems.length > 0) filterOptions = { list: selectedDomesticItems, type: "domestic" };
        if(selectedI18nItems.length > 0) filterOptions = { list: selectedI18nItems, type: "international" };
        if(selectedSTItems?.length > 0) filterOptions = { list: selectedSTItems, type: "special" };

        if (filterOptions?.list?.length > 0) {
            filterList(filterOptions)
        }
    }, [
        selectedDomesticItems,
        selectedI18nItems,
        selectedSTItems
    ])


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
                            {domesticList?.length + i18nList?.length} Tour Options
                        </button>
                    </div>
                    {/* Filter Section */}
                    <Filters
                        title="Domestic Tours"
                        TourList={domesticList}
                        handleItemClick={handleDomesticItemClick}
                        selectedItems={selectedDomesticItems}
                    />
                    <Filters
                        title="International Tours"
                        TourList={i18nList}
                        handleItemClick={handleI18nItemClick}
                        selectedItems={selectedI18nItems}
                    />
                    <Filters
                        title="Special Tours"
                        TourList={i18nList}
                        handleItemClick={handleSpecialItemClick}
                        selectedItems={selectedSTItems}
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
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        popularDestinations?.length > 0 ?
                                            popularDestinations.map((data, index) => <Card key={index} cardDetails={data} />) :
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
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        tourPackages?.length > 0 ?
                                            tourPackages?.map((data, index) => <PopularTourCard key={index} cardDetails={data} />) :
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