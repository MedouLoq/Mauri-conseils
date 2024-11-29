// src/components/Testimonials.js

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote:
            'Mauri-Conseils provided us with actionable insights that transformed our business strategy. Highly recommend their services!',
        client: 'Client A',
    },
    {
        quote:
            'The expertise and professionalism of the team were evident in every step of our project.',
        client: 'Client B',
    },
];

const Testimonials = () => {
    return (
        <div className="max-w-6xl mx-auto text-center">
            <motion.h2
                className="text-3xl font-bold text-blue-900 mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                What Our Clients Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                        <h4 className="text-blue-800 font-semibold">- {testimonial.client}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
