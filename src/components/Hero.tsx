import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A3E635' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div 
            ref={elementRef}
            className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme Seu{' '}
                <span className="text-gradient">Tráfego</span>{' '}
                em Resultados Reais
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Estratégias personalizadas para campanhas que convertem. 
                Gestão de tráfego e consultoria especializada para empresas que querem crescer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-green group"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Cases de Sucesso
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-400">4+</div>
                <div className="text-gray-400 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-400">150+</div>
                <div className="text-gray-400 text-sm">Campanhas Otimizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-400">3x</div>
                <div className="text-gray-400 text-sm">ROI Médio</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profissional analisando campanhas de tráfego"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700">
              <div className="text-lime-400 text-2xl font-bold">+285%</div>
              <div className="text-gray-300 text-sm">ROI Último Mês</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700">
              <div className="text-lime-400 text-2xl font-bold">R$ 2.1M</div>
              <div className="text-gray-300 text-sm">Receita Gerada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;