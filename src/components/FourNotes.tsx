import React from 'react';
import { Church, Users, Heart, HandHeart, Star, Book, Globe, Flame } from 'lucide-react';

interface FourNotesProps {
  full?: boolean;
}

const FourNotes: React.FC<FourNotesProps> = ({ full = false }) => {
  const notes = [
    {
      title: 'Eclesial',
      icon: Church,
      color: 'from-purple-600 to-purple-700',
      description: 'Vivimos nuestra fe en comunión con la Iglesia universal.',
      fullDescription: 'Somos parte viva de la Iglesia Católica, participando activamente en la vida parroquial y diocesana. Nuestro compromiso eclesial se manifiesta en la participación en la liturgia, la catequesis y el apostolado, siendo testimonios auténticos del Evangelio en nuestras comunidades.',
      characteristics: [
        'Participación activa en la vida parroquial',
        'Formación doctrinal sólida',
        'Testimonio del Evangelio',
        'Comunión con la jerarquía eclesiástica'
      ]
    },
    {
      title: 'Laical',
      icon: Users,
      color: 'from-green-600 to-green-700',
      description: 'Como laicos, transformamos el mundo desde nuestra condición secular.',
      fullDescription: 'Ejercemos nuestro apostolado en medio del mundo, en nuestros estudios, trabajo y vida familiar. Como laicos comprometidos, somos llamados a ser fermento en la masa, transformando las realidades temporales según el plan de Dios.',
      characteristics: [
        'Compromiso en las realidades temporales',
        'Apostolado en estudios y trabajo',
        'Testimonio en la vida familiar',
        'Transformación social desde el Evangelio'
      ]
    },
    {
      title: 'Mariana',
      icon: Heart,
      color: 'from-blue-600 to-blue-700',
      description: 'María es nuestro modelo de vida y devoción especial.',
      fullDescription: 'Tenemos una devoción especial a la Virgen María, especialmente bajo la advocación de la Medalla Milagrosa. María es nuestro modelo de fe, esperanza y caridad. A través de ella, aprendemos a decir "sí" a Dios y a estar siempre disponibles para el servicio.',
      characteristics: [
        'Devoción a la Medalla Milagrosa',
        'María como modelo de vida',
        'Oración del Rosario',
        'Consagración mariana'
      ]
    },
    {
      title: 'Vicenciana',
      icon: HandHeart,
      color: 'from-yellow-600 to-yellow-700',
      description: 'Seguimos el carisma de San Vicente de Paúl en el servicio a los pobres.',
      fullDescription: 'Vivimos el carisma de San Vicente de Paúl y Santa Luisa de Marillac, centrado en el servicio efectivo y afectivo a los más necesitados. Vemos a Cristo en el rostro del pobre y encontramos en el servicio nuestra forma privilegiada de evangelización.',
      characteristics: [
        'Servicio directo a los más pobres',
        'Espiritualidad vicentina',
        'Simplicidad y humildad',
        'Evangelización por obras'
      ]
    }
  ];

  if (!full) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestras Cuatro Notas Distintivas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos cuatro pilares definen nuestra identidad y guían nuestro caminar como jóvenes comprometidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {notes.map((note, index) => {
              const Icon = note.icon;
              return (
                <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${note.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{note.title}</h3>
                  <p className="text-gray-600">{note.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Nuestras Cuatro Notas Distintivas</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estos cuatro pilares fundamentales definen nuestra identidad como Juventud Mariana Vicentina 
            y orientan todo nuestro caminar espiritual y apostólico.
          </p>
        </div>

        <div className="space-y-16">
          {notes.map((note, index) => {
            const Icon = note.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${note.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-900">{note.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {note.fullDescription}
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Características principales:</h3>
                    <ul className="space-y-3">
                      {note.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                          <span className="text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`lg:w-1/2 bg-gradient-to-br ${note.color} flex items-center justify-center p-8 lg:p-12`}>
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Vivimos como</h3>
                    <p className="text-xl font-semibold">{note.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Unidad en la Diversidad</h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Estas cuatro notas no son elementos separados, sino aspectos complementarios de una misma identidad. 
            Como jóvenes vicentinos, integramos fe y vida, oración y acción, tradición e innovación, 
            siendo signos de esperanza en el mundo de hoy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourNotes;