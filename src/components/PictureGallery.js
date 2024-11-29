// src/components/PictureGallery.js

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
    { src: '/data.jpg', alt: 'Data Analysis' },
    { src: '/images/slide2.jpg', alt: 'Strategic Planning' },
    { src: '/images/slide3.jpg', alt: 'Team Collaboration' },
];

const PictureGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === galleryImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () =>
        setCurrentSlide((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    const prevSlide = () =>
        setCurrentSlide((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <motion.img
                    key={currentSlide}
                    src={galleryImages[currentSlide].src}
                    alt={galleryImages[currentSlide].alt}
                    className="w-full h-80 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                    {galleryImages[currentSlide].alt}
                </p>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow hover:shadow-md"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow hover:shadow-md"
                aria-label="Next Slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default PictureGallery;
