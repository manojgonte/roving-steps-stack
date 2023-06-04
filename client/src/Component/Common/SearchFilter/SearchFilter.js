import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export default function SearchFilter() {
    return (
        <main>
            <div className="w-11/12 h-9">
                <div className="bg-white w-full h-full rounded-3xl flex items-center">
                    <div className="w-1/4 border-[#ECBF40] border-r-2 flex items-center rounded-l-3xl ml-2 pl-1 gap-1">
                        <Image
                            src={"/Assets/images/Icons/LocationDefault.svg"}
                            width={10}
                            height={10}
                            alt="locationIcon"
                        />
                        <input placeholder="Location" className="p-1 rounded-l-3xl w-full font-roboto text-sm focus:border-none" />
                    </div>
                    <div className="w-1/4 border-[#ECBF40] flex items-center rounded-l-3xl border-r-2 pl-1 gap-1">
                        <Image
                            src={"/Assets/images/Icons/AdultDefault.svg"}
                            width={15}
                            height={15}
                            alt="adultIcon"
                        />
                        <input placeholder="Adult" className="w-full p-1 font-roboto text-sm" />
                    </div>
                    <div className="w-1/4 border-[#ECBF40] flex items-center rounded-l-3xl border-r-2 pl-1 gap-1">
                        <Image
                            src={"/Assets/images/Icons/KidsDefault.svg"}
                            width={15}
                            height={15}
                            alt="kidsIcon"
                        />
                        <input placeholder="Kids" className="w-full p-1 font-roboto text-sm" />
                    </div>
                    <div className="w-1/4 h-full flex items-center pl-6 rounded-r-3xl hover:bg-[#ECBF40] hover:text-white">
                        <Image
                            src={"/Assets/images/Icons/Search.svg"}
                            width={15}
                            height={15}
                            alt="searchIcon"
                        />
                        <button className="text-[#C6C6C6] font-roboto text-sm p-1">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}