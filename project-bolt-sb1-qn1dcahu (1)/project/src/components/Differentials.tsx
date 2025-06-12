import React, { useState, useEffect } from 'react';
import { Target, BarChart3, TrendingUp, Brain, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Differentials: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const differentials = [
    {
      icon: Target,
      text: 'Especialistas com mais de 4 anos de experiência',
      description: 'Equipe sênior com histórico comprovado em campanhas de alta performance'
    },
    {
      icon: BarChart3,
      text: 'Campanhas criadas com base em dados reais',
      description: 'Análise profunda de mercado, concorrência e comportamento do público'
    },
    {
      icon: TrendingUp,
      text: 'Relatórios completos e transparentes',
      description: 'Dashboards detalhados com métricas e insights acionáveis'
    },
    {
      icon: Brain,
      text: 'Abordagem totalmente personalizada',
      description: 'Estratégias únicas desenvolvidas para as necessidades do seu negócio'
    },
    {
      icon: CheckCircle,
      text: 'Suporte contínuo e atualizações constantes',
      description: 'Acompanhamento dedicado e otimizações baseadas em performance'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === differentials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [differentials.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === differentials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? differentials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="diferenciais" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O Que Nos <span className="text-gradient">Diferencia</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça os pilares que fazem a diferença nos nossos resultados
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-lime-400/50 transition-all duration-300 group hover:shadow-green-dark"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-lime-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.text}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {differentials.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                              <IconComponent className="h-10 w-10 text-lime-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.text}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {differentials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-lime-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;