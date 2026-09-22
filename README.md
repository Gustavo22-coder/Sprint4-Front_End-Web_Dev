# JOVI Study Mode

Projeto acadêmico da Sprint 4 de Front-End Design e Web Development. A solução organiza conteúdos acadêmicos fotografados pelo celular, separando-os por matéria.

## Tecnologias utilizadas

- Next.js 16 com App Router
- React 19
- Tailwind CSS 4
- API Route do Next.js
- LocalStorage
- Git e Vercel

## Funcionalidades

- Landing page responsiva
- Componentização e uso de props
- Login demonstrativo
- Rota pública e rota privada
- Hooks nativos do React
- Hooks customizados `useAuth` e `useConteudos`
- Consumo de API própria em `/api/conteudos`
- Pesquisa de conteúdos por matéria

## Como instalar

É necessário ter o Node.js 20 ou superior instalado.

```bash
npm install
```

## Como executar

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Como gerar a versão de produção

```bash
npm run build
npm start
```

## Servidores e API

Não existe um back-end separado. A API própria está implementada pelo Next.js na rota `/api/conteudos` e inicia junto com a aplicação.

## Usuário para teste

- Usuário: `aluno`
- Senha: `1234`

## Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento para organizar a estrutura de componentes, revisar o código, sugerir melhorias de responsividade e auxiliar na documentação. A equipe revisou e validou o conteúdo e o funcionamento final da aplicação.

## Deploy

Link da Vercel: [**(https://sprint4-frontend-webdev-main.vercel.app/)**]

## Repositório

https://github.com/Gustavo22-coder/Sprint4-Front_End-Web_Dev
