# 🚀 UserHub - API REST com Spring Boot + Frontend

Este projeto é uma aplicação de gerenciamento de usuários desenvolvida durante meus estudos de Java, Programação Orientada a Objetos, Spring Boot e JPA.

O backend foi desenvolvido com Java e Spring Boot, utilizando JPA/Hibernate e banco de dados H2 para testes. Além disso, foi adicionada uma interface frontend com HTML, CSS e JavaScript puro para consumir a API REST.

## 🎯 Objetivo do projeto

O objetivo deste projeto é praticar a criação de uma API REST com Spring Boot e entender como um frontend pode consumir os dados do backend usando JavaScript e Fetch API.

## 🛠️ Tecnologias utilizadas

### Backend

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Web](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![H2 Database](https://img.shields.io/badge/H2_Database-09476B?style=for-the-badge&logo=databricks&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Fetch API](https://img.shields.io/badge/Fetch_API-111827?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Ferramentas

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

## 📌 Funcionalidades

### Backend

- Listar usuários
- Buscar usuário por ID
- Cadastrar usuário
- Atualizar usuário
- Excluir usuário
- Listar produtos
- Listar categorias
- Listar pedidos
- Trabalhar com relacionamentos entre entidades usando JPA/Hibernate
- Utilizar banco de dados H2 para testes

### Frontend

- Listar usuários em uma interface visual
- Cadastrar novos usuários
- Editar usuários existentes
- Excluir usuários
- Consumir os endpoints da API usando JavaScript
- Exibir os dados em uma tabela estilizada
- Layout responsivo com HTML e CSS puro

## 📁 Estrutura do projeto

```text
projetoch/
├── src/
│   └── main/
│       ├── java/
│       └── resources/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── pom.xml
└── README.md
```
## 🧱 Arquitetura do backend

O backend foi organizado em camadas, seguindo uma estrutura comum em aplicações Spring Boot:

- **Resource**: camada responsável por receber as requisições HTTP e retornar as respostas da API.
- **Service**: camada responsável pelas regras de negócio e pela comunicação entre os controllers e os repositórios.
- **Repository**: camada responsável pelo acesso ao banco de dados utilizando Spring Data JPA.
- **Entities**: classes que representam as entidades do sistema e são mapeadas para tabelas do banco de dados.
- **Config**: camada utilizada para configurações iniciais do projeto, como a inserção de dados de teste no banco H2.

## 🔗 Endpoints principais

### Usuários

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/users` | Lista todos os usuários |
| GET | `/users/{id}` | Busca um usuário pelo ID |
| POST | `/users` | Cadastra um novo usuário |
| PUT | `/users/{id}` | Atualiza os dados de um usuário |
| DELETE | `/users/{id}` | Remove um usuário |

### Produtos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/products` | Lista todos os produtos |
| GET | `/products/{id}` | Busca um produto pelo ID |

### Categorias

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/categories` | Lista todas as categorias |
| GET | `/categories/{id}` | Busca uma categoria pelo ID |

### Pedidos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/orders` | Lista todos os pedidos |
| GET | `/orders/{id}` | Busca um pedido pelo ID |

## ▶️ Como executar o backend

1. Clone o repositório:

```bash
git clone https://github.com/heiitor06/workshop-springboot4-jpa.git
```

2. Acesse a pasta do projeto:

```bash
cd workshop-springboot4-jpa
```

3. Abra o projeto em uma IDE, como IntelliJ IDEA, Eclipse ou STS.

4. Execute a classe principal da aplicação Spring Boot.

5. A API ficará disponível em:

```text
http://localhost:8080
```

6. Para testar a listagem de usuários, acesse:

```text
http://localhost:8080/users
```

## 🖥️ Como executar o frontend

1. Com o backend rodando, abra a pasta `frontend`.

2. Abra o arquivo `index.html` com o Live Server no VS Code.

3. A interface irá consumir a API em:

```text
http://localhost:8080/users
```

4. Pela interface, é possível listar, cadastrar, editar e excluir usuários.

## 🗄️ Banco de dados

O projeto utiliza o banco de dados H2 em memória para testes.

Enquanto a aplicação estiver rodando, os dados ficam disponíveis temporariamente. Ao encerrar a aplicação, os dados cadastrados durante a execução podem ser perdidos.

O console do H2 pode ser acessado em:

```text
http://localhost:8080/h2-console
```

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Criação de API REST com Spring Boot
- Organização em camadas: Resource, Service e Repository
- Mapeamento de entidades com JPA/Hibernate
- Relacionamentos entre entidades
- Uso do banco de dados H2
- Consumo de API com JavaScript
- Integração entre backend e frontend
- Operações CRUD
- Versionamento com Git e GitHub

## 🔐 Observação sobre segurança
Este projeto foi desenvolvido para fins de estudo. API ainda não possui autenticação, autorização, criptografia de senha ou controle de permissões.

Em um projeto real, seria necessário implementar recursos como:

- DTOs para não expor dados sensíveis
- Criptografia de senha
- Spring Security
- JWT
- Validação de dados
- Controle de acesso por perfil de usuário

## Status do projeto

Projeto em desenvolvimento para fins de estudo e portfólio.