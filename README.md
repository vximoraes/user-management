# Gerenciamento de Usuários - CLI

Desenvolvimento de uma aplicação CLI (Command Line Interface) em TypeScript para gerenciar um banco de dados simples de usuários. O projeto envolve validação de dados, criptografia de senha e manipulação de dados tanto na memória quanto em um arquivo CSV.

## 🛠️ Tecnologias

## 📁 Estrutura de Arquivos e Pastas
```graphql
user-management/  
│  
├── data/  
│   └── users.csv  
│  
├── dist/  
│  
├── node_modules/  
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

## ✨ Recursos

- Gerenciamento de usuários.
- Validação de dados de usuários (nome, e-mail, senha).
- Armazenamento em arquivo CSV.
- Funções para manipulação de dados de usuários: cadastrar, listar, listar por ID, alterar e deletar.
- Permissões baseadas nos papéis dos usuários.
- Interface CLI para interação com o sistema.

## 🏃‍♂️ Rodando localmente

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

## 📋 Comandos da CLI
Aqui estão os comandos disponíveis na aplicação CLI, que podem ser executados após rodar o projeto:

### 1. Cadastrar um novo usuário
Este comando permite adicionar um novo usuário ao banco de dados. Você deve fornecer os dados do usuário, como ```nome```, ```e-mail```, ```senha```, ```papel``` e ```status```.

```bash
node dist/index.js newUser "User" "user@email.com" "#User123" "Administrador" true
```
- **name:** Nome do usuário (mínimo de 3 caracteres).
- **email:** E-mail válido.
- **password:** Senha válida (mínimo de 8 caracteres, contendo letras maiúsculas, minúsculas, números e caracteres especiais).
- **role:** Papel do usuário (Administrador, Convidado ou Professor).
- **status:** Status do usuário (ativo: true, inativo: false)

### 2. Listar todos os usuários
Este comando exibe todos os usuários cadastrados.

```bash
node dist/index.js listUsers
```

### 3. Listar um usuário específico
Este comando exibe os dados de um usuário específico, dado o seu identificador UUID.

```bash
node dist/index.js listUser "id-do-usuario"
```

### 4. Atualizar os dados de um usuário
Este comando permite alterar as informações de um usuário existente. Você pode modificar ```nome```, ```e-mail```, ```senha```, ```papel``` ou ```status```.

```bash
node dist/index.js updateUser -n "User Atualizado" -e "user.atualizado@email.com" -p "NovaSenha@123" -r "Professor" -s false
```

- **id:** Identificador único do usuário.
- **name:** Novo nome para o usuário.
- **email:** Novo e-mail para o usuário.
- **password:** Nova senha para o usuário.
- **role:** Novo papel para o usuário.
- **status:** Novo status para o usuário.

### 5. Deletar um usuário
Este comando remove um usuário do banco de dados, com base no seu identificador único.

```bash
node dist/index.js deleteUser "id-do-usuario"
```
