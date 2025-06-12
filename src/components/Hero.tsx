import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div 
            ref={elementRef}
            className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Especialistas em Marketing
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme Seu{' '}
                <span className="text-gradient">Tráfego</span>{' '}
                em Resultados{' '}
                <span className="text-gradient">Reais</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                <strong>Pare de desperdiçar dinheiro com campanhas amadoras.</strong> Nossa gestão estratégica de tráfego pago e consultoria especializada transformam investimento em marketing em crescimento real e sustentável para sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-green group"
              >
                Quero Multiplicar Meus Resultados
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* <button className="inline-flex items-center px-8 py-4 border-2 border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Cases de Sucesso
              </button> */}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-lime-400 mr-2" />
                  <div className="text-3xl font-bold text-lime-400">2 anos</div>
                </div>
                <div className="text-gray-400 text-sm">Transformando Empresas</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-lime-400 mr-2" />
                  <div className="text-3xl font-bold text-lime-400">+100</div>
                </div>
                <div className="text-gray-400 text-sm">Campanhas Otimizadas</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-lime-400 mr-2" />
                  <div className="text-3xl font-bold text-lime-400">3x</div>
                </div>
                <div className="text-gray-400 text-sm">ROI Médio Alcançado</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-3">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face" 
                    alt="Cliente satisfeito" 
                    className="w-8 h-8 rounded-full border-2 border-lime-400"
                  />
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face" 
                    alt="Cliente satisfeito" 
                    className="w-8 h-8 rounded-full border-2 border-lime-400"
                  />
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face" 
                    alt="Cliente satisfeito" 
                    className="w-8 h-8 rounded-full border-2 border-lime-400"
                  />
                </div>
                <span className="text-lime-400 text-sm font-semibold ml-3">Os parceiros confiam em nós</span>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Em 3 meses, nosso ROI aumentou e reduzimos o custo por lead 30%. Profissionais excepcionais!"
              </p>
            </div>
          </div>

          {/* Enhanced Hero Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Especialista em marketing digital analisando campanhas de tráfego pago"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lime-400 text-sm font-semibold">Campanha Ativa</div>
                      <div className="text-white font-bold">Meta Ads • Google Ads</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime-400 text-lg font-bold">+30%</div>
                      <div className="text-gray-300 text-xs">ROI Este Mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-700 animate-pulse">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-lime-400 mr-2" />
                <div>
                  <div className="text-lime-400 text-xl font-bold">+285%</div>
                  <div className="text-gray-300 text-xs">ROI Último Mês</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-700 animate-pulse">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-lime-400 mr-2" />
                <div>
                  <div className="text-lime-400 text-xl font-bold">R$ 2.1M</div>
                  <div className="text-gray-300 text-xs">Receita Gerada</div>
                </div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute top-1/2 -right-8 bg-lime-400/10 backdrop-blur-sm p-3 rounded-full border border-lime-400/20">
              <Users className="h-6 w-6 text-lime-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-lime-400 text-xs mt-2 font-medium">Role para descobrir</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;