// config.js - Altere apenas este arquivo para um novo cliente!
const SALAO_CONFIG = {
  nome: "Ateliê Bella",
  whatsapp: "5521999998888", // DDI + DDD + Número
  mensagemPadrao: "Olá! Gostaria de agendar um horário.",
  instagram: "@ateliebella",
  instagramUrl: "https://instagram.com/ateliebella",
  endereco: "Rua Cel. Moreira César, 250 - Icaraí, Niterói - RJ",
  googleMapsUrl: "https://maps.google.com/?q=Icarai+Niteroi+RJ",
  horarioSemana: "Terça a Sábado: 09h às 19h",
};

document.addEventListener("DOMContentLoaded", () => {
  const zapUrl = `https://wa.me/${SALAO_CONFIG.whatsapp}?text=${encodeURIComponent(SALAO_CONFIG.mensagemPadrao)}`;
  
  // Atualiza todos os botões de WhatsApp de uma só vez
  document.querySelectorAll(".btn-whatsapp").forEach(el => el.href = zapUrl);
});
