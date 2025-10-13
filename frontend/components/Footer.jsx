"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-black text-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="relative w-16 h-12 rounded-lg overflow-hidden shadow-md border border-green-500/40"> */}
                {/* <Image src="/logo.png" alt="Radha Gardening Logo" fill className="object-cover" /> */}
              {/* </div> */}
              <span className="text-xl font-bold text-green-400">Radha Gardening</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="font-semibold text-green-400">All Gardening Solutions</span><br />
              Terrace Garden, Home Garden, Rose Garden, Jasmine Garden, Marriage Lawn<br />
              <span className="text-gray-500">Healthy • Natural • Sustainable</span>
            </p>
            <div className="flex space-x-4 text-green-400">
              <a href="#" target="_blank" className="hover:text-green-300 transition-colors duration-200">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" className="hover:text-green-300 transition-colors duration-200">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" className="hover:text-green-300 transition-colors duration-200">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-green-300 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Home Garden Setup",
                "Terrace Garden Design",
                "Rose & Jasmine Gardens",
                "Marriage Lawn Decoration",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-green-300 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <FaPhone className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Mobile</p>
                  <a href="tel:8960088835" className="hover:text-green-300 transition">
                    8960088835
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:radhagardnering67package@gmail.com"
                    className="hover:text-green-300 transition"
                  >
                    radhagardnering67package@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Office</p>
                  <p className="hover:text-green-300 transition block text-sm">
                    Max Hospital Gate No. 3, Kali Badi Mandir, Gomti Nagar, Lucknow - 226010
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Category: Agriculture & Gardening Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Radha Gardening Package. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-2 md:mt-0">
            <Link href="#" className="hover:text-green-300 transition-colors duration-300 relative group">
              <span>Privacy Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-green-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#" className="hover:text-green-300 transition-colors duration-300 relative group">
              <span>Terms of Service</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-green-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#" className="hover:text-green-300 transition-colors duration-300 relative group">
              <span>Refund Policy</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-green-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>

        {/* Designed by TechPotli */}
        <div className="flex flex-col items-center space-y-3 mt-6">
          <p className="text-gray-400 text-sm">Designed by</p>
          <a
            href="https://techpotli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 group"
          >
            <Image
              src="/New_Techpotli_Logo.png"
              alt="TechPotli"
              width={100}
              height={32}
              className="filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
