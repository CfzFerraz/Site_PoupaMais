# Site Poupa Mais

Site institucional responsivo desenvolvido para a **Drogaria Poupa Mais**, em Descalvado/SP.

## Visão geral

Aplicação web estática construída com HTML5, CSS3 e JavaScript puro. O site apresenta a drogaria, seus serviços, diferenciais, galeria, informações de contato, horário de funcionamento, endereço, mapa e acesso direto ao WhatsApp.

## Funcionalidades

- Landing page institucional.
- Navegação por âncoras.
- Menu responsivo para dispositivos móveis.
- Header que aparece após a rolagem.
- Animações de entrada dos elementos.
- Rolagem suave entre seções.
- Botão de voltar ao topo.
- Seção de serviços.
- Seção institucional.
- Seção de diferenciais.
- Galeria de imagens da loja.
- Informações de telefone, endereço e horário.
- Mapa integrado do Google Maps.
- Link direto para WhatsApp.
- Botão para ligação telefônica.
- Layout responsivo para desktop, tablet e celular.

## Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla
- Font Awesome
- Google Fonts (Poppins)
- Google Maps

## Estrutura do projeto

```text
Site_PoupaMais/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── Img/
    ├── 002.png
    ├── 003.png
    ├── 004.png
    ├── 004.v2.png
    ├── 005.png
    ├── 006.png
    ├── 007.png
    ├── fiveicon.png
    ├── icon_wpp.png
    ├── Logo_pm.png
    └── Logo_pm_negativo.png
```

## Seções da página

### Hero
Apresenta a Drogaria Poupa Mais, sua proposta de atendimento e uma imagem principal da loja.

### Serviços
Apresenta as categorias:
- Medicamentos
- Higiene
- Mamãe & Bebê
- Bem-estar

### Sobre
Apresenta a proposta da drogaria, atendimento, qualidade, localização e preços.

### Diferenciais
Destaca:
- Atendimento especializado
- Melhores preços
- Localização central
- Confiança

### Galeria
Apresenta imagens da fachada, interior, medicamentos, perfumaria, produtos e atendimento.

### Contato
Apresenta telefone, endereço, horários, mapa do Google Maps, WhatsApp e ligação direta.

## Contato

**Drogaria Poupa Mais**

- Telefone/WhatsApp: (19) 3583-2121
- Endereço: Rua José Bonifácio, 624
- Centro - Descalvado/SP

### Horário

- Segunda a sexta: 08:00 às 19:00
- Sábado: 08:00 às 13:00
- Domingo: fechado

## WhatsApp

O site utiliza um link direto para iniciar uma conversa pelo WhatsApp:

`https://wa.me/551935832121`

## Identidade visual

As cores principais utilizadas no projeto são:

```css
--red: #D12421;
--red-dark: #B51F1C;
--blue: #0D5CA6;
--blue-dark: #084C88;
--green: #25D366;
```

## Responsividade

O projeto possui regras específicas para:
- até 1200px;
- até 992px;
- até 768px;
- até 480px.

No celular, o menu é convertido para botão hambúrguer, os cards são reorganizados, a galeria passa para uma coluna e as informações de contato se adaptam ao espaço disponível.

## JavaScript

O arquivo `js/script.js` controla:
- menu mobile;
- troca dos ícones do menu;
- fechamento automático do menu;
- header durante a rolagem;
- botão voltar ao topo;
- animações de entrada;
- item ativo da navegação;
- scroll suave.

## Como executar

O projeto não possui backend ou dependências de Node.js.

Basta abrir:

```text
index.html
```

em um navegador moderno.

Para desenvolvimento, pode ser utilizado o Live Server do Visual Studio Code.

## Personalização

Para adaptar o site:
1. Edite os textos em `index.html`.
2. Substitua as imagens na pasta `Img/`.
3. Atualize telefone e WhatsApp.
4. Atualize o endereço e o mapa.
5. Atualize os horários.
6. Ajuste as cores no `style.css`.

## Organização

- `index.html` — estrutura e conteúdo.
- `css/style.css` — estilos principais.
- `css/responsive.css` — responsividade.
- `js/script.js` — interações.
- `Img/` — imagens e identidade visual.

## Status

Projeto funcional de site institucional estático.

## Projeto

Desenvolvido para a **Drogaria Poupa Mais** e organizado no acervo de projetos de **CfzFerraz**.