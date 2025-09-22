import React, { useState } from "react";
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todas las Noticias" },
    { id: "events", label: "Eventos" },
    { id: "projects", label: "Proyectos" },
    { id: "formation", label: "Formación" },
    { id: "international", label: "Internacional" },
  ];

  const news = [
    {
      id: 1,
      title: "Encuentro Internacional de Jóvenes JMV 2024",
      category: "events",
      date: "2024-01-15",
      author: "Secretariado Internacional",
      excerpt:
        "Más de 500 jóvenes de 30 países se reunirán en París para celebrar el carisma vicentino y planificar nuevos proyectos sociales.",
      content:
        "El próximo encuentro internacional reunirá a representantes de todas las provincias para tres días de formación, intercambio y planificación estratégica.",
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min",
      views: 1240,
    },
    {
      id: 2,
      title: 'Nuevo Proyecto "Esperanza Digital" en Colombia',
      category: "projects",
      date: "2024-01-10",
      author: "JMV Colombia",
      excerpt:
        "Inauguramos aulas de informática en tres comunidades rurales, beneficiando a más de 200 niños y adolescentes.",
      content:
        "El proyecto busca reducir la brecha digital en zonas rurales, proporcionando acceso a tecnología y formación básica en informática.",
      image:
        "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min",
      views: 892,
    },
    {
      id: 3,
      title: "Curso de Formación en Espiritualidad Vicentina",
      category: "formation",
      date: "2024-01-08",
      author: "Equipo de Formación",
      excerpt:
        "Inicia el curso virtual sobre los fundamentos de la espiritualidad vicentina, dirigido a nuevos miembros y animadores.",
      content:
        "Un recorrido de 8 semanas por los principales aspectos de la espiritualidad de San Vicente de Paúl y Santa Luisa de Marillac.",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min",
      views: 657,
    },
    {
      id: 4,
      title: "JMV Brasil Celebra 50 Años de Presencia Nacional",
      category: "international",
      date: "2024-01-05",
      author: "JMV Brasil",
      excerpt:
        "Medio siglo de compromiso social y evangelización juvenil en tierras brasileñas, con más de 2,000 jóvenes activos.",
      content:
        "Una celebración especial marcará este hito histórico, recordando los frutos del carisma vicentino en Brasil.",
      image:
        "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min",
      views: 1580,
    },
    {
      id: 5,
      title: 'Campaña "Un Plato de Amor" Supera las Expectativas',
      category: "projects",
      date: "2024-01-03",
      author: "Coordinación Internacional",
      excerpt:
        "La campaña navideña logró servir más de 10,000 comidas en 15 países, superando la meta inicial del 150%.",
      content:
        "Jóvenes de todo el mundo se unieron para llevar alimentación y alegría a familias necesitadas durante las fiestas navideñas.",
      image:
        "https://images.pexels.com/photos/6995245/pexels-photo-6995245.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min",
      views: 2130,
    },
    {
      id: 6,
      title: "Retiro de Jóvenes Animadores en México",
      category: "formation",
      date: "2023-12-28",
      author: "JMV México",
      excerpt:
        "Encuentro formativo para 80 animadores de grupos juveniles, enfocado en metodologías pedagógicas vicentinas.",
      content:
        "Tres días intensivos de formación en liderazgo juvenil, espiritualidad y metodologías de acompañamiento.",
      image:
        "https://images.pexels.com/photos/4144924/pexels-photo-4144924.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min",
      views: 743,
    },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Noticias y Actualidad
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mantente al día con las últimas noticias, eventos y proyectos de
            JUMAVI en todo el mundo.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </span>
                    <span className="text-gray-500 text-sm">
                      {formatDate(filteredNews[0].date)}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {filteredNews[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{filteredNews[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{filteredNews[0].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{filteredNews[0].views}</span>
                      </div>
                    </div>
                    <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center space-x-2">
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                  {new Date(article.date).getFullYear()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(article.date)}</span>
                </div>

                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Eye className="w-3 h-3" />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Mantente Informado
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir las últimas noticias,
            eventos y oportunidades de participación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
