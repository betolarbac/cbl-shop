
# Desafio Vitrine de Produtos

Este projeto é uma aplicação web desenvolvida como parte de um desafio técnico para uma vaga de Frontend Júnior. A aplicação simula uma vitrine de produtos, consumindo dados de uma API pública.

**[Link para o Deploy na Vercel](https://cblshop.vercel.app/)** 

## ✨ Funcionalidades

  * **Vitrine de Produtos:** Exibe uma lista de produtos obtidos através da [Fake Store API](https://fakestoreapi.com/).
  * **Páginação:** Navegue facilmente entre as páginas de produtos para uma melhor experiência do usuário.
  * **Filtro por Categoria:** Filtre os produtos por categoria para encontrar o que você procura com mais facilidade.
  * **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, desde dispositivos móveis até desktops.
  * **Componentização com React:** O código é estruturado em componentes reutilizáveis, seguindo as melhores práticas do React.
  * **Hooks Customizados:** A lógica de busca de dados e paginação é abstraída em hooks customizados para um código mais limpo e de fácil manutenção.

## 🚀 Tecnologias Utilizadas

  * **[React](https://reactjs.org/)**
  * **[Vite](https://vitejs.dev/)**
  * **[TypeScript](https://www.typescriptlang.org/)**
  * **[Tailwind CSS](https://tailwindcss.com/)**
  * **[React Router](https://reactrouter.com/)**

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

  * [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
  * [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/betolarbac/cbl-shop
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd cbl-shop
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

    *ou*

    ```bash
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    *ou*

    ```bash
    yarn dev
    ```

5.  **Abra o navegador:**

    Acesse `http://localhost:5173` (ou a porta indicada no seu terminal) para ver a aplicação em funcionamento.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

```
src/
├── assets/         # Imagens e outros arquivos estáticos
├── components/     # Componentes React reutilizáveis (ProductCard, Banner, etc.)
├── hooks/          # Hooks customizados (useProducts, usePagination)
├── interfaces/     # Definições de tipos e interfaces TypeScript (Product.ts)
├── pages/          # Componentes de página (Home, Offers)
├── App.tsx         # Componente principal que define as rotas
├── main.tsx        # Ponto de entrada da aplicação
└── index.css       # Estilos globais e importações do Tailwind
```

## 📦 Deploy

O deploy desta aplicação foi realizado na **Vercel**.