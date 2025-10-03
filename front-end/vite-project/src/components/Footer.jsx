import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} AI Career Guide. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-200 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-white/70 mt-4">
        Designed with 💜 and AI insights.
      </p>
    </footer>
  );
}
