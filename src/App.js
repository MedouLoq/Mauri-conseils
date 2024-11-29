import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import  Navigation  from "./components/Navigation";
import HomePage  from "./pages/Home";
import ServicesPage from "./pages/Service";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";




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