// src/components/TeamSection.js

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO & Data Scientist',
        photo: '/images/team/john.jpg',
        bio: 'John has over 15 years of experience in data science and analytics.',
    },
    {
        name: 'Jane Smith',
        position: 'Chief Analyst',
        photo: '/images/team/jane.jpg',
        bio: 'Jane specializes in predictive modeling and statistical analysis.',
    },
    // Add more team members as needed
];

const TeamSection = () => {
    return (
        <div className="max-w-7xl mx-auto text-center px-6">
            <motion.h2
                className="text-4xl font-extrabold text-blue-900 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Meet Our Team
            </motion.h2>
            <div className="grid gap-12 md:grid-cols-3">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                        <p className="text-blue-600 mb-2">{member.position}</p>
                        <p className="text-gray-600">{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
