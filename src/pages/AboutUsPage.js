// src/pages/AboutUsPage.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Globe, Heart, TrendingUp } from 'lucide-react';

const teamMembers = [
    {
        name: 'Ahmed Mohamed',
        position: 'CEO & Founder',
        image: '/images/team/ahmed.jpg',
        bio: 'Ahmed has over 15 years of experience in data science and strategic consulting. He founded Mauri-Conseils to help businesses unlock the power of their data.',
    },
    {
        name: 'Fatima Ould',
        position: 'Chief Data Scientist',
        image: '/images/team/fatima.jpg',
        bio: 'Fatima specializes in machine learning and predictive analytics, leading our data science team to deliver innovative solutions.',
    },
    // Add more team members as needed
];

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Company Introduction */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
                        À Propos de Mauri-Conseils
                    </h1>
                    <p className="text-xl text-gray-700">
                        Mauri-Conseils est une société de conseil en data science basée en Mauritanie, dédiée à aider les entreprises à transformer leurs données en avantages stratégiques.
                    </p>
                </motion.div>

                {/* Our Mission and Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Globe className="text-blue-600 mb-4" size={40} />
                        <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
                        <p className="text-gray-600">
                            Fournir des solutions de data science innovantes qui permettent aux entreprises de prendre des décisions éclairées et de prospérer dans un environnement concurrentiel.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Heart className="text-red-600 mb-4" size={40} />
                        <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
                        <p className="text-gray-600">
                            Être le partenaire de confiance pour les entreprises en quête d'excellence grâce à l'exploitation efficace de leurs données.
                        </p>
                    </motion.div>
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Nos Valeurs
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <TrendingUp className="text-green-600 mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                Nous sommes engagés à innover constamment pour offrir des solutions de pointe à nos clients.
                            </p>
                        </motion.div>
                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Users className="text-blue-600 mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                            <p className="text-gray-600">
                                Nous croyons en une collaboration étroite avec nos clients pour comprendre et répondre à leurs besoins spécifiques.
                            </p>
                        </motion.div>
                        <motion.div
                            className="text-center p-6 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Heart className="text-red-600 mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
                            <p className="text-gray-600">
                                Nous agissons avec intégrité et éthique dans toutes nos interactions et engagements.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Our Team */}
                <div className="mb-16">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Notre Équipe
                    </motion.h2>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-blue-600 mb-2">{member.position}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <motion.h3
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Prêt à Collaborer avec Nous ?
                    </motion.h3>
                    <motion.p
                        className="text-lg mb-8 text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons aider votre entreprise à prospérer.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Nous Contacter
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
