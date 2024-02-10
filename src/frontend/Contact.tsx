import React from 'react';
import Header from './Header/Header';
import Footer from './footer/footer';
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";



const Contact = () => {
    return (
        <>
            <Header />
            <div className='bg-white py-[50px]'>
                <div className="container mx-auto grid grid-cols-1 gap-9 sm:grid-cols-2 ">
                    <div className="flex flex-col gap-9">
                        <div className="bg-gray-200 p-4 rounded-md shadow-md ">
                            <div className="flex items-center mb-4">
                                <h2 className="text-xl font-semibold">Contact Details</h2>
                            </div>
                            <div className="bg-white m-5 p-6 rounded-lg shadow-md flex items-center ">
                                <div className="mr-4">
                                    <FaPhone style={{ color: "blue", fontSize: 25 }} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">Phone Number</h2>
                                    <p className="text-gray-600">+1 (123) 456-7890</p>
                                </div>
                            </div>
                            <div className="bg-white m-5 p-6 rounded-lg shadow-md flex items-center ">
                                <div className="mr-4">
                                    <FaEnvelope style={{ color: "blue", fontSize: 25 }} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">Email</h2>
                                    <p className="text-gray-600">info@example.com</p>
                                </div>
                            </div>
                            <div className="bg-white m-5 p-6 rounded-lg shadow-md flex items-center ">
                                <div className="mr-4">
                                    <FaMapMarkerAlt style={{ color: "blue", fontSize: 25 }} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">Address</h2>
                                    <p className="text-gray-600">Rampuri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-9">
                        {/* <!-- Contact Form --> */}
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Contact Form
                                </h3>
                            </div>
                            <form action="#">
                                <div className="p-6.5">
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your first name"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your last name"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Email <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Select subject"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Subject
                                        </label>
                                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                                            <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                                <option value="">Type your subject</option>
                                                <option value="">USA</option>
                                                <option value="">UK</option>
                                                <option value="">Canada</option>
                                            </select>
                                            <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                                <svg
                                                    className="fill-current"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.8">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                            fill=""
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Message
                                        </label>
                                        <textarea
                                            rows={6}
                                            placeholder="Type your message"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        ></textarea>
                                    </div>

                                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact;
