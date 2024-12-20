# 🖥️ Gerenciamento de Usuários - CLI
Desenvolvimento de uma aplicação CLI (Command Line Interface) em TypeScript para gerenciar um banco de dados simples de usuários. O projeto envolve validação de dados, criptografia de senha e manipulação de dados tanto na memória quanto em um arquivo CSV.

![user-management](https://github.com/user-attachments/assets/67f14eb1-9a3b-44bf-ade9-e959ba1ccd97)

## 🛠️ Tecnologias
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 📁 Estrutura de Arquivos e Pastas
```graphql
user-management/  
│  
├── data/  
│   └── users.csv   
│  
└── src/  
    ├── commands/  
    │   ├── deleteUser.ts
    │   ├── listUser.ts
    │   ├── listUsers.ts  
    │   ├── newUser.ts  
    │   └── updateUser.ts  
    │  
    ├── models/  
    │   ├── roles.ts  
    │   └── user.ts  
    │  
    ├── seeds/  
    │   ├── rolesSeeds.ts  
    │   └── usersSeeds.ts  
    │  
    ├── services/  
    │   ├── csvService.ts  
    │   └── userService.ts  
    │  
    └── validations/  
    │   ├── userValidations.ts
    │ 
    └── index.ts  
│  
├── .gitignore  
├── LICENSE    
├── package-lock.json  
├── package.json  
├── README.md  
└── tsconfig.json
```

## ✨ Features
- **Input de Dados:** O sistema permite que você forneça os dados do usuário, como `nome`, `e-mail`, `senha`, `papel` e `status`.
- **Criptografia de Senha:** As senhas fornecidas durante o cadastro ou atualização de usuário são criptografadas antes de serem armazenadas, garantindo maior segurança.
- **Validação de Dados:** O sistema valida os dados inseridos, como formato de e-mail e complexidade da senha (mínimo de 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais).
- **Manipulação de Dados:** Permite realizar operações, como `adicionar`, `listar`, `listar por id`, `atualizar` e `deletar` usuários, armazenando os dados em um arquivo CSV.
- **Permissões de Acesso:** Dependendo do papel atribuído ao usuário (`Administrador`, `Convidado` ou `Professor`), são concedidas permissões específicas para gerenciar usuários.

## 🏃‍♂️ Rodando Localmente

### Pré-requisitos

- **Node.js** instalado na sua máquina.
- **NPM** ou **Yarn** para gerenciar pacotes.

### Passos para rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/vximoraes/user-management.git
```

2. Acesse o diretório do projeto:
```bash
cd user-management
```

3. Instale as dependências:
```bash
npm install
```

4. Realize o build do TypeScript:
```bash
npm run build
```

5. Vá para o diretório dist/:
```bash
cd dist/
```

## 📋 Comandos da CLI
Aqui estão os comandos disponíveis na aplicação CLI, que podem ser executados após rodar o projeto:

### 1. Cadastrar um novo usuário
Este comando permite adicionar um novo usuário ao banco de dados. Você deve fornecer os dados do usuário, como ```nome```, ```e-mail```, ```senha```, ```papel``` e ```status```.

```bash
node index.js newUser "User" "user@email.com" "#User123" "admin" true
```
- **name:** Nome do usuário (mínimo de 3 caracteres).
- **email:** E-mail válido.
- **password:** Senha válida (mínimo de 8 caracteres, contendo letras maiúsculas, minúsculas, números e caracteres especiais).
- **role:** Papel do usuário (admin, convidado ou professor).
- **status:** Status do usuário (ativo: true, inativo: false)

### 2. Listar todos os usuários
Este comando exibe todos os usuários cadastrados.

```bash
node index.js listUsers
```

### 3. Listar um usuário específico
Este comando exibe os dados de um usuário específico, dado o seu identificador único.

```bash
node index.js listUser "id-do-usuario"
```
- **id-do-usuario:** Identificador único do usuário.

### 4. Atualizar os dados de um usuário
Este comando permite alterar as informações de um usuário existente. Você pode modificar ```nome```, ```e-mail```, ```senha```, ```papel``` ou ```status```.


```bash
node index.js updateUser "id-do-usuario" -n "User Atualizado" -e "user.atualizado@email.com" -p "#UserAtualizado123" -r "professor" -s false
```

- **id-do-usuario:** Identificador único do usuário.
- **name:** Novo nome para o usuário.
- **email:** Novo e-mail para o usuário.
- **password:** Nova senha para o usuário.
- **role:** Novo papel para o usuário.
- **status:** Novo status para o usuário.

### 5. Deletar um usuário
Este comando remove um usuário do banco de dados, com base no seu identificador único.

```bash
node index.js deleteUser "id-do-usuario"
```

- **id-do-usuario:** Identificador único do usuário.
