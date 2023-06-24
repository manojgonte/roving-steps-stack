import Image from "next/image";
import Link from "next/link";
import Ratings from "../Ratings/"

const PopularTourCard = (props) => {
    const {
        id,
        img,
        name,
        stars,
        facility,
        cost,
        note,
        seeMore,
        button,
        path,
        days,
        nights
    } = props.cardDetails;

    return (
        <div className="flex flex-col w-52 h-full gap-4 items-center">
            <Link href={'/TourDetail/' + id}>
                <div className="w-52 h-72 p-3 bg-white rounded-md ">
                    <div className={`w-full h-full relative rounded-md overflow-hidden`}>
                        <Image
                            src={"/Assets/images/common/Hexagone_1.jpg"}
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
                        <div className=" font-bold text-lg pr-3 text-black">
                            {name}
                        </div>
                        {!seeMore && <div className=" font-normal text-sm text-black">
                            {nights}N/{days}D
                        </div>}
                    </div>
                    <div className="flex justify-start my-1">
                        {<Ratings ratings={5} />}
                    </div>
                    {seeMore && <div className="flex flex-col h-8 text-xs overflow-ellipsis overflow-hidden line-clamp-3 text-black">
                        {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nulla voluptate nam placeat minus ducimus. Tenetur quasi, harum illum sapiente dolorem voluptas, praesentium commodi quisquam aliquam quas, voluptatum animi ullam!`}
                    </div>}
                    {!seeMore &&
                        <div className=" flex flex-col gap-3 text-black">
                            <div>
                                {stars} Stars
                            </div>
                            <div className="  font-extrabold text-xs">
                                4 Stay | Meal | Siteseeing | Private Transport | Visa
                            </div>
                            <div className="flex flex-col gap-0">
                                <span className="font-bold text-xs">Starting from</span>
                                <span className="font-bold text-lg text-[#2DAAE1]">{cost}</span>
                                <span className="text-[#C6C6C6] text-xs h-10 overflow-hidden">{note}</span>
                            </div>
                        </div>
                    }
                    {seeMore && <div className=" text-[#27A5BF] text-xs"><Link href="/TourDetail">See more...</Link></div>}
                    {false && button.enable && <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-24 h-7 rounded-md  text-xs drop-shadow-lg text-center my-2">
                        BOOK NOW
                    </button>}
                </div>
            </Link>
        </div>
    )
}

export default PopularTourCard;