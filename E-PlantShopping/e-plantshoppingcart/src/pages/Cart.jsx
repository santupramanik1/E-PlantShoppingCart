// // src/pages/CartPage.jsx
// import React from "react";
// import Layout from "../components/Layout";
// import {Navbar} from "../components/Navbar";
// import {useAppContext} from "../context/AppContext";
// import {useNavigate} from "react-router-dom";
// import {Minus, Plus} from "lucide-react";

// const Cart = () => {
//     const {cartItems, removeFromCart} = useAppContext();
//     const navigate = useNavigate();
//     return (
//         <>
//             <Navbar></Navbar>
//             <Layout>
//                 <p className="mb-6 text-lg text-black">Total Cart Amount: $0</p>

//                 <div className="flex flex-col gap-10">
//                     {cartItems.map((item, index) => (
//                         <div key={item} className="flex w-xl shadow-md bg-white/50 gap-10">
//                             <div>
//                                 <img src={item.image} className="w-40"></img>
//                             </div>
//                             <div className="flex flex-col gap-3 text-black font-bold">
//                                 <p>{item.name}</p>
//                                 <span>{item.price}</span>
//                                 <div className="flex items-center gap-2">
//                                     <Minus  className="w-6 h-6 bg-gray-100 cursor-pointer  text-black" />
//                                     <span>{1}</span>
//                                     <Plus className="w-6 h-6 bg-gray-100 cursor-pointer text-black"></Plus>
//                                 </div>
//                                 <p>Total:{item.price}</p>
//                                 <button
//                                     onClick={() => removeFromCart(index)}
//                                     className="bg-red-600 text-white py-2 p-5 rounded-md"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex flex-col justify-center gap-4">
//                     <button
//                         onClick={() => navigate("/products")}
//                         className="bg-green-600 mt-4 hover:bg-green-700 px-5 py-2 rounded-md text-white"
//                     >
//                         Continue Shopping
//                     </button>
//                     <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md text-white">
//                         Checkout
//                     </button>
//                 </div>
//             </Layout>
//         </>
//     );
// };

// export default Cart;

// src/pages/CartPage.jsx
import React from "react";
import Layout from "../components/Layout";
import {Navbar} from "../components/Navbar";
import {useAppContext} from "../context/AppContext";
import {useNavigate} from "react-router-dom";
import {Minus, Plus} from "lucide-react";

const Cart = () => {
    const {cartItems, removeFromCart, addToCart, decreaseQuantity, getTotalAmount} = useAppContext();
    const navigate = useNavigate();

    const totalAmount = getTotalAmount().toFixed(2);

    return (
        <>
            <Navbar />
            <Layout>
                <div className="text-black max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">🛒 Your Shopping Cart</h1>
                    <p className="mb-6 text-lg font-semibold text-center">Total Cart Amount: ${totalAmount}</p>

                    {cartItems.length === 0 ? (
                        <div className="flex flex-col justify-center gap-4">
                            <button
                                onClick={() => navigate("/products")}
                                className="bg-green-600 mt-4 hover:bg-green-700 px-5 py-2 rounded-md text-white"
                            >
                                Continue Shopping
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md text-white">
                                Checkout
                            </button>{" "}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8">
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center justify-between bg-white/70 backdrop-blur-md shadow-lg rounded-lg p-5"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-32 h-32 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col items-center sm:items-start gap-3 mt-4 sm:mt-0 sm:ml-5 text-center sm:text-left">
                                        <p className="text-xl font-semibold">{item.name}</p>
                                        <span className="text-green-700 font-bold">{item.price}</span>

                                        <div className="flex items-center gap-3">
                                            <Minus
                                                onClick={() => decreaseQuantity(index)}
                                                className="w-6 h-6 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 text-black"
                                            />
                                            <span className="text-lg font-semibold">{item.quantity}</span>
                                            <Plus
                                                onClick={() => addToCart(item)}
                                                className="w-6 h-6 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 text-black"
                                            />
                                        </div>

                                        <p className="font-semibold">
                                            Total: $
                                            {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                                        </p>

                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {cartItems.length > 0 && (
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <button
                                onClick={() => navigate("/products")}
                                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md text-white"
                            >
                                Continue Shopping
                            </button>
                            <button onClick={()=>navigate("/checkout")} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md text-white">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default Cart;
