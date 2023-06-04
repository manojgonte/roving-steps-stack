import Image from "next/image";

const TestimonialCard = () => {
    return (
        <div className="w-56 h-60 flex flex-col items-center">
            <div className="w-24 h-24 p-2 overflow-hidden">
                <Image src={"/Assets/images/common/Hexagone_2.jpg"} width={100} height={100} className="rounded-full w-full h-full object-fill" alt="" />
            </div>
            <div className="flex justify-center items-center w-full h-7">
                <span className="text-[#ECA740]  text-sm">
                    Lorem Ipsum
                </span>
            </div>
            <div className="text-center w-full h-7">
                <span className="text-[#6B6B6B]  text-sm">
                {`Lorem ipsum dolor sit amet. Ea magnam dolorum est totam quia aut perferendis cumque. Ea dolor similique sit illo temporibus ea pariatur`}
                </span>
            </div>
        </div>
    )
}

export default TestimonialCard;