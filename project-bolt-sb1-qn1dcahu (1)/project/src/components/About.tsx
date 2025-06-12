import React from 'react';
import { Target, TrendingUp, Zap, Shield, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Background analytics" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              A Diferença Entre Amador e Profissional
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Sua Empresa Precisa de{' '}
              <span className="text-gradient">Marketing Digital Inteligente?</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              <strong>80% das empresas desperdiçam dinheiro</strong> tratando campanhas de anúncios como algo aleatório — 
              impulsionando posts sem estratégia real, sem segmentação adequada e sem acompanhamento profissional.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
              <p className="text-lime-400 font-semibold text-lg">
                Nós mudamos esse cenário com gestão profissional de tráfego pago e consultoria estratégica focada em ROI real.
              </p>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Problem Side */}
            <div className="bg-red-900/20 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Abordagem Amadora
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✗</span>
                  Impulsionar posts sem estratégia
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✗</span>
                  Segmentação genérica e imprecisa
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✗</span>
                  Sem acompanhamento de métricas
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✗</span>
                  Orçamento desperdiçado
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-3">✗</span>
                  Resultados inconsistentes
                </li>
              </ul>
            </div>

            {/* Solution Side */}
            <div className="bg-lime-900/20 backdrop-blur-sm p-8 rounded-2xl border border-lime-500/30">
              <h3 className="text-2xl font-bold text-lime-400 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Nossa Abordagem Profissional
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-3">✓</span>
                  Estratégia baseada em dados reais
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-3">✓</span>
                  Segmentação precisa e personalizada
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-3">✓</span>
                  Monitoramento das campanhas
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-3">✓</span>
                  Otimização contínua do orçamento
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-3">✓</span>
                  ROI previsível e escalável
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Target className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Estratégia Direcionada</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cada campanha é planejada com base em análise profunda do seu mercado, 
                  público-alvo e objetivos específicos do negócio.
                </p>
                <div className="flex items-center text-lime-400 text-sm font-semibold">
                  <Clock className="h-4 w-4 mr-2" />
                  Os melhores resultados
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Otimização Contínua</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Monitoramento das campanhas com ajustes em tempo real 
                  para maximizar performance e reduzir custos.
                </p>
                <div className="flex items-center text-lime-400 text-sm font-semibold">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Otimização diária
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
                  <Zap className="h-8 w-8 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Resultados Rápidos</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Implementação ágil de campanhas que começam a gerar 
                  resultados nas primeiras semanas de ativação.
                </p>
                <div className="flex items-center text-lime-400 text-sm font-semibold">
                  <Users className="h-4 w-4 mr-2" />
                  Suporte dedicado
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-16 bg-gradient-to-r from-lime-400/10 to-transparent p-8 rounded-2xl border border-lime-400/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">110%</div>
                <div className="text-gray-300 text-sm">Aumento médio de ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Redução no custo por lead</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">3x</div>
                <div className="text-gray-300 text-sm">Mais conversões</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400 mb-2">30 dias</div>
                <div className="text-gray-300 text-sm">Para primeiros resultados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;