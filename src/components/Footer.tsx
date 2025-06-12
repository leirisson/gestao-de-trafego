import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Marketing <span className="text-lime-400">Digital</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformando empresas através de estratégias inteligentes 
              de tráfego pago e consultoria especializada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/seuperfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 text-lime-400 group-hover:text-gray-900" />
              </a>
              <a 
                href="https://linkedin.com/seuperfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-lime-400 group-hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Gestão de Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Meta Ads & Instagram
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-lime-400 transition-colors">
                  Google Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-lime-400 mr-3" />
                contato@seudominio.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-lime-400 mr-3" />
                (11) 99999-9999
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="#formulario"
                className="inline-flex items-center px-6 py-3 bg-lime-400 text-gray-900 font-semibold rounded-lg hover:bg-lime-300 transition-all duration-300 group"
              >
                Fale Conosco
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 | Todos os direitos reservados
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;