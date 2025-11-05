import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

    const navigate=useNavigate()

    return (
       
            <div className="mt-40 flex gap-40 items-center">
                <div className="flex flex-col items-center w-xl">
                    <h2 className="text-3xl font-semibold mb-2">Welcome To </h2>
                    <h2 className="text-3xl font-semibold mb-2 border-green-700 border-b-2 pb-3">Paradise Nursery</h2>
                    <p className="text-lg mb-4">Where Green Meets Serenity</p>
                    <button onClick={()=>navigate("/cart")} className="bg-green-600 text-white py-2 p-8 rounded-md cursor-pointer mt-3">
                        Get Started
                    </button>
                </div>

                <div>
                    <h2 className="text-center">Welcome to paradise nursery where green meets serenity!</h2>
                    <div className=" flex flex-col gap-3 p-5">
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
      
    );
};

export default AboutUs;
