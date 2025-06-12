import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Sua Empresa Precisa de{' '}
              <span className="text-gradient">Marketing Digital Inteligente?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Muitas empresas ainda tratam campanhas de anúncios como algo aleatório — 
              impulsionando posts sem estratégia real. Nós mudamos esse cenário com 
              gestão profissional de tráfego pago e consultoria estratégica focada em ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Target className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Estratégia Direcionada</h3>
                <p className="text-gray-300 leading-relaxed">
                  Cada campanha é planejada com base em dados reais do seu mercado, 
                  público-alvo e objetivos específicos do negócio.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Otimização Contínua</h3>
                <p className="text-gray-300 leading-relaxed">
                  Monitoramento 24/7 das campanhas com ajustes em tempo real 
                  para maximizar performance e reduzir custos.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Zap className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Resultados Rápidos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementação ágil de campanhas que começam a gerar 
                  resultados nas primeiras semanas de ativação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;