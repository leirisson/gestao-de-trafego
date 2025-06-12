import React from 'react';
import { Rocket, Briefcase, BarChart3, Users, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Team working on digital marketing" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gray-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-sm font-medium mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Soluções Que Transformam Negócios
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas para acelerar o crescimento da sua empresa 
              através do marketing digital estratégico e baseado em resultados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {/* Gestão de Tráfego */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group hover:shadow-green-dark overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Gestão de tráfego pago - campanhas de alta performance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-lime-400 text-sm font-semibold">
                    <Rocket className="h-4 w-4 mr-2" />
                    Serviço Premium
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-lime-400/20 transition-colors">
                    <Rocket className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Gestão de Tráfego Pago</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  <strong>Transforme investimento em resultados previsíveis.</strong> Planejamento estratégico, criação e otimização contínua de campanhas nas plataformas mais relevantes com foco total em performance e ROI.
                </p>

                {/* Platforms */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    Meta Ads & Instagram
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    Google Ads
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    YouTube Ads
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-lime-400 mr-2" />
                    LinkedIn Ads
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">O que está incluído:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Auditoria completa das campanhas atuais
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Criação de campanhas estratégicas
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Otimização diária e relatórios semanais
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Suporte direto via WhatsApp
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lime-400 text-sm font-semibold mb-1">Investimento a partir de</div>
                      <div className="text-white text-3xl font-bold">R$ 2.500<span className="text-lg text-gray-400">/mês</span></div>
                      <div className="text-gray-400 text-sm">+ taxa de mídia (negociável)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime-400 text-2xl font-bold">ROI</div>
                      <div className="text-white text-xl font-semibold">3-5x</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  className="w-full bg-lime-400 text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-green flex items-center justify-center group"
                >
                  Quero Multiplicar Meus Resultados
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Consultoria Estratégica */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 group hover:shadow-green-dark overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Consultoria estratégica em marketing digital" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-lime-400 text-sm font-semibold">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Mentoria Especializada
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-lime-400/20 transition-colors">
                    <Briefcase className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Consultoria Estratégica</h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  <strong>Ganhe autonomia e conhecimento estratégico.</strong> Mentoria prática, orientação direta e planejamento sob medida para sua empresa ou equipe dominar o marketing digital.
                </p>

                {/* Service Types */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Mentoria 1:1
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <Users className="h-5 w-5 text-lime-400 mr-2" />
                    Treinamento de Equipes
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <Target className="h-5 w-5 text-lime-400 mr-2" />
                    Auditoria de Campanhas
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-700/30 p-3 rounded-lg">
                    <Zap className="h-5 w-5 text-lime-400 mr-2" />
                    Planejamento Estratégico
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">O que você vai aprender:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Estratégias avançadas de segmentação
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Criação de campanhas de alta conversão
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Análise e otimização de métricas
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-lime-400 mr-2" />
                      Escalabilidade e automação
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-xl mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lime-400 text-sm font-semibold mb-1">Investimento a partir de</div>
                      <div className="text-white text-3xl font-bold">R$ 1.500<span className="text-lg text-gray-400">/mês</span></div>
                      <div className="text-gray-400 text-sm">sessões personalizadas</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime-400 text-2xl font-bold">Economia</div>
                      <div className="text-white text-xl font-semibold">50%+</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToForm}
                  className="w-full bg-transparent border-2 border-lime-400 text-lime-400 font-bold py-4 px-6 rounded-lg hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
                >
                  Quero Dominar o Marketing Digital
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Success Cases Preview */}
          <div className="bg-gradient-to-r from-lime-400/10 to-transparent p-8 rounded-2xl border border-lime-400/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="Case de sucesso e-commerce" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-white font-semibold mb-2">E-commerce de Moda</h4>
                <p className="text-lime-400 text-2xl font-bold">+110% ROI</p>
                <p className="text-gray-300 text-sm">em 3 meses</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="Case de sucesso consultoria" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-white font-semibold mb-2">Consultoria Jurídica</h4>
                <p className="text-lime-400 text-2xl font-bold">-65% CPL</p>
                <p className="text-gray-300 text-sm">custo por lead</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="Case de sucesso saúde" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-white font-semibold mb-2">Clínica de Estética</h4>
                <p className="text-lime-400 text-2xl font-bold">+250% Leads</p>
                <p className="text-gray-300 text-sm">qualificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;