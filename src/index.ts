import { Command } from 'commander'
import { newUser } from './commands/newUser'
import { listUsers } from './commands/listUsers'
import { listUser } from './commands/listUser'
import { updateUser } from './commands/updateUser'
import { deleteUser } from './commands/deleteUser'

// Cria um novo programa de linha de comando.
const program = new Command()

// Adiciona os comandos ao programa, permitindo que sejam utilizados na CLI.
program.addCommand(newUser)
program.addCommand(listUsers)
program.addCommand(listUser)
program.addCommand(updateUser)
program.addCommand(deleteUser)

program.parse()