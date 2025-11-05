import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { useAppContext } from "../context/AppContext";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
        const { totalCartItem, setTotalCartItem}=useAppContext()
    const naviagate=useNavigate()
    return (
      <nav className="fixed top-0 left-0 w-full bg-green-700/40 backdrop-blur-md text-white shadow-md z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/products" className="text-xl font-semibold flex items-center gap-2">
          🌱 <span>Paradise Nursery</span>
        </Link>

        <p>Plants</p>
        {/* Links */}
        <div className="flex items-center gap-6">
          {/* <Link to="/products" className="hover:text-green-200">
            Products
          </Link> */}
          <Link to="/cart" className="flex items-center gap-1 hover:text-green-200">
          <div className="relative">
                <ShoppingCart onClick={()=>naviagate("/cart")} size={45} /> 
                <span className="absolute top-2 right-2 w-5 h-5  text-white rounded-full text-center font-bold">{totalCartItem}</span>
          </div>
            
          </Link>
        </div>
      </div>
    </nav>
    );
};
