import fs from 'fs'
import { User } from '../models/user'

export const filePath: string = './data/users.csv' // Caminho para o arquivo CSV onde os dados dos usuários serão armazenados.

export function writeUsersCSV(users: User[]): void {
    try {
        // Converter os usuários para string no formato CSV.
        const userString = users.map((user) => 
            `${user.id},${user.name},${user.email},${user.password},${user.role.role},${user.registerDate.toISOString()},${user.changeDate.toISOString()},${user.status}`
        )

        // Escrever os dados no arquivo CSV.
        fs.writeFileSync(filePath, userString.join('\n'))
    } catch (err) {
        console.log(`Error: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}