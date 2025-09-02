import React, { useState } from 'react';
import { Globe, Users, MapPin, Heart, Award, Briefcase, GraduationCap } from 'lucide-react';

const International: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('paraguay');

  const countries = [
    {
      id: 'paraguay',
      name: 'Paraguay',
      flag: '🇵🇾',
      members: '200+',
      locations: '8',
      established: '1995',
      description: 'Una de las provincias más activas de Sudamérica, con presencia en las principales ciudades del país.',
      projects: [
        'Comedores comunitarios en barrios vulnerables',
        'Programas de alfabetización para adultos',
        'Apoyo escolar para niños en riesgo social',
        'Visitas a asilos y hospitales'
      ],
      coordinator: 'María González',
      cities: ['Asunción', 'Ciudad del Este', 'Encarnación', 'Pedro Juan Caballero', 'Coronel Oviedo', 'Caaguazú', 'Villarrica', 'Concepción']
    },
    {
      id: 'portugal',
      name: 'Portugal',
      flag: '🇵🇹',
      members: '150+',
      locations: '12',
      established: '1960',
      description: 'Pioneros en Europa con el proyecto innovador "Renacer a la Esperanza" que ha transformado vidas.',
      projects: [
        'Proyecto "Renacer a la Esperanza" para jóvenes en riesgo',
        'Banco de alimentos para familias necesitadas',
        'Acompañamiento a personas sin hogar',
        'Talleres de formación laboral'
      ],
      coordinator: 'João Silva',
      cities: ['Lisboa', 'Porto', 'Braga', 'Coimbra', 'Setúbal', 'Faro', 'Aveiro', 'Viseu', 'Leiria', 'Santarém', 'Évora', 'Bragança']
    },
    {
      id: 'peru',
      name: 'Perú',
      flag: '🇵🇪',
      members: '400+',
      locations: '15',
      established: '1866',
      description: 'La provincia más antigua de América Latina, con una rica tradición vicentina que se remonta al siglo XIX.',
      projects: [
        'Ollas comunes en pueblos jóvenes de Lima',
        'Escuelas de formación técnica en Arequipa',
        'Atención médica básica en zonas rurales',
        'Programas de microcréditos para mujeres emprendedoras'
      ],
      coordinator: 'Ana Rodríguez',
      cities: ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Huancayo', 'Cusco', 'Iquitos', 'Tacna', 'Piura', 'Chimbote', 'Ayacucho', 'Huaraz', 'Cajamarca', 'Puno', 'Ica']
    }
  ];

  const globalStats = [
    { number: '78', label: 'Países', icon: Globe },
    { number: '30,000+', label: 'Jóvenes', icon: Users },
    { number: '5', label: 'Continentes', icon: MapPin },
    { number: '194', label: 'Años de Historia', icon: Award }
  ];

  const currentCountry = countries.find(c => c.id === selectedCountry) || countries[0];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Presencia Internacional</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JUMAVI está presente en los cinco continentes, uniendo a jóvenes de diferentes culturas 
            bajo el mismo carisma vicentino y mariano.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Country Selector */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Conoce Nuestra Presencia</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all ${
                    selectedCountry === country.id
                      ? 'bg-yellow-400 text-blue-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-semibold">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Country Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl">{currentCountry.flag}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900">{currentCountry.name}</h3>
                    <p className="text-gray-600">Desde {currentCountry.established}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {currentCountry.description}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{currentCountry.members}</div>
                    <div className="text-gray-600">Miembros</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{currentCountry.locations}</div>
                    <div className="text-gray-600">Sedes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{currentCountry.established}</div>
                    <div className="text-gray-600">Fundación</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Briefcase className="w-6 h-6 text-blue-700" />
                    <h4 className="text-lg font-semibold text-blue-900">Coordinación Nacional</h4>
                  </div>
                  <p className="text-gray-700">{currentCountry.coordinator}</p>
                </div>
              </div>

              {/* Projects and Cities */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-yellow-600" />
                    <span>Proyectos Destacados</span>
                  </h4>
                  <div className="space-y-4">
                    {currentCountry.projects.map((project, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                    <span>Ciudades con Presencia</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentCountry.cities.map((city, index) => (
                      <div key={index} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Overview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Presencia por Continentes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Europa</h3>
              <p className="text-gray-600">25 países</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">América</h3>
              <p className="text-gray-600">23 países</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">África</h3>
              <p className="text-gray-600">18 países</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Asia</h3>
              <p className="text-gray-600">10 países</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Oceanía</h3>
              <p className="text-gray-600">2 países</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;