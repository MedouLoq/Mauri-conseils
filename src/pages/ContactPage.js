// src/pages/ContactPage.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        // Send form data via EmailJS
        emailjs
            .send(
                'service_c6t13do', // Replace with your EmailJS service ID
                'template_qs0bh0y', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                '7tGcDps9OuTK2buyM' // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    alert('Merci pour votre message!');
                    // Reset form fields
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    setIsSubmitting(false);
                },
                (error) => {
                    console.error('There was an error sending the email:', error);
                    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="relative bg-blue-900">
                <div className="absolute inset-0">
                    <img
                        src="/images/contact-hero.jpg" // Replace with your own image
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-5xl font-extrabold text-white text-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Contactez-nous
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-xl text-blue-100 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Nous serions ravis de discuter de vos besoins en data science.
                    </motion.p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Entrer en Contact</h3>
                        <p className="text-gray-600 mb-6">
                            Remplissez le formulaire et nous reviendrons vers vous dès que possible.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 text-blue-600" size={20} />
                                <a href="mailto:contact@mauri-conseils.com" className="text-gray-700 hover:text-blue-600">
                                    contact@mauri-conseils.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="mr-3 text-blue-600" size={20} />
                                <a href="tel:+22233252644" className="text-gray-700 hover:text-blue-600">
                                    +222 33 25 26 44
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-3 text-blue-600" size={20} />
                                <span className="text-gray-700">Nouakchott, Mauritanie</span>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-8">
                            <a
                                href="https://linkedin.com/company/mauri-conseils"
                                className="text-blue-700 hover:text-blue-900"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href="https://twitter.com/mauri_conseils"
                                className="text-blue-700 hover:text-blue-900"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter size={28} />
                            </a>
                            <a
                                href="https://facebook.com/mauri.conseils"
                                className="text-blue-700 hover:text-blue-900"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF size={28} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    rows="6"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="relative">
                <iframe
                    title="Mauri-Conseils Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.543939171798!2d-15.979389024906695!3d18.07902199248256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb5ca8c07bbcb35%3A0xe0b89e1b5c4b7c5a!2sNouakchott%2C%20Mauritania!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ContactPage;
