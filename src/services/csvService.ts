import fs from 'fs'
import { User } from '../models/user'

export const filePath: string = '../data/users.csv' // Caminho para o arquivo CSV onde os dados dos usuários serão armazenados.

export function writeUsersCSV(users: User[]): void {
    try {
        // Converte os dados dos usuários para uma string no formato CSV, onde cada campo é separado por vírgula.
        const userString = users.map(user => [
            user.id, 
            user.name, 
            user.email, 
            user.password, 
            user.role, 
            user.registerDate.toISOString(), 
            user.changeDate.toISOString(), 
            user.status
        ].join(',')).join('\n')     

        fs.writeFileSync(filePath, userString, 'utf-8')
    } catch (err) {
        console.log(`Erro: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}