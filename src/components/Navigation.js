import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Menu,
    X,
    ChevronRight,
    TrendingUp,
    Database,
    Home,
    Server,
    BookOpen,
    Mail,
    ChevronDown,
} from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
    const [isDropdownOpen, setDropdownOpen] = useState(false); // Expertise dropdown
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { path: "/", label: "Accueil", icon: Home },
        { path: "/about", label: "À propos", icon: BookOpen },
        { path: "/services", label: "Services", icon: Database },
        { path: "/projects", label: "Projets", icon: Server },
        { path: "/blog", label: "Blog", icon: BookOpen },
        { path: "/contact", label: "Contact", icon: Mail },
    ];

    const expertiseLinks = [
        { path: "/expertise/data-analytics", label: "Data Analytics" },
        { path: "/expertise/predictive-modeling", label: "Predictive Modeling" },
        { path: "/expertise/statistical-consulting", label: "Statistical Consulting" },
    ];

    return (
        <nav className="bg-white shadow fixed w-full z-20 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" aria-label="Mauri-Conseils Home">
                            <img
                                className="h-10 w-auto"
                                src={process.env.PUBLIC_URL + "/logo.jpg"}
                                alt="Mauri-Conseils Logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex md:space-x-4 md:items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative inline-flex items-center px-3 py-2 text-sm font-medium ${location.pathname === link.path
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                <link.icon className="mr-2" size={20} />
                                {link.label}
                                {location.pathname === link.path && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                                )}
                            </Link>
                        ))}

                        {/* Expertise Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <TrendingUp className="mr-2" size={20} />
                                Expertise
                                <ChevronDown className="ml-1" size={16} />
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-10"
                                    role="menu"
                                    aria-label="Expertise submenu"
                                >
                                    {expertiseLinks.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                            role="menuitem"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            <ChevronRight size={14} className="mr-2" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                    }`}
                            >
                                <div className="flex items-center">
                                    <link.icon className="mr-2" size={20} />
                                    {link.label}
                                </div>
                            </Link>
                        ))}

                        {/* Expertise Dropdown in Mobile Menu */}
                        <div className="border-t border-gray-200 mt-2 pt-2">
                            <button
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="flex items-center px-3 py-2 w-full text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600 focus:outline-none"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <TrendingUp className="mr-2" size={20} />
                                Expertise
                                <ChevronDown className="ml-auto" size={16} />
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-6">
                                    {expertiseLinks.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="block py-2 text-gray-700 hover:text-blue-600"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            <ChevronRight size={14} className="inline-block mr-2" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navigation;
