# 🎉 Desafio 7

Bem-vindo ao Desafio 7! Este projeto é uma API simples construída com Express.js e TypeScript, projetada para interagir com um banco de dados MySQL. O objetivo é fornecer uma base sólida para desenvolvimento de APIs, integrando boas práticas e organização de código.

🎯 Objetivo
Aplicar conhecimentos em Typescript e Jest, para solucionar um dos maiores problemas que grandes empresas possui em relação a uma API feita em JavaScript. O intuito do projeto é aumentar a performace da API deixando a mais robusta e menos propensa a erros utilizando Typescript e JavaScript.

📋 Pré-requisitos
Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **MySQL** (para o banco de dados)

## ⚙️ Instalação

### Siga os passos abaixo para configurar o projeto em sua máquina local:

## Clone o repositório:

    git clone https://github.com/RiegL/DNC-desafio-7.git
    cd desafio7

## Instale as dependências:

    npm install

## Configure o banco de dados:

### Altere as configurações do banco de dados no arquivo de configuração do Knex (knexfile.js ou arquivo equivalente) para refletir suas credenciais:

        export default {
    client: "mysql2",
    connection: {
        host: "192.168.0.254", // alterar para seu host
        port: 3306,
        user: "root", // alterar para seu usuário
        password: "hasarbrasil", // alterar para sua senha
        database: "desafio7", // alterar para o nome do seu banco de dados
    },
    };


## Inicie o servidor:

### Execute o seguinte comando para iniciar o servidor:

    npm start

    O servidor estará rodando em http://localhost:8080.

##  📡 Rotas requisição

- **GET**: http://localhost:8080/aluno 

- **POST**: http://localhost:8080/aluno 

    Envie no body os campos nome e cpf.

## Executar testes:

### Para rodar os testes, utilize o comando:

    npm test

## 📁 Estrutura do Projeto

### A estrutura do projeto é organizada da seguinte forma:

- `src/`
  - `config/`
    - `knex.ts`
  - `libs/`
    - `__tests__/`
        - `aluno.model.test.ts`
        - `aluno.route.test.ts`
  - `module/`
    - `aluno/`
        - `aluno.d.ts`
        - `aluno.model.ts`
        - `aluno.route.ts`
  - `service/`
    - `knex.ts`
  - `server.ts`
  
   