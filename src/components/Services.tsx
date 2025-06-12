import React from 'react';
import { Rocket, Briefcase, BarChart3, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para acelerar o crescimento da sua empresa 
              através do marketing digital estratégico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Gestão de Tráfego */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group hover:shadow-green-dark">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-lime-400/20 transition-colors">
                    <Rocket className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Gestão de Tráfego Pago</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Planejamento, criação e otimização contínua de campanhas nas plataformas 
                  mais relevantes: Meta, Google, YouTube, LinkedIn e TikTok. 
                  Foco total em performance e retorno sobre investimento.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    Meta Ads & Instagram
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    Google Ads
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    YouTube Ads
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    LinkedIn Ads
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="text-lime-400 text-sm font-semibold mb-1">A partir de</div>
                  <div className="text-white text-2xl font-bold">R$ 2.500/mês</div>
                  <div className="text-gray-400 text-sm">+ taxa de mídia</div>
                </div>
              </div>
            </div>

            {/* Consultoria Estratégica */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group hover:shadow-green-dark">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-lime-400/20 transition-colors">
                    <Briefcase className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Consultoria Estratégica</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Aulas práticas, orientação direta e planejamento sob medida para sua empresa ou equipe. 
                  Ganhe autonomia, clareza e confiança na hora de criar campanhas eficazes.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Mentoria 1:1
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Treinamento de Equipes
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Auditoria de Campanhas
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Planejamento Estratégico
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="text-lime-400 text-sm font-semibold mb-1">A partir de</div>
                  <div className="text-white text-2xl font-bold">R$ 1.500/mês</div>
                  <div className="text-gray-400 text-sm">sessões personalizadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;