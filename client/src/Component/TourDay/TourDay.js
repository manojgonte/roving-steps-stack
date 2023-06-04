import Image from "next/image";
import { FaBed, FaChild, FaUtensils } from "react-icons/fa";

const TourDay = (props) => {
    const {
        img,
        title,
        desc,
        activity,
        stay,
        food
    } = props.TourDays;
    return (
        <div className="my-8 border-b-2">
            <h4 className="text-[#6b6b6b] text-xl font-bold">{title}</h4>
            <div className="w-full h-full flex flex-row my-4">
                <div className="w-8/12 flex flex-row gap-4 pr-4">
                    <Image src={"/Assets/images/common/Banner_a.jpeg"}
                        width={100} height={100}
                        className="w-full h-full object-fill rounded-3xl p-3 shadow-md bg-white" 
                        alt="image" 
                    />
                    <div className="text-black text-sm">
                        {desc}
                    </div>
                </div>
                <div className="w-1/4 px-4 flex flex-col gap-4 justify-start align-bottom items-start border-l-2 border-[#dbdbdb]">
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <div className="object-fill rounded-3xl p-3 shadow-md bg-[#E2E2E2]">
                                <FaChild color="#fff" size={25} />
                            </div>
                            <div className="flex flex-col justify-center items-start pl-3">
                                <h5 className="text-black font-bold">Activity</h5>
                                <h6 className="text-black text-sm">{activity}</h6>
                            </div>
                        </div>
                        <div className="flex">
                             <div className="object-fill rounded-3xl p-3 shadow-md bg-[#E2E2E2]">
                                <FaBed color="#fff" size={25} />
                            </div>
                            <div className="flex flex-col justify-center items-start pl-3">
                                <h5 className="text-black font-bold">Stay</h5>
                                <h6 className="text-black text-sm">{stay}</h6>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="object-fill rounded-3xl p-3 shadow-md bg-[#E2E2E2]">
                                <FaUtensils color="#fff" size={25} />
                            </div>
                            <div className="flex flex-col justify-center items-start pl-3">
                                <h5 className="text-black font-bold">Food</h5>
                                <h6 className="text-black text-sm">{food}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDay;