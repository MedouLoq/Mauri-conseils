// src/components/CallToAction.js

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Contact us today to discover how we can help you leverage data for strategic advantage.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
