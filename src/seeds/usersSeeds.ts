import { User } from "../models/user"
import { adminPermissions, guestPermissions, teachPermissions} from "./rolesSeeds"

// Define o usuário Admin com permissões de administrador.
export let Admin: User = {
    id          : '1',
    name        : 'Admin',
    email       : 'admin@email.com',
    password    : '#Admin123',
    role        : adminPermissions,  // Permissões de administrador.
    registerDate: new Date(),
    changeDate  : new Date(),
    status      : true
}

// Define o usuário Guest com permissões de visitante.
export let Guest: User = {
    id          : '2',
    name        : 'Guest',
    email       : 'guest@email.com',
    password    : '#Guest123',
    role        : guestPermissions,  // Permissões de visitante.
    registerDate: new Date(),
    changeDate  : new Date(),
    status      : false
}

// Define o usuário Teacher com permissões de professor.
export let Teacher: User = {
    id          : '3',                
    name        : 'Teacher',
    email       : 'teacher@email.com',
    password    : '#Teacher123',
    role        : teachPermissions,  // Permissões de professor.
    registerDate: new Date(),
    changeDate  : new Date(),
    status      : true
}
