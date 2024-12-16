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

        console.log('\nUser registered successfully!\n')
    }
}

export function listUsers(): void {
    try {
        if(fs.existsSync(filePath)) {
            // Lê o conteúdo do arquivo CSV.
            const content: string = fs.readFileSync(filePath, 'utf-8')

            // Divide as linhas
            const usersArray: string[] = content.split('\n')

            // Prepara os dados para o console.table
            const formattedUsers = usersArray.map((line) => {
                const [id, name, email, password, role, registerDate, changeDate, status] = line.split(',')
                return {
                    ID: id,
                    Name: name,
                    Email: email,
                    Password: password,
                    Role: role,
                    'Register Date': registerDate,
                    'Change Date': changeDate,
                    Status: status === 'true' ? 'Active' : 'Inactive'
                }
            })

            // Exibe os dados em formato de tabela.
            console.table(formattedUsers)
        }
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`)
    }
}
