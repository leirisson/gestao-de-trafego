import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
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
    <section id="formulario" className="py-20 bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={elementRef}
          className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} max-w-4xl mx-auto`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos <span className="text-gradient">Conversar?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Preencha os dados abaixo e receba uma proposta personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Por que escolher nossa consultoria?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Análise Gratuita</h4>
                      <p className="text-gray-300">Auditoria completa das suas campanhas atuais</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Proposta Personalizada</h4>
                      <p className="text-gray-300">Estratégia sob medida para seu negócio</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-gray-900 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Suporte Dedicado</h4>
                      <p className="text-gray-300">Acompanhamento direto com especialistas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-lime-400 mr-2" />
                  <h4 className="text-white font-semibold">Resposta Rápida</h4>
                </div>
                <p className="text-gray-300">
                  Respondemos em até 2 horas durante horário comercial. 
                  Sua mensagem será direcionada diretamente para nosso WhatsApp.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo *"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Seu melhor e-mail *"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="Seu telefone (com DDD) *"
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <select
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Escolha seu interesse *</option>
                      <option value="Gestão de Tráfego">Gestão de Tráfego</option>
                      <option value="Consultoria Personalizada">Consultoria Personalizada</option>
                      <option value="Ambos">Ambos</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva brevemente suas necessidades"
                      rows={4}
                      className="w-full px-4 py-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-400 text-gray-900 font-bold py-4 px-6 rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-green flex items-center justify-center group"
                  >
                    Enviar Mensagem → WhatsApp
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
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