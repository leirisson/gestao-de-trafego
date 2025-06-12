export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  mensagem: string;
}

export const generateWhatsAppMessage = (data: FormData): string => {
  const message = `Olá, tenho interesse em ${data.interesse}. 

Meu nome é ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone}

Minha necessidade é: ${data.mensagem}`;

  return encodeURIComponent(message);
};

export const redirectToWhatsApp = (data: FormData, phoneNumber: string = '5511999999999') => {
  const message = generateWhatsAppMessage(data);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
};