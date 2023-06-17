import Footer from "../Footer";
import Header from "../Header";
import Image from "next/image";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            {/* hero section */}
            <div className="text-center bg-gray-50 text-gray-800 mt-5 py-24 px-6 md:mt-14 shadow-lg" style={{
                backgroundImage: "url('/Assets/images/background/contact_bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h2 className="text-5xl md:text-5xl xl:text-5xl font-bold tracking-tight mb-12 text-white">Contact Us</h2>
            </div>

            {/* contact form and contact details */}
            <div className="px-6 bg-white py-10 relative z-10" style={{
                backgroundImage: "url('/Assets/images/elements/triangle_trans.png')",
                backgroundPosition:'top'
            }}>
                <section className="mb-15 text-white">

                    <div className="flex flex-wrap">
                        {/* contact form */}
                        <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                            <div className="flex justify-start">
                                <div className="text-center lg:max-w-3xl md:max-w-xl">
                                    <h2 className="text-3xl font-bold mb-12 text-[#1B2C60]">Keep in touch with us</h2>
                                </div>
                            </div>
                            <form>
                                <div className="mb-2">
                                    <div className="flex justify-between">
                                        <div className="mb-3 mr-3 w-full">
                                            <label for="name" className="block text-sm text-gray-800" >Name *</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" placeholder="Enter Full Name" />
                                        </div>
                                        <div className="mb-3 w-full">
                                            <label for="email" className="block text-sm text-gray-800" >Email *</label>
                                            <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" placeholder="Enter Email" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="mb-3 mr-3 w-full">
                                            <label for="contact" className="block text-sm text-gray-800" >Contact *</label>
                                            <input type="number" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" placeholder="Enter Phone number" />
                                        </div>
                                        <div className="mb-3 w-full">
                                            <label for="address" className="block text-sm text-gray-800" >Address *</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" placeholder="Enter Address" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="mb-3 mr-3 w-full">
                                            <label for="address" className="block text-sm text-gray-800" >Message *</label>
                                            <textarea name="message" rows={3} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" placeholder="Please leave a message for us"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 pb-1 pt-1 text-center">
                                    <button className="bg-[#ECBF40] h-10 p-3 flex items-center justify-center rounded-md text-white font-semibold opacity-100 text-sm hover:shadow-lg">
                                        SEND MESSAGE
                                    </button>
                                </div>

                            </form>
                        </div>
                        {/* contact details */}
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div className="flex justify-start">
                                <div className="text-center lg:max-w-3xl md:max-w-xl">
                                    <h2 className="text-3xl font-bold mb-12 px-6 text-[#1B2C60]">Contact us</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="mb-8 grow-0 shrink-0 basis-auto w-full lg:w-12/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-800">Address</p>
                                            <p className="text-gray-500">Sr. No. 31, 1st floor, Gosavi Building, Kundan Nagar, <br />Dhankawadi, Pune - 411043</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8 grow-0 shrink-0 basis-auto w-full lg:w-12/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-800">Contact Details</p>
                                            <p className="text-gray-500">+91 8600031545</p>
                                            <p className="text-gray-500">+91 8600321645</p>
                                            <p className="text-gray-500">info@rovingsteps.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-3/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="grow ml-4">
                                            <Image
                                                src={"/Assets/images/Icons/instagram.svg"}
                                                width={70}
                                                height={70}
                                                className=""
                                                alt="logo"
                                            />
                                        </div>
                                        <div className="grow ml-4">
                                            <Image
                                                src={"/Assets/images/Icons/linkedin.svg"}
                                                width={70}
                                                height={70}
                                                className=""
                                                alt="logo"
                                            />
                                        </div>
                                        <div className="grow ml-4">
                                            <Image
                                                src={"/Assets/images/Icons/facebook.svg"}
                                                width={70}
                                                height={70}
                                                className=""
                                                alt="logo"
                                            />
                                        </div>
                                        <div className="grow ml-4">
                                            <Image
                                                src={"/Assets/images/Icons/twitter.svg"}
                                                width={70}
                                                height={70}
                                                className=""
                                                alt="logo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}

            </div>

            <Footer />
        </main>
    )
}