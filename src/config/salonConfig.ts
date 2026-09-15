export const salonConfig = {
  name: "Ateliê Bella",
  slogan: "Beleza autoral, cuidado artesanal",
  description:
    "Salão de beleza em Icaraí, Niterói. Cabelo, unhas, sobrancelhas e estética facial com atendimento personalizado.",
  whatsapp: {
    // Formato internacional, apenas dígitos
    number: "5521999998888",
    display: "(21) 99999-8888",
    defaultMessage:
      "Olá! Vim pelo site do Ateliê Bella e gostaria de agendar um horário.",
  },
  instagram: {
    handle: "@ateliebella",
    url: "https://instagram.com/ateliebella",
  },
  email: "contato@ateliebella.com.br",
  address: {
    street: "Rua Moreira César, 229 — Sala 704",
    district: "Icaraí",
    city: "Niterói",
    state: "RJ",
    zip: "24230-052",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Moreira+Cesar+229+Icarai+Niteroi+RJ",
  },
  hours: [
    { day: "Terça a Sexta", time: "09h — 20h" },
    { day: "Sábado", time: "09h — 18h" },
    { day: "Domingo e Segunda", time: "Fechado" },
  ],
  rating: {
    score: "4,9",
    source: "Google Avaliações",
    count: 238,
  },
  serviceCategories: [
    {
      title: "Cabelo",
      items: [
        { name: "Corte feminino + finalização", price: "R$ 140" },
        { name: "Coloração e retoque de raiz", price: "a partir de R$ 220" },
        { name: "Mechas e iluminado", price: "a partir de R$ 480" },
        { name: "Tratamento de reconstrução", price: "R$ 190" },
      ],
    },
    {
      title: "Unhas",
      items: [
        { name: "Manicure clássica", price: "R$ 55" },
        { name: "Pedicure spa", price: "R$ 75" },
        { name: "Alongamento em gel", price: "a partir de R$ 230" },
        { name: "Nail art autoral", price: "a partir de R$ 40" },
      ],
    },
    {
      title: "Sobrancelhas & Cílios",
      items: [
        { name: "Design com henna", price: "R$ 70" },
        { name: "Micropigmentação fio a fio", price: "R$ 690" },
        { name: "Lash lifting", price: "R$ 180" },
        { name: "Extensão de cílios", price: "a partir de R$ 250" },
      ],
    },
    {
      title: "Estética facial",
      items: [
        { name: "Limpeza de pele profunda", price: "R$ 210" },
        { name: "Peeling de diamante", price: "R$ 260" },
        { name: "Skinbooster facial", price: "R$ 390" },
        { name: "Massagem lifting", price: "R$ 160" },
      ],
    },
  ],
  testimonials: [
    {
      name: "Carolina Meireles",
      initials: "CM",
      text: "Saio do Ateliê Bella sempre me sentindo outra pessoa. O cuidado com o cabelo loiro aqui é incomparável em Niterói.",
      service: "Mechas e iluminado",
    },
    {
      name: "Renata Duarte",
      initials: "RD",
      text: "Ambiente acolhedor, horário respeitado e um trabalho de sobrancelhas impecável. Virei cliente fiel no primeiro atendimento.",
      service: "Design com henna",
    },
    {
      name: "Juliana Prado",
      initials: "JP",
      text: "A limpeza de pele mudou minha rotina de skincare. Atendimento atencioso do início ao fim, com produtos excelentes.",
      service: "Limpeza de pele profunda",
    },
  ],
  faq: [
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos Pix, dinheiro, cartões de débito e crédito em até 3x sem juros. Também emitimos nota fiscal quando solicitada.",
    },
    {
      question: "Como funciona o agendamento?",
      answer:
        "Todo o agendamento é feito pelo WhatsApp. Basta tocar no botão verde no canto da tela, dizer o serviço desejado e escolhemos juntas o melhor horário.",
    },
    {
      question: "Tem estacionamento no local?",
      answer:
        "Sim. O prédio possui estacionamento conveniado com valor reduzido para clientes, além de estacionamentos rotativos na Rua Moreira César.",
    },
    {
      question: "Posso remarcar ou cancelar meu horário?",
      answer:
        "Claro. Pedimos apenas um aviso com no mínimo 4 horas de antecedência para que possamos oferecer o horário a outra cliente.",
    },
    {
      question: "Atendem noivas e eventos?",
      answer:
        "Sim, temos pacotes de dia da noiva e atendimento para madrinhas e formandas, com agendamento antecipado.",
    },
  ],
} as const;

export const whatsappLink = (message: string = salonConfig.whatsapp.defaultMessage) =>
  `https://wa.me/${salonConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const fullAddress = `${salonConfig.address.street}, ${salonConfig.address.district}, ${salonConfig.address.city} - ${salonConfig.address.state}, ${salonConfig.address.zip}`;
