// src/pages/ServicesPage.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TrendingUp,
    Database,
    Server,
    PieChart,
    Globe,
    Shield,
} from 'lucide-react';
import Footer from '../components/Footer';

const ServicesPage = () => {
    const services = [
        {
            title: 'Analyse Prédictive',
            description:
                'Anticipez les tendances futures grâce à des modèles statistiques avancés.',
            icon: TrendingUp,
            image: process.env.PUBLIC_URL + "/analitycs.jpg",
        },
        {
            title: 'Traitement de Données',
            description:
                'Nettoyage, transformation et préparation de vos données complexes.',
            icon: Database,
            image: process.env.PUBLIC_URL + "/processing.jpg",
        },
        {
            title: 'Machine Learning',
            description:
                "Développement de modèles intelligents pour l'automatisation des décisions.",
            icon: Server,
            image: process.env.PUBLIC_URL + "/artificial.avif",
        },
        {
            title: 'Visualisation de Données',
            description:
                'Représentez vos données de manière interactive pour des insights clairs.',
            icon: PieChart,
            image: process.env.PUBLIC_URL + "/charts.avif",
        },
        {
            title: 'Consultation Stratégique',
            description:
                'Des conseils personnalisés pour optimiser vos processus décisionnels.',
            icon: Globe,
            image: process.env.PUBLIC_URL + "/consulting.jpg",
        },
        {
            title: 'Sécurité des Données',
            description:
                'Assurez la confidentialité et l’intégrité de vos informations sensibles.',
            icon: Shield,
            image: process.env.PUBLIC_URL + "/security.jpg",
        },
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col">
        <div className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-extrabold text-center text-blue-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Nos Services de Data Science
                </motion.h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative h-56">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                                    <service.icon className="text-white" size={60} />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-16 text-center">
                    <motion.h3
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Intéressé par nos services ?
                    </motion.h3>
                    <motion.p
                        className="text-lg mb-8 text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Contactez-nous dès aujourd'hui pour discuter de vos besoins en data
                        science.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
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
            <Footer />
       </div>
    );
};

export default ServicesPage;
