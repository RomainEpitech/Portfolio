import React from 'react';
import { Code2, Smartphone, Server, Database } from 'lucide-react';

const ExpertiseCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div 
      className="relative group cursor-pointer animate-fadeIn"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
      <div className="relative p-6 backdrop-blur-md border border-white/10 rounded-xl bg-black/30 hover:bg-black/40 transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const expertiseData = [
    {
      icon: Code2,
      title: "Full Stack",
      description: "Développement d'applications web complètes, de l'interface utilisateur à l'architecture backend",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Création d'applications mobiles natives et cross-platform performantes",
    },
    {
      icon: Server,
      title: "DevOps",
      description: "Gestion d'infrastructures cloud et automatisation des déploiements",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Conception et optimisation de bases de données, traitement de données",
    }
  ];

  return (
    <div className="mt-12 w-full max-w-[90vw] md:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertiseData.map((expertise, index) => (
          <ExpertiseCard
            key={index}
            icon={expertise.icon}
            title={expertise.title}
            description={expertise.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;

// Ajoutez ces styles dans votre fichier global.css ou tailwind.config.js
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}
`;  