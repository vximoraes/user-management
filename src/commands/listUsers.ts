import { Command } from 'commander'
import { listAllUsers } from '../services/userService'

export const listUsers = new Command('listUsers')

// Define o comando 'listUsers' para listar todos os usuários cadastrados.
listUsers
    .description('Lista todos os usuários registrados no sistema.')
    .action(() => {
        try {
            listAllUsers()
        } catch (err) {
            console.log('Erro ao listar os usuários:', err)
        }
    })