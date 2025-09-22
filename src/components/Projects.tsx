import React, { useState } from "react";
import {
  Camera,
  Heart,
  Users,
  GraduationCap,
  Home,
  Stethoscope,
  MapPin,
  Award,
} from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos los Proyectos", icon: Camera },
    { id: "social", label: "Acción Social", icon: Heart },
    { id: "education", label: "Educación", icon: GraduationCap },
    { id: "health", label: "Salud", icon: Stethoscope },
    { id: "community", label: "Desarrollo Comunitario", icon: Home },
  ];

  const projects = [
    {
      id: 1,
      title: "Ollas Comunes Solidarias",
      category: "social",
      location: "Lima, Perú",
      description:
        "Preparación y distribución de alimentos calientes para familias en situación de vulnerabilidad en los pueblos jóvenes de Lima.",
      impact: "500 familias beneficiadas semanalmente",
      image:
        "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
    },
    {
      id: 2,
      title: "Renacer a la Esperanza",
      category: "education",
      location: "Lisboa, Portugal",
      description:
        "Programa integral de reinserción social para jóvenes en situación de riesgo, ofreciendo formación técnica y acompañamiento personal.",
      impact: "80 jóvenes formados en oficios",
      image:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
    },
    {
      id: 3,
      title: "Centros de Apoyo Escolar",
      category: "education",
      location: "Asunción, Paraguay",
      description:
        "Espacios de refuerzo académico y acompañamiento pedagógico para niños y adolescentes de barrios periféricos.",
      impact: "200 niños con mejores calificaciones",
      image:
        "https://images.pexels.com/photos/8617838/pexels-photo-8617838.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
    },
    {
      id: 4,
      title: "Clínicas Móviles de Salud",
      category: "health",
      location: "Cusco, Perú",
      description:
        "Atención médica básica gratuita en comunidades rurales andinas con difícil acceso a servicios de salud.",
      impact: "1,200 consultas médicas anuales",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
    },
    {
      id: 5,
      title: "Comedores Comunitarios",
      category: "social",
      location: "Ciudad del Este, Paraguay",
      description:
        "Alimentación diaria para niños en edad escolar de familias de escasos recursos en zonas fronterizas.",
      impact: "150 niños alimentados diariamente",
      image:
        "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
    },
    {
      id: 6,
      title: "Viviendas Solidarias",
      category: "community",
      location: "Porto, Portugal",
      description:
        "Construcción y mejoramiento de viviendas para familias en situación de vulnerabilidad habitacional.",
      impact: "25 familias con vivienda digna",
      image:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Proyectos y Actividades
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conoce algunos de los proyectos que nuestros jóvenes desarrollan
            alrededor del mundo, transformando realidades de pobreza y exclusión
            social.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {filters.find((f) => f.id === project.category)?.label}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">
                      Impacto
                    </span>
                  </div>
                  <p className="text-yellow-700 font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Impacto Global de Nuestros Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                2,500+
              </div>
              <p className="text-blue-100">Familias Beneficiadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                150+
              </div>
              <p className="text-blue-100">Proyectos Activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-blue-100">Comunidades Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                1,000+
              </div>
              <p className="text-blue-100">Jóvenes Voluntarios</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              ¡Sé Parte del Cambio!
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Cada proyecto nace del corazón de jóvenes comprometidos. Únete a
              nosotros y ayuda a transformar vidas.
            </p>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Quiero Participar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
