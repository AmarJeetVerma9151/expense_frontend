import React from 'react'

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Brand</h1>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Login</a>
          <Button variant="outline" className="text-white border-white">Sign Up</Button>
        </div>
        
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-700 p-4 space-y-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Login</a>
          <Button variant="outline" className="text-white border-white">Sign Up</Button>
        </div>
      )}
    </nav>
  );
}
