# Gerenciamento de Usuários - CLI

Desenvolvimento de uma aplicação CLI (Command Line Interface) em TypeScript para gerenciar um banco de dados simples de usuários. O projeto envolve validação de dados, criptografia de senha e manipulação de dados tanto na memória quanto em um arquivo CSV.

## 🛠️ Tecnologias

## 📁 Estrutura de arquivos e pastas
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
├── notes.txt  
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

5. 
