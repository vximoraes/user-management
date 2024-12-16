import { User } from "../models/user"
import { rolePermissions } from '../models/roles'
import { users } from "./csvService"
import { writeUsersCSV } from "./csvService"
import fs from 'fs'
import { filePath } from "./csvService"

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

    users.push(newUser)

    writeUsersCSV(users)
}

export function listUsers(): void {
    try {
        // Lê o conteúdo do arquivo CSV.
        const content = fs.readFileSync(filePath, 'utf-8')

        // Divide as linhas
        const usersArray = content.split('\n')

        // Exibe os usuários no console.
        usersArray.forEach((line) => {
            const index = line.split(',')

            console.log(`ID: ${index[0]}`)
            console.log(`Name: ${index[1]}`)
            console.log(`Email: ${index[2]}`)
            console.log(`Password: ${index[3]}`)
            console.log(`Role: ${index[4]}`)
            console.log(`Register Date: ${index[5]}`)
            console.log(`Change Date: ${index[6]}`)
            console.log(`Status: ${index[7]}`)
            console.log('\n')
        })
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`)
    }
}
