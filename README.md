# 📍 Buscador de CEP Dinâmico - Consumindo API ViaCEP

Este projeto é uma ferramenta prática desenvolvida para automatizar a busca de endereços brasileiros utilizando a API ViaCEP. O foco foi aplicar conceitos avançados de manipulação de DOM e requisições assíncronas em JavaScript.

## 🚀 Funcionalidades
* **Busca Instantânea:** Localiza endereço completo (Rua, Bairro e Cidade) a partir do CEP.
* **Interface Inteligente:** A seção de resultados permanece oculta até que uma busca válida seja realizada, mantendo o design limpo.
* **Tratamento de Erros:** Validação de formato de CEP e feedback visual para códigos inexistentes ou falhas de conexão.
* **Função Limpar:** Botão dedicado para resetar o estado da aplicação e focar o cursor para uma nova busca.
* **Atalhos de Teclado:** Suporte para busca ao pressionar a tecla "Enter".

## 🛠️ Tecnologias e Conceitos Aplicados

### 1. Front-end Moderno
* **HTML5 & CSS3:** Interface em *Dark Mode* com layout responsivo usando Flexbox.
* **UI/UX:** Melhora na experiência do usuário através da gestão de estados (esconder/mostrar elementos dinamicamente).

### 2. JavaScript Assíncrono (ES6+)
* **Fetch API:** Consumo de serviço externo via requisição HTTP.
* **Async/Await:** Código mais limpo e legível para lidar com a natureza assíncrona da internet.
* **Regex (`.replace(/\D/g, '')`):** Tratamento de dados de entrada, permitindo que o usuário cole o CEP com traços ou pontos sem quebrar a lógica.
* **Manipulação de DOM:** Criação de elementos dinâmicos para exibição dos dados sem necessidade de recarregar a página.

## 🧠 Aprendizado para ADS
Este projeto simula o comportamento de formulários de e-commerce reais, onde a eficiência e a automação de dados são fundamentais para reduzir erros de preenchimento e melhorar a conversão.

## 🛠️ Tecnologias Utilizadas nesta semana:
* **Ajustes de lógica em JavaScript**
* **Manipulação de DOM para máscaras de input**
* **Clean code e documentação**

## 📈 Status do Projeto:
* **[x] Integração básica concluída.**
* **[ ] Refatoração de funções (em progresso).**
* **[ ] Melhorias na interface mobile.**

## ⚙️ Como executar
1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/viacep-search-js.git](https://github.com/seu-usuario/viacep-search-js.git)
