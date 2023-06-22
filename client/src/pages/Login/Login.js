import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../config";

export default function Login() {
    const [email, setEmail] = useState('manoj@yopmail.com');
    const [password, setPassword] = useState('manoj@123');
    const router = useRouter();
    
    const signIn = async (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password
        }
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        const data = await fetch(`${BASE_URL}/login`, requestOptions);
        const result = await data.json();
        console.warn(result);
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            router.push("/")
        } else {
            console.log("something went wrong");
        }
    }

    return (
        <main className="flex min-h-screen flex-col">

            <section className="gradient-form h-full bg-[#aaa]">
                <div className="h-full">
                    <div className="g-10 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg">
                                <div className="g-0 flex lg:flex lg:flex-wrap">

                                    <div className="min-h-screen lg:w-5/12 sm:5/12 flex items-center justify-center"
                                        style={{
                                            backgroundImage: "url('/Assets/images/register.jpg')",
                                            backgroundSize: 'cover'
                                        }} >
                                        <div className="px-4 py-6 md:mx-6 md:p-12">
                                            <div className="justify-center">
                                                <Link href="/">
                                                    <Image  
                                                    src={"/Assets/images/Logo/Roving Steps Logo white.png"} 
                                                    height={150}
                                                    width={300}
                                                    alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <p className="text-sm text-center text-white">
                                                {`Explore the huge world and enjoy it's beauty`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-4 md:px-0 lg:w-5/12 sm:6/12">
                                        <div className="md:mx-6 md:px-12 min-h-screen items-center">

                                            <div className="justify-center md:mb-10">
                                                <Image
                                                    src={"/Assets/images/elements/welcome_back.png"}
                                                    width={200}
                                                    height={100}
                                                    className=""
                                                    alt="sign in"
                                                />
                                            </div>

                                            <form>
                                                <div className="mb-2">
                                                    <div className="mb-3">
                                                        <label className="block text-sm font-normal text-gray-800" >Email *</label>
                                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-[#1B2C60] bg-white border rounded-md" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="block text-sm font-normal text-gray-800">Password *</label>
                                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-[#1B2C60] bg-white border rounded-md" />
                                                    </div>
                                                    
                                                    <div className="mb-3">
                                                        <Link href="/" className="text-[#1B2C60] text-sm">Forgot Password?</Link>
                                                    </div>
                                                </div>

                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button onClick={signIn} className="bg-[#ECBF40] w-full h-10 p-3 flex items-center justify-center rounded-md text-white font-semibold opacity-100 text-sm hover:shadow-lg">
                                                        SIGN IN
                                                    </button>
                                                    {/* <div className="flex mt-2">
                                                        <input type="checkbox" className="ml-2" />
                                                        <div className="text-sm text-[#1B2C60]">&nbsp; I agree to <Link href="" className="text-[#ECBF40]">Terms of services</Link> and <Link href="" className="text-[#ECBF40]">Privacy Policy</Link></div>
                                                    </div> */}
                                                </div>

                                                <div className="flex items-center justify-start pb-6 text-sm">
                                                    <p className="mb-0 mr-2 text-[#1B2C60]">{`Don't have an account yet?`}</p>
                                                    <Link href="/Register" className="text-[#ECBF40]">Sign Up</Link>
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