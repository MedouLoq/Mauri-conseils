// src/pages/HomePage.js

import React from 'react';
import WelcomeSection from '../components/WelcomePage';
import ServiceSection from '../components/ServiceSection';
import DynamicInsights from '../components/DynamicInsights';
import PictureGallery from '../components/PictureGallery';
import Testimonials from '../components/Testimonials';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';
import PartnersSection from '../components/PartnersSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <section>
                <WelcomeSection />
            </section>

            {/* Services Section */}
            <section className="relative py-20 bg-gray-50 overflow-hidden">
                <ServiceSection />
            </section>

            {/* Dynamic Insights Section */}
            <section className="py-20">
                <DynamicInsights />
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <TeamSection />
            </section>

            {/* Picture Gallery Section */}
            <section className="py-20">
                <PictureGallery />
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-blue-50">
                <Testimonials />
            </section>

            {/* News Section */}
            <section className="py-20">
                <NewsSection />
            </section>

            {/* Partners Section */}
            <section className="py-20 bg-gray-50">
                <PartnersSection />
            </section>

            {/* Call to Action Section */}
            <section className="py-20">
                <CallToAction />
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;
