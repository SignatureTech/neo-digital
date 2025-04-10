'use client';
import Link from "next/link";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import Image from "next/image";

export default function Home() {
    return (

        <div className="bg-black">
            <div className="container m-auto text-white py-16 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center justify-between">

                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold pr-2 animate-bounce">
                            Our Expertise In <span className="text-teal-400">Marketing Solutions</span>
                        </h2>
                        <p className="text-gray-300 text-lg mt-3">
                            We Execute Your Ideas From Start to Finish.
                        </p>
                        <button
                            className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
                            Start Now
                        </button>
                    </div>


                    <div className="mt-10 lg:mt-0 flex justify-center">
                        <DotLottieReact src="https://lottie.host/bad20bd1-aa9a-4885-b3bc-cd1d1c036759/wkl9CwSWrn.lottie"
                                        loop autoplay/>
                    </div>
                </div>
            </div>


            <div className="container m-auto text-center py-16 px-4">

                <h1 className="text-white text-4xl md:text-4xl font-extrabold">
                    Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
                </h1>
                <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
                <p className="text-gray-300 text-lg">Lorem Ipsum is simply dummy text of the printing</p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden text-left transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="relative w-full h-56">
                            <Image
                                src="/images/demo-img-1.png"
                                alt="digital services"
                                title="digital services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
                            <p className="text-teal-500 font-bold">DEMO</p>
                        </div>
                    </div>


                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden text-left transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="relative w-full h-56">
                            <Image
                                src="/images/demo-img-1.png"
                                alt="digital services"
                                title="digital services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
                            <p className="text-teal-500 font-bold">DEMO</p>
                        </div>
                    </div>


                    <div
                        className="bg-white rounded-lg shadow-lg overflow-hidden text-left transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="relative w-full h-56">
                            <Image
                                src="/images/demo-img-1.png"
                                alt="digital services"
                                title="digital services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Web & Mobile Application</h3>
                            <p className="text-teal-500 font-bold">DEMO</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative flex items-center bg-black h-150">
                <div className="absolute inset-0">
                    <Image
                        src="/images/story-img.jpg"
                        alt="Our Story Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container relative z-10 max-w-3xl px-6 text-white md:px-12 lg:px-16">
                    <h4 className="text-sm font-semibold tracking-wider text-white-400 border-l-4 border-teal-400 pl-2 inline-block">
                        STORY OF <span className="text-teal-400">NEO</span> DIGITAL
                    </h4>
                    <h2 className="mt-2 text-2xl font-bold md:text-4xl lg:text-4xl">
                        We Have The <span className="text-teal-400">Best Partners</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed md:text-lg">
                        NEO DIGITAL is a team of talented developers committed to affordable,
                        quality, full-scope development services, A to Z!
                    </p>
                    <p className="mt-4 text-sm text-gray-300 md:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>


                    <div className="mt-6">
                        <Link href={"/about-us"}>
                            <button
                                className="px-6 py-2 text-black font-semibold bg-white rounded-full shadow-md hover:bg-gray-300">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            <div className="container m-auto py-16 px-4">

                <h1 className="text-white text-4xl md:text-4xl font-extrabold text-center">
                    Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo</h1>
                <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
                <p className="text-gray-300 text-lg text-center">Lorem Ipsum is simply dummy text of the printing</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div
                        className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                                <span className="text-teal-600 text-xl font-semibold">01</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
                        <p className="mt-4 text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                                <span className="text-teal-600 text-xl font-semibold">02</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
                        <p className="mt-4 text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>


                    <div
                        className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                                <span className="text-teal-600 text-xl font-semibold">03</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Lorem Ipsum Dummy Text</h2>
                        <p className="mt-4 text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>

            </div>


            <div className="container m-auto bg-black text-center py-16 relative">

                <div className="absolute inset-0">
                    {/*<Image*/}
                    {/*    src="https://source.unsplash.com/1600x900/?stars,space"*/}
                    {/*    alt="Space background"*/}
                    {/*    fill*/}
                    {/*    className="object-cover opacity-20"*/}
                    {/*/>*/}
                </div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl font-extrabold">
                        Lorem Ipsum <span className="text-teal-400">Dummy Text</span> Demo
                    </h1>
                    <p className="text-gray-300 mt-2">Lorem Ipsum is simply dummy text of the printing</p>
                    <Link href={"/contact-us"}>
                        <button
                            className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
                            Enquiry Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>);
}