// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Mauri-Conseils</h4>
                    <p className="text-gray-300 text-sm">
                        Transforming data into actionable insights since 2017.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-gray-300 transition text-sm">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-gray-300 transition text-sm">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300 transition text-sm">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Contact</h4>
                    <p className="text-gray-300 text-sm">Email: info@mauri-conseils.com</p>
                    <p className="text-gray-300 text-sm">Phone: +222 33 25 26 44</p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Mauri-Conseils. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
