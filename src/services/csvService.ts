import fs from 'fs'
import { User } from '../models/user'

export const filePath: string = '../data/users.csv' // Caminho para o arquivo CSV onde os dados dos usuários serão armazenados.

export function writeUsersCSV(users: User[]): void {
    try {
        // Cria uma string CSV vazia
        let userString: string = ''

        // Itera sobre os usuários e adiciona suas informações à string CSV
        users.forEach(user => {
            userString += `${user.id},${user.name},${user.email},${user.password},${user.role},${user.registerDate.toISOString()},${user.changeDate.toISOString()},${user.status}\n`
        })

        // Escreve a string CSV no arquivo
        fs.writeFileSync(filePath, userString, 'utf-8')
    } catch (err) {
        console.log(`Erro: ${(err as Error).message}`) // Trata qualquer erro e exibe a mensagem de erro no console.
    }
}