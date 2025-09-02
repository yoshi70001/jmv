import React from 'react';
import { Target, Heart, Users, Globe, Lightbulb, BookOpen, Hand as Hands, Star } from 'lucide-react';

interface MissionProps {
  full?: boolean;
}

const Mission: React.FC<MissionProps> = ({ full = false }) => {
  const objectives = [
    {
      icon: Heart,
      title: 'Formación Integral',
      description: 'Promover la formación humana, cristiana y vicentina de los jóvenes',
      details: 'A través de encuentros, retiros, formaciones y acompañamiento personal, buscamos el crecimiento integral de cada joven en todas las dimensiones de su vida.'
    },
    {
      icon: Hands,
      title: 'Servicio a los Pobres',
      description: 'Desarrollar proyectos sociales que transformen realidades de pobreza',
      details: 'Implementamos proyectos concretos de asistencia, educación y desarrollo comunitario, siguiendo el ejemplo de San Vicente de Paúl.'
    },
    {
      icon: Users,
      title: 'Vida Comunitaria',
      description: 'Fomentar la fraternidad y el sentido de pertenencia',
      details: 'Creamos espacios de encuentro, diálogo y celebración que fortalecen los vínculos fraternos entre los jóvenes del movimiento.'
    },
    {
      icon: Globe,
      title: 'Evangelización',
      description: 'Ser testimonios vivos del Evangelio en nuestros ambientes',
      details: 'A través del testimonio de vida, la palabra y las obras, llevamos la Buena Nueva de Jesús a todos los espacios donde estamos presentes.'
    }
  ];

  const values = [
    { name: 'Simplicidad', description: 'Vivimos con sencillez, lejos del lujo y la ostentación' },
    { name: 'Humildad', description: 'Reconocemos nuestras limitaciones y servimos sin buscar reconocimiento' },
    { name: 'Caridad', description: 'El amor a Dios y al prójimo es el motor de todas nuestras acciones' },
    { name: 'Mortificación', description: 'Renunciamos a nosotros mismos para estar disponibles al servicio' },
    { name: 'Celo', description: 'Ardemos en deseos de que el Reino de Dios se haga realidad' }
  ];

  if (!full) {
    return (
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestra Misión</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ser jóvenes que transforman el mundo a través del servicio a los más pobres, 
              siguiendo a María y el carisma de San Vicente de Paúl.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{objective.title}</h3>
                  <p className="text-blue-100 text-sm">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Misión y Objetivos</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestra misión es ser jóvenes que transforman el mundo a través del servicio efectivo y afectivo 
            a los más pobres, siguiendo a María y viviendo el carisma de San Vicente de Paúl.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 lg:p-12 mb-16 text-center text-white">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-blue-900" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Somos jóvenes católicos que, inspirados en María Inmaculada y siguiendo el carisma de 
            San Vicente de Paúl y Santa Luisa de Marillac, nos comprometemos a vivir y anunciar 
            el Evangelio mediante el servicio preferencial a los más pobres y abandonados, 
            siendo instrumentos de transformación social y signos de esperanza en el mundo.
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Nuestros Objetivos</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${objective.title === 'Formación Integral' ? 'from-red-500 to-red-600' : 
                      objective.title === 'Servicio a los Pobres' ? 'from-green-500 to-green-600' : 
                      objective.title === 'Vida Comunitaria' ? 'from-purple-500 to-purple-600' : 
                      'from-blue-500 to-blue-600'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{objective.title}</h3>
                      <p className="text-gray-700 mb-4">{objective.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{objective.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="bg-yellow-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Nuestros Valores Vicentinos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-400" fill="currentColor" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{value.name}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">¡Únete a Nuestra Misión!</h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Si sientes el llamado a servir a los más necesitados y quieres vivir tu fe 
              de manera comprometida, JUMAVI es tu lugar.
            </p>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Contacta con nosotros</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;