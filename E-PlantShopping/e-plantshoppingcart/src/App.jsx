// import AboutUs from "./AboutUs";
// import {Route, Routes} from "react-router-dom";
// import {Navbar} from "./Navbar";

// const App = () => {
//     return (
//         <div className="bg-[url('/bg-image.jpg')] bg-cover bg-center h-screen w-screen">
//             <div className="bg-white/5 backdrop-blur-sm border  rounded-xl p-8 text-white  shadow-lg w-screen h-screen">
//               <AboutUs></AboutUs>
//                 <Routes>
//                     {/* <Route path="/" element={<AboutUs></AboutUs>}></Route> */}
//                     <Route path="/cart" element={<Navbar></Navbar>}></Route>
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default App;

import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Cart from './pages/Cart'
import { Products } from './pages/Products'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
    
  )
}

export default App