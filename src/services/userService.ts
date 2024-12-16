import { User } from "../models/user"
import { rolePermissions } from '../models/roles'
import { users } from "./csvService"
import { writeUsersCSV } from "./csvService"
import fs from 'fs'
import { filePath } from "./csvService"
import * as validacoesUsuario from '../validations/userValidations'

export function registerUser(id: string, name: string, email: string, password: string, role: rolePermissions, status: boolean): void {
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

    let isValid: boolean = true

    // Validando os dados antes de cadastrar
    if (!validacoesUsuario.validateName(newUser.name)) {
        console.log('Nome inválido. Deve ter entre 3 e 25 caracteres.')
        isValid = false
    }

    if (!validacoesUsuario.validateEmail(newUser.email)) {
        console.log('E-mail inválido.') 
        isValid = false
    }

    if (!validacoesUsuario.validatePassword(newUser.password)) {
        console.log('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.')
        isValid = false
    }

    if(isValid) {
        users.push(newUser)
        writeUsersCSV(users)

        console.log('\nUser registered successfully!')
    }
}

export function listUsers(): void {
    try {
        if(fs.existsSync(filePath)) {
            // Lê o conteúdo do arquivo CSV.
            const content: string = fs.readFileSync(filePath, 'utf-8')

            // Divide as linhas.
            const usersArray: string[] = content.split('\n')

            console.log('\n|------------------USERS-----------------|\n')

            // Exibe os usuários no console.
            usersArray.forEach((line) => {
                const index = line.split(',')
                
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
        }
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`)
    }
}
