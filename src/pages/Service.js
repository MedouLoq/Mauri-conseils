import React from "react";
import { TrendingUp, Database, Server } from "lucide-react";
// Services Page
const ServicesPage = () => {
    const services = [
        {
            title: "Analyse Prédictive",
            description: "Anticipez les tendances futures grâce à des modèles statistiques avancés.",
            icon: TrendingUp
        },
        {
            title: "Traitement de Données",
            description: "Nettoyage, transformation et préparation de vos données complexes.",
            icon: Database
        },
        {
            title: "Machine Learning",
            description: "Développement de modèles intelligents pour l'automatisation des décisions.",
            icon: Server
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                    Nos Services de Data Science
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <service.icon className="text-blue-600" size={50} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage