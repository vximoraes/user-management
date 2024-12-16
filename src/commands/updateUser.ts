import { Command } from 'commander'
import { updateUserData } from '../services/userService'

export const updateUser = new Command('updateUser')

// Define o comando 'updateUser' para atualizar dados de um usuário específico pelo seu ID.
updateUser
    .description('Atualiza os dados de um usuário, como nome(-n), email(-e), senha(-p), papel(-r) e status(-s).')
    .argument('<ID>', 'ID do usuário a ser atualizado')
    .option('-n, --name <name>', 'Novo nome do usuário')
    .option('-e, --email <email>', 'Novo email do usuário')
    .option('-p, --password <password>', 'Nova senha do usuário')
    .option('-r, --role <role>', 'Novo papel do usuário')
    .option('-s, --status <status>', "Novo status do usuário (ex: 'true' para ativo, 'false' para inativo)")
    .action((ID, options) => {
        try {
            updateUserData(ID, options.name, options.email, options.password, options.role, options.status === 'true')
        } catch (err) {
            console.log('Erro ao atualizar os dados do usuário:', err)
        }
    })