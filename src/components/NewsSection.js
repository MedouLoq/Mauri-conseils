// src/components/NewsSection.js

import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        title: 'Mauri-Conseils Launches New AI Tool',
        date: 'November 15, 2024',
        excerpt: 'We are excited to announce the launch of our new AI-powered analytics tool...',
        link: '/blog/new-ai-tool',
    },
    {
        title: 'How Data Analytics is Changing Industries',
        date: 'October 30, 2024',
        excerpt: 'Data analytics is revolutionizing the way businesses operate by providing insights...',
        link: '/blog/data-analytics-impact',
    },
    // Add more news items as needed
];

const NewsSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2
                className="text-4xl font-extrabold text-blue-900 text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Latest News
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-2">
                {newsItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                        <p className="text-gray-500 mb-4">{item.date}</p>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <a
                            href={item.link}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Read More &rarr;
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
