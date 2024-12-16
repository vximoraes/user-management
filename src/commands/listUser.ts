import { Command } from 'commander'
import { listUserById } from '../services/userService'

export const listUser = new Command('listUser')

// Define o comando 'listUser' para listar um usuário específico pelo seu ID.
listUser
    .description('Exibe os dados de um usuário com base no seu ID.')
    .argument('<ID>', 'ID do usuário a ser consultado')
    .action((ID) => {
        try {
            listUserById(ID)
        } catch (err) {
            console.log('Erro ao listar o usuário pelo ID:', err)
        }
    })