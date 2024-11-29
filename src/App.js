import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {  Linkedin,Twitter, Server, Mail} from "lucide-react";
import  Navigation  from "./components/Navigation";
import HomePage  from "./pages/Home";
import ServicesPage from "./pages/Service";
import AboutUsPage from "./pages/AboutUsPage";




// Home Page









// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: "Prévision des Ventes",
      description: "Modèle prédictif pour une chaîne de supermarchés",
      technologies: ["Python", "Scikit-learn", "Pandas"]
    },
    {
      title: "Analyse de Sentiment",
      description: "Analyse des commentaires clients pour une entreprise de télécommunication",
      technologies: ["NLP", "TensorFlow", "BERT"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Nos Projets de Data Science
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Contactez Mauri-Conseils
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Nos Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-600" />
                <span>contact@mauri-conseils.com</span>
              </div>
              <div className="flex items-center">
                <Server className="mr-3 text-blue-600" />
                <span>+222 33 25 26 44</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="/" className="text-blue-700 hover:text-blue-900"><Linkedin /></a>
                <a href="/" className="text-blue-700 hover:text-blue-900"><Linkedin /></a>
                <a href="/" className="text-blue-700 hover:text-blue-900"><Twitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>&copy; 2024 Mauri-Conseils. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;