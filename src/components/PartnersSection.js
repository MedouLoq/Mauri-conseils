// src/components/PartnersSection.js

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'UNICEF', logo: process.env.PUBLIC_URL + "/UNICEF.jpg" },
    { name: 'AfDB', logo: process.env.PUBLIC_URL + "/AfDB.jpg" },
    { name: 'MR', logo: process.env.PUBLIC_URL + "/MR.svg" },
    // Add more partners as needed
];

const PartnersSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-center px-6">
            <motion.h2
                className="text-4xl font-extrabold text-blue-900 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Our Trusted Partners
            </motion.h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {partners.map((partner, index) => (
                    <motion.div
                        key={index}
                        className="p-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-16 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
