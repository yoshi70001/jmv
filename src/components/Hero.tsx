import React from 'react';
import { Heart, Users, Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-semibold">
                <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                Desde 1830 al servicio de los más necesitados
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Juventud
              <span className="block text-yellow-400">Mariana</span>
              <span className="block">Vicentina</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Un movimiento juvenil internacional que vive el carisma de San Vicente de Paúl 
              y Santa Luisa de Marillac, presente en 78 países con más de 30,000 jóvenes 
              comprometidos con la transformación social.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 flex items-center justify-center group">
                Únete al Movimiento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200">
                Conoce Nuestra Historia
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400 mb-2">78</div>
                <div className="text-blue-100">Países</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400 mb-2">30,000+</div>
                <div className="text-blue-100">Jóvenes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-yellow-400 mb-2">194</div>
                <div className="text-blue-100">Años de Historia</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Cuatro Notas Distintivas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700">Eclesial</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700">Laical</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700">Mariana</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-blue-700">Vicenciana</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;