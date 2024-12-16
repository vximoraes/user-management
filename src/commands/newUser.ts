import { Command } from 'commander'
import { registerUser } from '../services/userService'

export const newUser = new Command('newUser')

// Define o comando 'newUser' cadastrar um novo usuário.
newUser
    .description('Adiciona um novo usuário ao sistema com nome, email, senha, papel e status.')
    .argument('<name>', 'Nome do usuário a ser cadastrado')
    .argument('<email>', 'Email do usuário')
    .argument('<password>', 'Senha do usuário')
    .argument('<role>', 'Papel do usuário (ex: adm, convidado, professor)')
    .argument('<status>', 'Status do usuário (true para ativo, false para inativo)')
    .action((name, email, password, role, status) => {
        try {
            // Verifica se o papel é válido.
            const validRoles = ['admin', 'convidado', 'professor']
            if (!validRoles.includes(role)) {
                console.log('\nInsira um papel válido: admin, convidado ou professor.\n')
                return
            }

            // Convertendo o status para booleano.
            const isActive = status === 'true'
            registerUser(name, email, password, role, isActive)
        } catch (err) {
            console.log('Erro ao cadastrar o usuário:', err)
        }
    })