import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Linkedin, ChevronLeft, ChevronRight, Facebook, Twitter, TrendingUp, Database, Layers, Activity } from "lucide-react";

// Navbar Component
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-900 text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">Mauri-Conseils</Link>
                </h1>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About Us</Link>
                    <Link to="/services" className="hover:underline">Services</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-800 p-4">
                    <Link to="/" className="block py-2 hover:underline">Home</Link>
                    <Link to="/about" className="block py-2 hover:underline">About Us</Link>
                    <Link to="/services" className="block py-2 hover:underline">Services</Link>
                    <Link to="/contact" className="block py-2 hover:underline">Contact</Link>
                </div>
            )}
        </nav>
    );
};

// Home Page  

const galleryImages = [
    { src: process.env.PUBLIC_URL + "data.jpg", alt: "Data Analysis" },
    { src: process.env.PUBLIC_URL + "/images/slide2.jpg", alt: "Strategic Planning" },
    { src: process.env.PUBLIC_URL + "/images/slide3.jpg", alt: "Team Collaboration" },
];

const WelcomeSection = () => {
    const slides = [
        {
            src: process.env.PUBLIC_URL + "/trans.jpg",
            alt: "Slide 1",
            caption: "Transforming Data into Actionable Insights",
        },
        {
            src: process.env.PUBLIC_URL + "/making.jpg",
            alt: "Slide 2",
            caption: "Empowering Decision Making through Analytics",
        },
        {
            src: process.env.PUBLIC_URL + "/modern.jpg",
            alt: "Slide 3",
            caption: "Innovative Strategies for Modern Businesses",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    // Background Animations with Lucide Icons
    const floatingIcons = [
        { icon: BarChart, x: 10, y: 10, delay: 0 },
        { icon: LineChart, x: 25, y: 60, delay: 0.3 },
        { icon: PieChart, x: 60, y: 15, delay: 0.5 },
        { icon: TrendingUp, x: 75, y: 50, delay: 0.8 },
        { icon: Database, x: 20, y: 40, delay: 1 },
        { icon: Layers, x: 50, y: 80, delay: 1.2 },
        { icon: Activity, x: 70, y: 20, delay: 1.5 },
    ];

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-6 overflow-hidden">
            {/* Background Floating Icons */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute text-blue-500 opacity-70"
                    style={{ top: `${item.y}%`, left: `${item.x}%` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -20, 20] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: item.delay,
                    }}
                >
                    <item.icon size={48} />
                </motion.div>
            ))}

            {/* Heading */}
            <motion.div
                className="max-w-4xl mx-auto text-center mb-12 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-blue-900 mb-4">
                    Welcome to Mauri-Conseils
                </h1>
                <p className="text-xl text-gray-700">
                    Your trusted partner in data science, statistics, and strategic
                    consulting. Let us guide you to make data-driven decisions that
                    matter.
                </p>
            </motion.div>

            {/* Slides Section */}
            <div className="relative max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <motion.p
                        className="absolute bottom-8 left-8 text-white text-2xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {slides[currentSlide].caption}
                    </motion.p>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-3 rounded-full shadow hover:shadow-md"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-3 rounded-full shadow hover:shadow-md"
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </section>
    );
};
const DynamicInsights = () => {
    const lineChartData = [
        { month: "Jan", projects: 5 },
        { month: "Feb", projects: 8 },
        { month: "Mar", projects: 12 },
        { month: "Apr", projects: 20 },
        { month: "May", projects: 18 },
        { month: "Jun", projects: 25 },
    ];

    const barChartData = [
        { name: "Data Science", value: 80 },
        { name: "Consulting", value: 60 },
        { name: "AI Models", value: 90 },
        { name: "Training", value: 70 },
    ];

    const pieChartData = [
        { name: "Python", value: 40 },
        { name: "R", value: 30 },
        { name: "SQL", value: 20 },
        { name: "JavaScript", value: 10 },
    ];

    const pieColors = ["#2563eb", "#1d4ed8", "#3b82f6", "#93c5fd"];

    return (
        <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
            {/* Floating Background Icons */}
            <motion.div
                className="absolute -top-10 left-1/4 text-blue-200 opacity-30"
                initial={{ y: -20 }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <svg width="200" height="200">
                    <circle cx="100" cy="100" r="100" fill="#2563eb" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute bottom-0 right-1/4 text-blue-200 opacity-30"
                initial={{ x: -20 }}
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <svg width="200" height="200">
                    <rect width="200" height="200" fill="#93c5fd" />
                </svg>
            </motion.div>

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-blue-900 text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Dynamic Insights
                </motion.h2>

                {/* Timeline */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-6">Project Growth Timeline</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={lineChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="projects"
                                stroke="#2563eb"
                                strokeWidth={3}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Skill Distribution */}
                <div className="mb-12 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Skill Distribution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <rePiechart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Pie>
                            </rePiechart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Service Impact</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <reBarchart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#2563eb" />
                            </reBarchart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Animated Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Projects Completed</h3>
                        <p className="text-4xl font-bold text-blue-900">120+</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Clients Served</h3>
                        <p className="text-4xl font-bold text-blue-900">50+</p>
                    </motion.div>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Certifications</h3>
                        <p className="text-4xl font-bold text-blue-900">15+</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <section >
                <WelcomeSection />
            </section>

            {/* Services Section */}
            <section className="relative py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center px-6">
                    {/* Section Header */}
                    <motion.h2
                        className="text-4xl font-extrabold text-blue-900 mb-16"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        What We Offer
                    </motion.h2>

                    {/* Services Grid */}
                    <div className="grid gap-12 md:grid-cols-3 relative">
                        {/* Service 1 */}
                        <motion.div
                            className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-full shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-5l-3 3m0 0l-3-3m6 0l-3 3m3-3h12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Data Analytics</h3>
                            <p className="text-gray-600">
                                Transform your data into actionable insights with cutting-edge analytics solutions and impactful data visualization.
                            </p>
                            <div className="mt-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div
                            className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-400 p-6 rounded-full shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Strategic Consulting</h3>
                            <p className="text-gray-600">
                                Empower your business decisions with tailored advice and strategies driven by data and market insights.
                            </p>
                            <div className="mt-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div
                            className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-400 p-6 rounded-full shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21h6M5 3h8" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Predictive Modeling</h3>
                            <p className="text-gray-600">
                                Leverage AI and machine learning algorithms for precise forecasts tailored to your business needs.
                            </p>
                            <div className="mt-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-64 w-64 opacity-10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-64 w-64 opacity-10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                    </svg>
                </div>
            </section>

            <section>
                <DynamicInsights />
            </section>
            {/* Picture Gallery Section */}
            <section className="py-16 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
                        Our Journey in Pictures
                    </h2>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={galleryImages[currentSlide].src}
                                alt={galleryImages[currentSlide].alt}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                                {galleryImages[currentSlide].alt}
                            </p>
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow hover:shadow-md"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow hover:shadow-md"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-blue-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">What Our Clients Say</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-gray-600 italic mb-4">
                                "Mauri-Conseils provided us with actionable insights that transformed our business
                                strategy. Highly recommend their services!"
                            </p>
                            <h4 className="text-blue-800 font-semibold">- Client A</h4>
                        </motion.div>
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-gray-600 italic mb-4">
                                "The expertise and professionalism of the team were evident in every step of our
                                project."
                            </p>
                            <h4 className="text-blue-800 font-semibold">- Client B</h4>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-900 text-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h4 className="text-lg font-bold mb-4">Mauri-Conseils</h4>
                        <p className="text-gray-300">
                            Transforming data into actionable insights since 2017.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2">
                                <Link to="/about" className="hover:text-gray-300 transition">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="hover:text-gray-300 transition">
                                    Services
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="hover:text-gray-300 transition">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <p className="text-gray-300">Email: info@mauri-conseils.com</p>
                        <p className="text-gray-300">Phone: +222 33 25 26 44</p>
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                                aria-label="Twitter"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
// About Us Page
const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">About Us</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-gray-700">
                    Mauri-Conseils was founded in 2017 by a group of Mauritanian experts
                    with strong academic backgrounds and extensive professional experience.
                    We specialize in providing high-quality consulting and strategic guidance.
                </p>
                <p className="text-gray-700">
                    Our mission is to help businesses and organizations make data-driven
                    decisions and achieve their goals through our expertise in statistics,
                    data analysis, and strategic planning.
                </p>
                <Link
                    to="/services"
                    className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Explore Our Services
                </Link>
            </div>
        </div>
    );
};

// Services Page
const ServicesPage = () => {
    const services = [
        {
            title: "Data Analysis & Visualization",
            description:
                "Unlock the power of your data with advanced analysis and compelling visual storytelling.",
        },
        {
            title: "Statistical Modeling",
            description:
                "Expert statistical models tailored to your business challenges.",
        },
        {
            title: "Strategic Consulting",
            description:
                "Actionable strategies that align with your organization's goals and vision.",
        },
        {
            title: "Training Workshops",
            description:
                "Empower your team with skills in data science, statistics, and decision-making.",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-800">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Contact Page
const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-6">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Contact Us</h2>
            <div className="max-w-4xl mx-auto">
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="6"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p>📧 info@mauri-conseils.com</p>
                    <p>📞 +222 33 25 26 44</p>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
