import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Heart,
  Users,
  Globe,
  BookOpen,
  Camera,
  Phone,
} from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { key: "inicio", label: "Inicio", icon: Heart },
    { key: "quienes-somos", label: "Quiénes Somos", icon: Users },
    { key: "notas-distintivas", label: "Notas Distintivas", icon: BookOpen },
    { key: "mision", label: "Misión", icon: Heart },
    { key: "internacional", label: "Internacional", icon: Globe },
    { key: "proyectos", label: "Proyectos", icon: Camera },
    { key: "noticias", label: "Noticias", icon: BookOpen },
    { key: "contacto", label: "Contacto", icon: Phone },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== "inicio"
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("inicio")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 text-yellow-400" fill="currentColor" />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled || currentPage !== "inicio"
                    ? "text-blue-800"
                    : "text-white"
                }`}
              >
                JUMAVI
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled || currentPage !== "inicio"
                    ? "text-blue-600"
                    : "text-blue-100"
                }`}
              >
                Juventud Mariana Vicentina
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.key
                      ? "bg-blue-600 text-white shadow-md"
                      : isScrolled || currentPage !== "inicio"
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || currentPage !== "inicio"
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
            <nav className="py-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors ${
                      currentPage === item.key
                        ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
