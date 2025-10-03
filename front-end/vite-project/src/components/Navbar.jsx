import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white shadow-lg px-6 py-4 fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Brand */}
          <h1 className="text-2xl md:text-2xl font-extrabold tracking-wide 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300
                         drop-shadow-lg
                         hover:scale-105 transform transition-all duration-300 cursor-pointer">
            AI Career Guide
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="hover:text-indigo-200 transition-colors">Home</Link>
            <Link to="/dashboard" className="hover:text-indigo-200 transition-colors">Dashboard</Link>
            <Link to="/career-paths" className="hover:text-indigo-200 transition-colors">Careers</Link>
            <Link to="/roadmap" className="hover:text-indigo-200 transition-colors">Roadmap</Link>
            <Link to="/resume-checker" className="hover:text-indigo-200 transition-colors">Resume Checker</Link>
            <Link
              to="/login"
              className="px-4 py-2 m-0 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all"
            >              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-indigo-700 rounded-lg shadow-md py-4 flex flex-col space-y-3 px-4 animate-fadeInDown">
            <Link to="/" className="hover:text-indigo-200 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/dashboard" className="hover:text-indigo-200 transition-colors" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link to="/career-paths" className="hover:text-indigo-200 transition-colors" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/roadmap" className="hover:text-indigo-200 transition-colors" onClick={() => setIsOpen(false)}>Roadmap</Link>
            <Link to="/resume-checker" className="hover:text-indigo-200 transition-colors" onClick={() => setIsOpen(false)}>Resume Checker</Link>
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
