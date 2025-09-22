import React from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { key: "inicio", label: "Inicio" },
    { key: "quienes-somos", label: "Quiénes Somos" },
    { key: "notas-distintivas", label: "Notas Distintivas" },
    { key: "mision", label: "Misión" },
  ];

  const resources = [
    { key: "internacional", label: "Presencia Internacional" },
    { key: "proyectos", label: "Proyectos" },
    { key: "noticias", label: "Noticias" },
    { key: "contacto", label: "Contacto" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Heart
                    className="w-6 h-6 text-blue-900"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">JUMAVI</h3>
                  <p className="text-blue-200 text-sm">
                    Juventud Mariana Vicentina
                  </p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Movimiento juvenil internacional que vive el carisma de San
                Vicente de Paúl y Santa Luisa de Marillac, presente en 78 países
                con más de 30,000 jóvenes comprometidos.
              </p>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleNavClick(link.key)}
                      className="text-blue-100 hover:text-yellow-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Recursos</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.key}>
                    <button
                      onClick={() => handleNavClick(resource.key)}
                      className="text-blue-100 hover:text-yellow-400 transition-colors cursor-pointer"
                    >
                      {resource.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-100">info@jumavi.org</p>
                    <p className="text-blue-200 text-sm">Respuesta en 24-48h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-100">+33 1 42 78 47 00</p>
                    <p className="text-blue-200 text-sm">Lun-Vie 9:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-100">95 Rue de Sèvres</p>
                    <p className="text-blue-100">París, Francia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-blue-800 py-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Mantente Conectado
            </h3>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              Recibe nuestras noticias, eventos y oportunidades de participación
              directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              <p>
                &copy; 2024 Juventud Mariana Vicentina. Todos los derechos
                reservados.
              </p>
              <p className="mt-1">
                Fundada en 1830 • Presente en 78 países • Más de 30,000 jóvenes
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors group"
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-5 h-5 text-blue-900 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="border-t border-blue-800 py-8 text-center">
          <blockquote className="text-lg text-blue-100 italic max-w-3xl mx-auto">
            "Que todo lo que hagáis lo hagáis por amor a Nuestro Señor"
          </blockquote>
          <cite className="text-yellow-400 font-semibold mt-2 block">
            San Vicente de Paúl
          </cite>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
