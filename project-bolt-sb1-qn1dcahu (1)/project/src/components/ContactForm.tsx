import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { redirectToWhatsApp, FormData } from '../utils/whatsapp';

const ContactForm: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.telefone || !formData.interesse) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    redirectToWhatsApp(formData);
  };

  return (
    <section id="formulario" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Contato especialista marketing digital" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} max-w-6xl mx-auto`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Análise Gratuita • Resposta em 2h
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto Para <span className="text-gradient">Multiplicar</span> Seus Resultados?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Preencha os dados abaixo e receba uma <strong>análise gratuita</strong> das suas campanhas atuais + proposta personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              {/* Main Benefits */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-lime-400 mr-2" />
                  O que você vai receber GRÁTIS:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Auditoria Completa das Suas Campanhas</h4>
                      <p className="text-gray-300">Análise detalhada do que está funcionando e o que precisa melhorar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Estratégia Personalizada</h4>
                      <p className="text-gray-300">Plano de ação específico para o seu negócio e objetivos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Projeção de Resultados</h4>
                      <p className="text-gray-300">Estimativa realista do ROI que você pode alcançar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-lime-400/10 to-transparent p-6 rounded-2xl border border-lime-400/20">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                    alt="Cliente satisfeito" 
                    className="w-12 h-12 rounded-full border-2 border-lime-400 mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Marina Silva</h4>
                    <p className="text-gray-400 text-sm">CEO, Loja Virtual Fashion</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Em apenas 2 meses, nosso faturamento aumentou 340% e o custo por aquisição diminuiu 55%. 
                  A análise gratuita já mostrou onde estávamos errando!"
                </p>
                <div className="flex items-center mt-4 text-lime-400 text-sm font-semibold">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Resultado verificado
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Outras formas de contato:</h3>
                
                <div className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <Phone className="h-5 w-5 text-lime-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">(11) 99999-9999</div>
                    <div className="text-gray-400 text-sm">WhatsApp • Resposta imediata</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <Mail className="h-5 w-5 text-lime-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">contato@seudominio.com</div>
                    <div className="text-gray-400 text-sm">E-mail • Resposta em até 2h</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <Clock className="h-5 w-5 text-lime-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Seg - Sex: 8h às 18h</div>
                    <div className="text-gray-400 text-sm">Sáb: 8h às 12h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Solicite Sua Análise Gratuita</h3>
                  <p className="text-gray-300">Preencha os dados e receba sua proposta personalizada</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Nome completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Como podemos te chamar?"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">E-mail profissional *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Seu maior interesse *</label>
                    <select
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Gestão de Tráfego">🚀 Gestão Completa de Tráfego</option>
                      <option value="Consultoria Personalizada">💼 Consultoria e Mentoria</option>
                      <option value="Ambos">⚡ Gestão + Consultoria (Combo)</option>
                      <option value="Auditoria">🔍 Apenas Auditoria das Campanhas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Conte-nos sobre seu negócio</label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Qual seu segmento? Qual seu maior desafio no marketing digital? Quanto investe mensalmente em tráfego?"
                      rows={4}
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="bg-lime-400/10 p-4 rounded-lg border border-lime-400/20">
                    <div className="flex items-center text-lime-400 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Garantia de privacidade:</span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">
                      Seus dados estão seguros. Não compartilhamos informações com terceiros.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-400 text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-green flex items-center justify-center group"
                  >
                    Solicitar Análise Gratuita → WhatsApp
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    Ao enviar, você será redirecionado para nosso WhatsApp com sua mensagem pré-formatada
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;