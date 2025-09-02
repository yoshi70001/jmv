import React from 'react';
import { Calendar, Award, Globe, Heart, Users } from 'lucide-react';

interface AboutProps {
  full?: boolean;
}

const About: React.FC<AboutProps> = ({ full = false }) => {
  const timelineEvents = [
    {
      year: '1830',
      title: 'Apariciones a Santa Catalina Labouré',
      description: 'La Virgen María se aparece a Santa Catalina Labouré y le entrega la Medalla Milagrosa, marcando el inicio de la devoción mariana vicentina.',
      icon: Heart
    },
    {
      year: '1840-1850',
      title: 'Reconocimiento Papal',
      description: 'El Papa Pío IX reconoce oficialmente la devoción y bendice el movimiento que comenzaría a expandirse por el mundo.',
      icon: Award
    },
    {
      year: '1999',
      title: 'Estatutos Internacionales',
      description: 'Aprobación de los estatutos internacionales de JMV, formalizando la estructura global del movimiento.',
      icon: Globe
    },
    {
      year: '2024',
      title: 'Presencia Global',
      description: 'Más de 30,000 jóvenes en 78 países viviendo el carisma vicentino y mariano.',
      icon: Users
    }
  ];

  if (!full) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde las apariciones de la Virgen María a Santa Catalina Labouré en 1830, 
              JUMAVI ha crecido hasta convertirse en un movimiento global de jóvenes comprometidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{event.year}</div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
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
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Quiénes Somos</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos la Juventud Mariana Vicentina, un movimiento internacional de jóvenes católicos 
            que desde 1830 vivimos y compartimos el carisma de San Vicente de Paúl y Santa Luisa de Marillac.
          </p>
        </div>

        {/* Detailed History */}
        <div className="space-y-16">
          <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestros Orígenes</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Todo comenzó en 1830 cuando la Virgen María se apareció a Santa Catalina Labouré 
                  en la Rue du Bac, París. En estas apariciones, María entregó la Medalla Milagrosa 
                  y sembró las semillas de lo que sería un movimiento juvenil global.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El carisma vicentino, iniciado por San Vicente de Paúl en el siglo XVII, 
                  encontró en los jóvenes una nueva expresión de servicio a los más pobres 
                  y marginados de la sociedad.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-blue-900" fill="currentColor" />
                </div>
                <blockquote className="text-center">
                  <p className="text-gray-700 italic mb-4">
                    "Que todo lo que hagáis lo hagáis por amor a Nuestro Señor"
                  </p>
                  <cite className="text-blue-700 font-semibold">San Vicente de Paúl</cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Hitos de Nuestra Historia
            </h2>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-3xl font-bold text-yellow-600">{event.year}</span>
                          <h3 className="text-xl font-bold text-blue-900">{event.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión Hoy</h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Somos jóvenes que, inspirados en María y siguiendo el ejemplo de San Vicente de Paúl, 
              nos comprometemos a transformar el mundo a través del servicio a los más pobres, 
              la oración y la vida comunitaria, siendo signos de esperanza en nuestras sociedades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;