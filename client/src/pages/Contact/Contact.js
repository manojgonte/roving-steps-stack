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
                                            <label for="name" className="block text-sm font-semibold text-gray-800" >Name *</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                        </div>
                                        <div className="mb-3 w-full">
                                            <label for="email" className="block text-sm font-semibold text-gray-800" >Email *</label>
                                            <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="mb-3 mr-3 w-full">
                                            <label for="contact" className="block text-sm font-semibold text-gray-800" >Contact *</label>
                                            <input type="number" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                        </div>
                                        <div className="mb-3 w-full">
                                            <label for="address" className="block text-sm font-semibold text-gray-800" >Address *</label>
                                            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="mb-3 mr-3 w-full">
                                            <label for="address" className="block text-sm font-semibold text-gray-800" >Message *</label>
                                            <textarea name="message" rows={3} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 pb-1 pt-1 text-center">
                                    <button className="bg-[#ECBF40] h-10 p-3 flex items-center justify-center rounded-md  font-normal opacity-100 text-sm hover:shadow-lg">
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
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-[#1B2C60] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-500">Address</p>
                                            <p className="text-gray-500">Sr. No. 31, 1st floor, Gosavi Building, Kundan Nagar, Dhankawadi, Pune - 411043</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-[#1B2C60] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                                                    className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                                                    <path fill="currentColor"
                                                        d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-500">Phone</p>
                                            <p className="text-gray-500">+91 8600031545</p>
                                            <p className="text-gray-500">+91 8600321645</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-[#1B2C60] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                                                    className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor"
                                                        d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-500">Email Address</p>
                                            <p className="text-gray-500">info@rovingsteps.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-[#1B2C60] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                                                    className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor"
                                                        d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1 text-gray-500">Follow Us On</p>
                                            <p className="text-gray-500"></p>
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