// src/components/ServiceCard.js

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, PieChart, Activity } from 'lucide-react';

const iconComponents = {
    BarChart,
    PieChart,
    Activity,
};

const ServiceCard = ({ icon, title, description, delay }) => {
    const IconComponent = iconComponents[icon];

    return (
        <motion.div
            className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 p-6 rounded-full shadow-md">
                <IconComponent className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-6">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                    Learn More
                </button>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
