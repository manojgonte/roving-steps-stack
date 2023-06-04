import React from 'react'
import Header from '../Header'
import Image from 'next/image'
import Footer from '../Footer'
import SearchFilter from '@/Component/Common/SearchFilter/SearchFilter'

export default function Gallery() {
    return (
        <main className="bg-white" style={{backgroundImage:'url(Assets/images/elements/bg_element.png)', backgroundPosition:'center'}}>
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
                            Gallery
                        </span>
                    </div>
                    <SearchFilter />
                </div>
            </div>

            <div className="px-16 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg object-cover" src="/Assets/images/gallery/image1.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg object-cover" src="/Assets/images/gallery/image2.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg object-cover" src="/Assets/images/gallery/image3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image4.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image5.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image7.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image8.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image9.jpg" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image10.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image11.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/Assets/images/gallery/image12.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid'>
                <div className='border border-black'>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div></div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='border border-black'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
