// src/components/WelcomeSection.js

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    BarChart2,
    PieChart,
    TrendingUp,
    Database,
    Layers,
    Activity,
    Target,
    Award,
} from "lucide-react";

const WelcomeSection = () => {
    const slides = [
        {
            src: process.env.PUBLIC_URL + "/trans.jpg",
            alt: "Analyse de données",
            caption: "Transformez vos données en décisions stratégiques",
            description: "Expertise en science des données et analytics avancés"
        },
        {
            src: process.env.PUBLIC_URL + "/making.jpg",
            alt: "Conseil stratégique",
            caption: "Excellence en conseil d'entreprise",
            description: "Solutions sur mesure pour votre croissance"
        },
        {
            src: process.env.PUBLIC_URL + "/modern.jpg",
            alt: "Innovation",
            caption: "L'innovation au service de votre réussite",
            description: "Technologies de pointe et méthodologies éprouvées"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [isHovered, slides.length]);

    const floatingIcons = [
        { icon: BarChart2, x: 25, y: 60, delay: 0.3 },
        { icon: PieChart, x: 30, y: 10, delay: 0.5 },
        { icon: TrendingUp, x: 10, y: 7, delay: 0.8 },
        { icon: Database, x: 50, y: 80, delay: 1 },
        { icon: Layers, x: 8, y: 80, delay: 1.2 },
        { icon: Activity, x: 70, y: 20, delay: 1.5 },
        { icon: Target, x: 85, y: 25, delay: 0.3 },
        { icon: Award, x: 15, y: 75, delay: 0.6 },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
            {/* Background Floating Icons */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute text-blue-500 opacity-20"
                    style={{ top: `${item.y}%`, left: `${item.x}%` }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.delay,
                    }}
                >
                    <item.icon size={64} />
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-6">
                        Mauri-Conseils
                    </h1>
                    <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Your expert partner in data science and strategic consulting
                    </p>
                </motion.div>

                {/* Enhanced Carousel */}
                <div
                    className="relative max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="relative aspect-w-16 aspect-h-9"
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={slides[currentSlide].src}
                            alt={slides[currentSlide].alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                            <div className="absolute bottom-8 left-8 text-white">
                                <motion.h2
                                    className="text-4xl font-bold mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {slides[currentSlide].caption}
                                </motion.h2>
                                <motion.p
                                    className="text-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {slides[currentSlide].description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Carousel Controls */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === 0 ? slides.length - 1 : prev - 1
                                )
                            }
                            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                        >
                            <ChevronLeft className="text-blue-900" size={28} />
                        </motion.button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                setCurrentSlide((prev) =>
                                    prev === slides.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                        >
                            <ChevronRight className="text-blue-900" size={28} />
                        </motion.button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
