import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BASE_URL } from "@/config";

export default function EnquiryModal({closeModal}) {
    const router = useRouter();
    
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [touristCount, setTouristCount] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    
    const EnquireSubmit = async (e) => {
        e.preventDefault();

        e.preventDefault();
        setErrorMessage("");

        if (name?.length < 3) {
            setErrorMessage("Name should be more than 3 characters");
            return
        }

        if (!fromDate || !endDate) {
            setErrorMessage("Please enter travel dates");
            return
        }

        if (!currentCity) {
            setErrorMessage("Please enter valid number");
            return
        }

        if (!touristCount && touristCount?.touristCount < 0) {
            setErrorMessage("Please enter valid number");
            return
        }

        let regexPhone = /^(0|91)?[6-9][0-9]{9}$/;
        if (!regexPhone.test(contact)) {
            setErrorMessage("Please enter valid 10 digit contact no.");
            return
        }

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // Refrence: https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B)*%24%2F.
        if (!regexEmail.test(email)) {
            setErrorMessage("Please enter valid email");
            return
        }

        let body = { name:name, contact:contact, email:email, tourist_count:touristCount, current_city:currentCity, from_date:fromDate, end_date:endDate, message:message };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        const data = await fetch(`${BASE_URL}/tour/enquiry`, requestOptions);
        const result = await data.json();
        console.warn(result);

        if(result?.statusCode === 200 && result?.status === "success") {
            router.push("/")
        } else {
            console.log("error");
        }
    }

    return (
        <main className="flex flex-col">

            <section className="gradient-form bg-[#aaa]">
                <div className="">
                    <div className="g-10 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg">
                                <div className="g-0 flex lg:flex lg:flex-wrap">

                                    <div className="lg:w-6/12 sm:6/12 flex items-center justify-center bg-[#1B2C60]">
                                        <div className="px-4 py-6 md:mx-6 md:p-12">
                                            <div className="justify-center">
                                                <Link href="/">
                                                    <Image  
                                                    src={"/Assets/images/elements/need_help.png"} 
                                                    height={150}
                                                    width={300}
                                                    alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <p className="text-sm text-center text-white">
                                                {`Will Help you to Plan your Dream Holidays`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-2 md:px-0 lg:w-6/12 sm:6/12">
                                        <div className="md:mx-3 md:px-3 py-4 items-center">
                                            <div className="w-full text-red-600">
                                                {errorMessage}
                                            </div>
                                            <form>
                                                <div className="mb-2">
                                                    <div className="mb-3">
                                                        <label className="block text-sm text-gray-800" >Name *</label>
                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <div className="mb-3 mr-3 w-full">
                                                            <label className="block text-sm text-gray-800" >Contact No. *</label>
                                                            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                        <div className="mb-3 w-full">
                                                            <label className="block text-sm text-gray-800" >Email *</label>
                                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <div className="mb-3 mr-3 w-full">
                                                            <label className="block text-sm text-gray-800" >No. of Tourist *</label>
                                                            <input type="number" value={touristCount} onChange={(e) => setTouristCount(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                        <div className="mb-3 w-full">
                                                            <label className="block text-sm text-gray-800" >Current City *</label>
                                                            <input type="email" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <div className="mb-3 mr-3 w-full">
                                                            <label className="block text-sm text-gray-800" >Travel From Date *</label>
                                                            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                        <div className="mb-3 w-full">
                                                            <label className="block text-sm text-gray-800" >Travel To Date *</label>
                                                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="block text-sm font-normal text-gray-800">Message *</label>
                                                        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"></textarea>
                                                    </div>
                                                </div>

                                                <div className="mb-12 pb-1 pt-1 text-center flex">
                                                    <button onClick={EnquireSubmit} className="bg-[#ECBF40] w-full h-10 p-3 flex items-center justify-center rounded-md text-white font-semibold opacity-100 text-sm hover:shadow-lg">
                                                        Enquire
                                                    </button>
                                                    <button type="button" className="bg-gray-600 hover:bg-gray-200 text-white font-semibold py-2 px-4 ml-2 rounded" onClick={()=>closeModal()}>Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}