import fs from 'fs'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import { filePath, writeUsersCSV } from './csvService'
import { User } from '../models/user'
import { rolePermissions } from '../models/roles'
import * as validacoesUsuario from '../validations/userValidations'

export let users: User[] = [] // Array que armazenará os dados dos usuários.

// Função para cadastrar um novo usuário. 
export function registerUser(name: string, email: string, password: string, role: rolePermissions, status: boolean, id: string = uuid()): void { // O ID é gerado automaticamente com o uuid() se não for passado.
    // Cria um novo objeto de usuário com as informações fornecidas.
    let newUser: User = {
        id          : id,
        name        : name,
        email       : email,
        password    : password,
        role        : role,
        registerDate: new Date(),
        changeDate  : new Date(),
        status      : status
    }

    // Variável para indicar se os dados são válidos.
    let isValid: boolean = true

    // Validação do nome do usuário.
    if (!validacoesUsuario.validateName(newUser.name)) {
        console.log('Nome inválido. Deve ter entre 3 e 25 caracteres.')
        isValid = false
    }

    // Validação do e-mail do usuário.
    if (!validacoesUsuario.validateEmail(newUser.email)) {
        console.log('E-mail inválido.') 
        isValid = false
    }

    // Validação da senha do usuário.
    if (!validacoesUsuario.validatePassword(newUser.password)) {
        console.log('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.')
        isValid = false
    }

    // Caso todos os dados sejam válidos, o usuário é registrado.
    if(isValid) {
        // Criptografa a senha usando bcrypt antes de armazenar o usuário.
        bcrypt.hash(newUser.password, 10, (err, hashedPassword) => {
            if (err) {
                console.log('Erro ao criptografar a senha:', err)
                return
            }

            // Substitui a senha original pela senha criptografada.
            newUser.password = hashedPassword

            // Adiciona o novo usuário ao array de usuários.
            users.push(newUser)

            // Escreve a lista de usuários atualizada no arquivo CSV.
            writeUsersCSV(users)
        })
        // Exibe uma mensagem de sucesso no console.
        console.log('\nUsuário registrado com sucesso!\n')
    }
}

// // Função para listar todos os usuários.
export function listUsers(): void {
    try {
        // Verifica se o arquivo CSV existe.
        if(fs.existsSync(filePath)) {
            // Lê o conteúdo do arquivo CSV.
            const content: string = fs.readFileSync(filePath, 'utf-8')

            // Divide o conteúdo do arquivo em linhas.
            const usersArray: string[] = content.split('\n')
            console.log('\n|----------USUÁRIOS CADASTRADOS----------|\n')

            // Exibe os usuários no console.
            usersArray.forEach((line) => {
                const index = line.split(',') // Divide cada linha em um array, onde cada elemento é separado por vírgula.
                
                console.log(` ID: ${index[0]}`)
                console.log(` Nome: ${index[1]}`)
                console.log(` E-mail: ${index[2]}`)
                console.log(` Senha: ${index[3]}`)
                console.log(` Papel: ${index[4]}`)
                console.log(` Data de cadastro: ${index[5]}`)
                console.log(` Data da última alteração: ${index[6]}`)
                console.log(` Status: ${index[7]}\n`)
            })

            console.log('|----------------------------------------|')
        } else {
            console.log(`\nArquivo não encontrado: ${filePath}\n`) // Exibe uma mensagem caso o arquivo CSV não seja encontrado.
        }
    } catch (err) {
        console.log(`Erro: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}

// Função para listar um usuário pelo ID.
export function listUserById(id: string): void {
    try {
        // Verifica se o arquivo CSV existe.
        if (fs.existsSync(filePath)) {
            // Lê o conteúdo do arquivo CSV.
            const content: string = fs.readFileSync(filePath, 'utf-8')

            // Divide o conteúdo do arquivo em linhas.
            const usersArray: string[] = content.split('\n')

            // Variável para indicar se o usuário foi encontrado.
            let userFound = false

            // Exibe o usuário no console.
            usersArray.forEach((line) => { 
                const index = line.split(',') // Divide cada linha em um array, onde cada elemento é separado por vírgula.

                if (index[0] === id) { // Verifica se o primeiro elemento (ID) da linha é igual ao ID fornecido.
                    userFound = true // Define que o usuário foi encontrado.
                    console.log(`\n|--------USUÁRIOS CADASTRADOS ID---------|\n`)
                    console.log(` ID: ${index[0]}`)
                    console.log(` Nome: ${index[1]}`)
                    console.log(` E-mail: ${index[2]}`)
                    console.log(` Senha: ${index[3]}`)
                    console.log(` Papel: ${index[4]}`)
                    console.log(` Data de cadastro: ${index[5]}`)
                    console.log(` Data da última alteração: ${index[6]}`)
                    console.log(` Status: ${index[7]}\n`)
                    console.log('|----------------------------------------|')
                }
            })

            // Caso nenhum usuário seja encontrado, exibe uma mensagem.
            if (!userFound) {
                console.log(`\nUsuário com ID '${id}' não encontrado.`)
            }
        } else {
            console.log(`\nArquivo não encontrado: ${filePath}\n`) // Exibe uma mensagem caso o arquivo CSV não seja encontrado.
        }
    } catch (err) {
        console.log(`Erro: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}

// Função para excluir um usuário pelo ID.
export function deleteUserById(id: string): void {  
    try {  
        // Ler o conteúdo do arquivo CSV.
        const fileContent = fs.readFileSync(filePath, 'utf-8') 
        
        // Dividir o conteúdo em linhas.  
        const lines = fileContent.split('\n')

        // Filtrar as linhas, removendo a linha correspondente ao ID fornecido.  
        const updatedLines = lines.filter(line => {  
            const columns = line.split(',')
            return columns[0] !== id // ID do usuário na primeira coluna.  
        })  

        // Se o ID não for encontrado, exibe uma mensagem. 
        if (updatedLines.length === lines.length) {  
            console.log(`\nUsuário com ID '${id}' não encontrado.`)
            return
        }

        // Limpa o arquivo CSV antes de escrever os dados atualizados.  
        fs.writeFileSync(filePath, '', 'utf-8')  

        // Reescrever o arquivo CSV com as linhas atualizadas.  
        fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf-8')
        console.log(`\nUsuário com ID '${id}' removido com sucesso.`)

        // Atualizar o array de usuários.  
        users = updatedLines.map(line => {  
            const index = line.split(',')  
            return {  
                id: index[0],  
                name: index[1],  
                email: index[2],  
                password: index[3],  
                role: { role: index[4] },  
                registerDate: new Date(index[5]),  
                changeDate: new Date(index[6]),  
                status: index[7] === 'true'   
            } as User
        }) 

        // Atualiza o arquivo CSV.
        writeUsersCSV(users)  
    } catch (err) {  
        console.log(`Erro ao excluir usuário: ${(err as Error).message}`)
    }  
} 

export function updateUserData(id: string, name?: string, email?: string, password?: string, role?: rolePermissions, status?: boolean): void {
    // Ler o conteúdo do arquivo CSV.
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const lines = fileContent.split('\n')

    // Encontrar o índice do usuário.
    const userIndex = lines.findIndex(line => line.split(',')[0] === id)

    // Se o usuário não for encontrado, exibe uma mensagem.
    if (userIndex === -1) {
        console.log(`Usuário com ID '${id}' não encontrado.`)
        return
    }

    // Obter dados do usuário.
    const userData = lines[userIndex].split(',')

    // Atualizar os dados fornecidos.
    if (name) userData[1] = name
    if (email) userData[2] = email
    if (role) userData[4] = role.role
    if (status !== undefined) userData[7] = status.toString()
    userData[6] = new Date().toISOString()  // Atualiza a data de alteração.

    // Se for passada uma nova senha, ela é criptografada.
    if (password) {
        try {
            userData[3] = bcrypt.hashSync(password, 10)
        } catch (err) {
            console.log('Erro ao criptografar a senha:', err)
            return
        }
    }

    // Atualiza o arquivo CSV.
    lines[userIndex] = userData.join(',')
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8')

    console.log('Dados do usuário atualizados com sucesso!')
}