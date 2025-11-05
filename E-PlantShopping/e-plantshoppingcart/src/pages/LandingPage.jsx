// src/pages/LandingPage.jsx
import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate=useNavigate()
    return (
        <Layout>
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 py-10 ">
                {/* Left Section */}
                <div className="md:w-1/2 space-y-4 text-center ">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome To <br></br>Paradise Nursery
                    </h1>
                    <p className="italic text-lg text-green-700">Where Green Meets Serenity</p>
                    <button onClick={()=>navigate("/products")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition">
                        Get Started
                    </button>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 text-white">
                    <h2 className="text-2xl font-semibold text-center md:text-left text-green-800 mb-5">
                        Welcome to Paradise Nursery — where green meets serenity!
                    </h2>
                    <div className="flex flex-col gap-4  leading-relaxed text-justify">
                        <p>
                            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is
                            to provide a wide range of high-quality plants that not only enhance the beauty of your
                            surroundings but also contribute to a healthier and more sustainable lifestyle.
                        </p>

                        <p>
                            Our mission is to offer a diverse range of high-quality plants — from air-purifying indoor
                            varieties to vibrant outdoor blooms — that enhance not only the beauty of your environment
                            but also your well-being. Whether you are looking to create a calm corner in your home or a
                            flourishing garden, we have something for everyone.
                        </p>

                        <p>
                            Our team of experts ensures that each plant meets the highest standards of quality and care.
                            We guide you in selecting the right plants for your lifestyle and provide tips to help them
                            thrive. Our goal is to make gardening simple, enjoyable, and accessible for everyone — from
                            first-time plant parents to experienced horticulturists.
                        </p>

                        <p>
                            Join us in our mission to make the world a little greener, one plant at a time. Visit
                            Paradise Nursery and experience the beauty, freshness, and tranquility that only nature can
                            provide. Let’s grow together toward a healthier and happier planet!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LandingPage;
