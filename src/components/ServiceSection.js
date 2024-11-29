// src/components/ServiceSection.js

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
    const services = [
        {
            icon: 'BarChart',
            title: 'Data Analytics',
            description:
                'Transform your data into actionable insights with cutting-edge analytics solutions and impactful data visualization.',
        },
        {
            icon: 'PieChart',
            title: 'Strategic Consulting',
            description:
                'Empower your business decisions with tailored advice and strategies driven by data and market insights.',
        },
        {
            icon: 'Activity',
            title: 'Predictive Modeling',
            description:
                'Leverage AI and machine learning algorithms for precise forecasts tailored to your business needs.',
        },
        // Add more services if needed
    ];

    return (
        <div className="max-w-7xl mx-auto text-center px-6">
            <motion.h2
                className="text-4xl font-extrabold text-blue-900 mb-16"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Our Expertise
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-3 relative">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
