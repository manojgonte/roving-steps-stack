import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BASE_URL } from "../../../config";
import { useRouter } from "next/router";

export default function Register() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const signUp = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (name?.length < 3) {
            setErrorMessage("name should be more than 3 characters");
            return
        }

        let regexPhone = /^(0|91)?[6-9][0-9]{9}$/;
        if (!regexPhone.test(contact)) {
            setErrorMessage("Contact number is not valid");
            return
        }

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // Refrence: https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B)*%24%2F.
        if (!regexEmail.test(email)) {
            setErrorMessage("Email is not valid!");
            return
        }

        if (password?.length < 6) {
            setErrorMessage("password should be atleast 5 characters long");
            return
        }

        if (password !== confirmPassword) {
            setErrorMessage("Password & confirm password do not match");
            return
        }

        if (isTermsChecked === false) {
            setErrorMessage("Please agree to terms & messages");
            return
        }

        /// API call
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let user_data = {
            name: name,
            contact: contact,
            email: email,
            password: password,
            isTermsChecked: isTermsChecked
        };

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(user_data),
            redirect: 'follow'
        };
        const data = await fetch(`${BASE_URL}/registration`, requestOptions);
        const result = await data.json();

        if(result?.statusCode === 200 && result?.status === "success") {
            router.push("/Login")
        } else {
            console.log("Not able to register");
        }
    }

    return (
        <main className="flex min-h-screen flex-col">

            <section className="gradient-form h-full bg-[#aaa]">
                <div className="h-full">
                    <div className="g-10 flex h-full flex-wrap items-center justify-center text-neutral-800">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg">
                                <div className="g-0 lg:flex lg:flex-wrap">

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
                                                    alt="logo"
                                                    />
                                                </Link>
                                            </div>
                                            <p className="text-sm text-center text-white">
                                                {`Explore the huge world and enjoy it's beauty`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-4 md:px-0 lg:w-5/12 sm:6/12">
                                        <div className="md:mx-6 md:px-12 min-h-screen">

                                            <div className="justify-center md:mb-10">
                                                <Image
                                                    src={"/Assets/images/elements/get_started.png"}
                                                    width={200}
                                                    height={100}
                                                    className=""
                                                    alt="logo"
                                                />
                                            </div>

                                            <form onSubmit={signUp}>
                                                <div className="mb-2">
                                                    <div className="mb-3">
                                                        <label for="name" className="block text-sm text-gray-800" >Name *</label>
                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <div className="mb-3 mr-3 w-full">
                                                            <label for="contact" className="block text-sm text-gray-800" >Contact *</label>
                                                            <input type="" value={contact} onChange={(e) => setContact(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                        <div className="mb-3 w-full">
                                                            <label for="email" className="block text-sm text-gray-800" >Email *</label>
                                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label for="password" className="block text-sm text-gray-800">Password *</label>
                                                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label for="confirm-password" className="block text-sm text-gray-800">Confirm Password *</label>
                                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md" />
                                                    </div>
                                                </div>

                                                <div className="w-full text-red-600">
                                                    {errorMessage}
                                                </div>
                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button onClick={signUp} className="bg-[#ECBF40] w-full h-10 p-3 font-semibold flex items-center justify-center rounded-md text-white opacity-100 text-sm hover:shadow-lg">
                                                        SIGN UP
                                                    </button>
                                                    <div className="flex mt-2">
                                                        <input type="checkbox" className="ml-2" onClick={(e) => setIsTermsChecked(() => !isTermsChecked)} />
                                                        <div className="text-sm text-gray-800">&nbsp; I agree to <Link href="" className="text-[#ECBF40]">Terms of services</Link> and <Link href="" className="text-[#ECBF40]">Privacy Policy</Link></div>
                                                    </div>
                                                </div>


                                                <div className="flex items-center justify-start pb-6 text-sm">
                                                    <p className="mb-0 mr-2 text-gray-800">Already have an account?</p>
                                                    <Link href="/Login" className="text-[#ECBF40]">Sign In</Link>
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