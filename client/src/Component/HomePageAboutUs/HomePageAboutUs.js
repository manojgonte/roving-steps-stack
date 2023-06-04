import Image from "next/image"

const HomePageAboutUs = () => {
    return (
        <div className="flex flex-row relative w-full h-[500px] bg-gradient-to-r px-16">
            <div className="w-2/4 flex justify-center">
                <div className="bg-white w-[216px] h-[187px] new-clip-polygon flex justify-center items-center absolute top-14">
                    <div className="w-[196px] h-[167px] new-clip-polygon">
                        <Image
                            src={"/Assets/images/common/Hexagone_3.jpg"}
                            className="w-full h-full"
                            fill
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                            alt="bg-image"
                        />
                    </div>
                </div>
                {/* //// Second Hex //// */}
                <div className="bg-white w-[322px] h-[304px] new-clip-polygon flex justify-center items-center absolute top-44 left-36">
                    <div className="w-[292px] h-[284px] new-clip-polygon">
                        <Image
                            src={"/Assets/images/common/Hexagone_1.jpg"}
                            className="w-full h-full "
                            fill
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                            alt="bg-image"
                        />
                    </div>
                </div>
                {/* //// Third Hex //// */}
                <div className="bg-white w-[216px] h-[187px] new-clip-polygon flex justify-center items-center absolute top-64 left-80">
                    <div className="w-[196px] h-[167px] new-clip-polygon">
                        <Image
                            src={"/Assets/images/common/Hexagone_2.jpg"}
                            className="w-full h-full"
                            fill
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "left",
                            }}
                            alt="bg-image"
                        />
                    </div>
                </div>
            </div>
            <div className="w-2/4 flex flex-col justify-center items-center gap-8">
                <div className="text-[#1B2C60] font-extrabold text-3xl ">About Us</div>
                <div className="text-[#1B2C60] font-normal text-sm text-center w-4/5">
                    <p className="mb-10">
                        {`Roving steps is formed with a strong passion of exploring different destinations. This is not just a company but a family which we are looking forward to create. We are here to Use our expert knowledge and a personalized touch to make sure reality exceeds your expectations. We get immense pleasure to see our guest satisfied and smiling because of our services.`}
                    </p>
                    <p>
                        {`We all experience moments which leave us stunned and which gives us Goosebumps and so much more that we cannot express when we travel to places we always wished for… Roving Steps takes the responsibility for fulfilling your desired dreams of Traveling!!`}
                    </p>
                </div>
                <div>
                    <button className="bg-[#ECBF40] hover:bg-[#ECA740] text-white w-28 h-8 rounded-md  text-sm drop-shadow-lg text-center">
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePageAboutUs;