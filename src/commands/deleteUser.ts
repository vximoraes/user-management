import { Command } from 'commander'
import { deleteUserById } from '../services/userService'

export const deleteUser = new Command('deleteUser')

// Define o comando 'deleteUser' para deletar um usuário pelo seu ID.
deleteUser
    .description('Deleta um usuário com base no seu ID.')
    .argument('<ID>', 'ID do usuário a ser deletado')
    .action((ID) => {
        try {
            deleteUserById(ID)
        } catch (err) {
            console.log('Erro ao deletar o usuário:', err)
        }
    })