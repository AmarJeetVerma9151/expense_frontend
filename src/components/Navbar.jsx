// import React from 'react'

import { Button, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // let dispatch=useDispatch()
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Expanse</h1>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white">Home</Link>
          <Link to="login" className="text-white">Login</Link>
          <Link to="register" variant="outline" className="text-white border-white">Sign Up</Link>
          {/* <li onClick={()=> dispatch(logout())} to="register" variant="outline" className="text-white border-white">logout</li> */}
        </div>
        
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-700 p-4 space-y-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Login</a>
          <Button variant="outline" className="text-white border-white">Sign Up</Button>
        </div>
      )} */}
    </nav>
  );
}
