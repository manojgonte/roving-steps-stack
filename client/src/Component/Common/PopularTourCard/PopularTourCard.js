import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const PopularTourCard = (props) => {
    const {
        img,
        name,
        stars,
        facility,
        cost,
        note,
        seeMore,
        button,
        path
    } = props.cardDetails;

    return (
        <div className="flex flex-col w-52 h-full gap-4 items-center">
            <div className="w-52 h-72 p-3 bg-white rounded-md ">
                <div className={`w-full h-full relative rounded-md overflow-hidden`}>
                    <Image
                        src={img}
                        fill
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            overflow: "hidden"
                        }}
                        alt="bg-image"
                    />
                </div>
            </div>
            <div className="px-1 items-center">
                <div className="flex flex-row items-center">
                    <div className=" font-bold text-lg pr-3">
                        {name}
                    </div>
                    {!seeMore && <div className=" font-normal text-sm">
                        5N/6D
                    </div>}
                </div>
                <div className="flex justify-start my-1">
                    <FaStar color="#eca740" size={15} />
                    <FaStar color="#eca740" size={15} />
                    <FaStar color="#eca740" size={15} />
                    <FaStarHalfAlt color="#eca740" size={15} />
                    <FaRegStar color="#eca740" size={15} />
                </div>
                {seeMore && <div className="flex flex-col h-8 text-xs overflow-ellipsis overflow-hidden line-clamp-3 ">
                    {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nulla voluptate nam placeat minus ducimus. Tenetur quasi, harum illum sapiente dolorem voluptas, praesentium commodi quisquam aliquam quas, voluptatum animi ullam!`}
                </div>}
                {!seeMore &&
                    <div className=" flex flex-col gap-3">
                        <div>
                            {stars} Stars
                        </div>
                        <div className="  font-extrabold text-xs">
                            4 Stay | Meal | Siteseeing | Private Transport | Visa
                        </div>
                        <div className="flex flex-col gap-0">
                            <span className="font-bold text-xs">Starting from</span>
                            <span className="font-bold text-lg text-[#2DAAE1]">{cost}</span>
                            <span className="text-[#C6C6C6] text-xs">{note}</span>
                        </div>
                    </div>
                }
                {seeMore && <div className=" text-[#27A5BF] text-xs"><Link href="/TourDetail">See more...</Link></div>}
                {button.enable && <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-24 h-7 rounded-md  text-xs drop-shadow-lg text-center my-2">
                    BOOK NOW
                </button>}
            </div>
        </div>
    )
}

export default PopularTourCard;