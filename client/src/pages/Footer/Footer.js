import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-row w-full h-96 justify-center"  style={{
            backgroundImage: "url('/Assets/images/common/bali-island.jpg')",
            objectPosition: "center",
        }}>
            <div className="w-2/6 h-full flex justify-center items-center bg-white">
                <Image src={"/Assets/images/Icons/Roving_Step_Logo_Footer.svg"}
                    width={200}
                    height={200}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-2/5 h-full pl-28 py-10 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Information</span>
                        <span className="text-white text-sm ">Home</span>
                        <span className="text-white text-sm ">Our Services</span>
                        <span className="text-white text-sm ">About Us</span>
                        <span className="text-white text-sm ">Contact Us</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Contact</span>
                        <span className="text-white text-sm ">
                            +91 8600031545 &nbsp;|&nbsp; +91 8600321645
                            <br />info@rovingsteps.com
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Address</span>
                        <span className="text-white text-sm ">
                            Sr No 31, 1st floor, Gosavi Building, Kundan nagar,
                            Dhankwadi, Pune -411043
                        </span>
                    </div>
                </div>
                <div className="w-3/5 h-full pl-28 py-10 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Helpfull Links</span>
                        <span className="text-white text-sm ">Tours</span>
                        <span className="text-white text-sm ">Support</span>
                        <span className="text-white text-sm ">Terms & Conditions</span>
                        <span className="text-white text-sm ">Privacy</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Drop a message for us!</span>
                        <input type="text" className="w-96 h-8 bg-white rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#ECA740] text-lg  mb-3">Follow us</span>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;