'use client';
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactUs = () => {
    return (
        <div className="bg-black">
            <section className="container mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-[#DDE8E6] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <Image
                            src="/images/contact-icon-1.png"
                            alt="phone icon"
                            title="phone icon"
                            width={48}
                            height={48}
                            className="w-12 h-12 mb-4"
                        />
                        <h3 className="font-bold text-lg">PHONE</h3>
                        <p className="text-gray-600 mt-2">+91-9012345678</p>
                    </div>

                    <div className="bg-[#DDE8E6] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <Image
                            src="/images/contact-icon-1.png"
                            alt="mail icon"
                            title="mail icon"
                            width={48}
                            height={48}
                            className="w-12 h-12 mb-4"
                        />
                        <h3 className="font-bold text-lg">MAIL</h3>
                        <p className="text-gray-600 mt-2">info@gmail.com</p>
                    </div>

                    <div className="bg-[#DDE8E6] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
                        <Image
                            src="/images/contact-icon-1.png"
                            alt="address icon"
                            title="address icon"
                            width={48}
                            height={48}
                            className="w-12 h-12 mb-4"
                        />
                        <h3 className="font-bold text-lg">ADDRESS</h3>
                        <p className="text-gray-600 mt-2">1234, Patel Marg, Mansarovar, Jaipur, Rajasthan - 302020</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div className="w-full flex justify-center">
                        <DotLottieReact
                            src="https://lottie.host/bad20bd1-aa9a-4885-b3bc-cd1d1c036759/wkl9CwSWrn.lottie"
                            loop
                            autoplay
                            style={{ width: '100%', maxWidth: '450px' }}
                        />
                    </div>

                    <div className="w-full bg-[#DDE8E6] p-8 rounded-2xl shadow-lg">
                        <h3 className="text-center font-bold text-lg text-gray-700">GET IN TOUCH</h3>
                        <h2 className="text-center text-2xl font-bold mt-2">Ready To Get Started?</h2>

                        <form className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full p-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="w-full p-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Subject *"
                                    className="w-full p-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                                <select className="w-full p-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
                                    <option value="">Select Service</option>
                                    <option value="web">Web Development</option>
                                    <option value="design">UI/UX Design</option>
                                    <option value="app">App Development</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <textarea
                                placeholder="Message..."
                                className="w-full p-3 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"
                                required
                            ></textarea>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-teal-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-600 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7165342136786!2d75.75537857605241!3d26.848966876685182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db578bde235d7%3A0xefe223d97dc0ae88!2sSignatureTech%20IT%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1742981262988!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    aria-label="Office Location Map"
                ></iframe>
            </section>
        </div>
    );
}

export default ContactUs;