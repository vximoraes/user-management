import fs from 'fs'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import { users, writeUsersCSV, filePath } from './csvService'
import { User } from '../models/user'
import { rolePermissions } from '../models/roles'
import * as validacoesUsuario from '../validations/userValidations'

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
        console.log('\nUser registered successfully!')
    }
}

export function listUsers(): void {
    try {
        // Verifica se o arquivo CSV existe.
        if(fs.existsSync(filePath)) {
            // Lê o conteúdo do arquivo CSV.
            const content: string = fs.readFileSync(filePath, 'utf-8')

            // Divide o conteúdo do arquivo em linhas.
            const usersArray: string[] = content.split('\n')

            console.log('\n|------------REGISTERED USERS------------|\n')

            // Exibe os usuários no console.
            usersArray.forEach((line) => {
                const index = line.split(',') // Divide cada linha em um array, onde cada elemento é separado por vírgula.
                
                console.log(` ID: ${index[0]}`)
                console.log(` Name: ${index[1]}`)
                console.log(` Email: ${index[2]}`)
                console.log(` Password: ${index[3]}`)
                console.log(` Role: ${index[4]}`)
                console.log(` Register Date: ${index[5]}`)
                console.log(` Change Date: ${index[6]}`)
                console.log(` Status: ${index[7]}\n`)
            })

            console.log('|----------------------------------------|')
        } else {
            console.log(`\nArquivo não encontrado: ${filePath}\n`) // Exibe uma mensagem caso o arquivo CSV não seja encontrado.
        }
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}

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
                    console.log(`\n|---------REGISTERED USERS BY ID---------|\n`)
                    console.log(` ID: ${index[0]}`)
                    console.log(` Name: ${index[1]}`)
                    console.log(` Email: ${index[2]}`)
                    console.log(` Password: ${index[3]}`)
                    console.log(` Role: ${index[4]}`)
                    console.log(` Register Date: ${index[5]}`)
                    console.log(` Change Date: ${index[6]}`)
                    console.log(` Status: ${index[7]}\n`)
                    console.log('|----------------------------------------|')
                }
            })

            // Caso nenhum usuário seja encontrado, exibe uma mensagem.
            if (!userFound) {
                console.log(`\nUsuário com ID '${id}' não encontrado.\n`)
            }
        } else {
            console.log(`\nArquivo não encontrado: ${filePath}\n`) // Exibe uma mensagem caso o arquivo CSV não seja encontrado.
        }
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}

export function deleteUserById(id: string): void {
    
}