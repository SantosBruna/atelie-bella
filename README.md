# Bella Salon Showcase

Crie a landing page profissional do 'Ateliê Bella' (salão de beleza fictício e template comercial para clientes reais), baseado no design sofisticado do repositório https://github.com/SantosBruna/atelie-bella com os seguintes refinamentos essenciais:

1. REMOÇÃO DOS BOTÕES 'AGENDE SEU HORÁRIO':
- Remova os botões 'Agende seu horário' do header, do hero, da seção de serviços e da localização.
- Mantenha apenas o botão flutuante elegante e fixo do WhatsApp no canto inferior direito da tela, com ícone do WhatsApp em SVG e texto/tooltip sutil para agendamento rápido.

2. RODAPÉ E INSTAGRAM:
- No rodapé, coloque o ícone oficial em SVG do Instagram com link (@ateliebella) em vez de apenas texto simples.

3. ESTRUTURA MODULAR PARA NOVOS CLIENTES (FACILIDADE DE ALTERAÇÃO):
- Crie um arquivo central de configuração (ex: `src/config/salonConfig.ts` ou `site-config.js`) contendo: nome do salão, slogan, telefone/WhatsApp de contato, mensagem padrão de agendamento, arroba/link do Instagram, e-mail, endereço completo, horários de funcionamento e itens de serviços e FAQ.
- A aplicação inteira consome essas variáveis desse arquivo central, permitindo que ao trocar o salão de um novo cliente, mude-se apenas esse arquivo de configuração e a paleta no CSS.
- Mantenha a identidade visual com as variáveis CSS de cores (Playfair Display para títulos, Montserrat para corpo, paleta com off-white, burgundy, rose blush, warm gray e dourado).

4. MELHORIAS PROFISSIONAIS DE CONVERSÃO & PORTFÓLIO:
- Menu Mobile funcional e elegante (hambúrguer responsivo para telas menores).
- Seção de Prova Social / Depoimentos: badge com avaliação '4.9 ★★★★★ no Google Avaliações' e 3 depoimentos autênticos com fotos/iniciais de clientes.
- Seção de Serviços completa com cards bem acabados e categorias (Cabelo, Unhas, Sobrancelhas, Estética facial, etc.).
- Seção de Perguntas Frequentes (FAQ) em acordeão com dúvidas comuns (formas de pagamento, agendamento, estacionamento).
- Seção de Localização com endereço realístico em Icaraí, Niterói - RJ, horários e botão de 'Abrir rota no Google Maps'.
- Formulário de Contato interativo que monta a mensagem e pode redirecionar direto para o WhatsApp ou validar com feedback visual imediato.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cb7739c7-3e58-4e19-9249-ac231a18e91c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
