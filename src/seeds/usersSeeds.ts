import { v4 as uuid } from 'uuid'
import { registerUser } from "../services/userService"
import { adminPermissions, guestPermissions, teachPermissions} from "./rolesSeeds"

// Função para registrar os usuários seeds.
export function seedUsers(): void {
    registerUser('Admin'  , 'admin@email.com'  , '#Admin123'  , adminPermissions, true , '1')
    registerUser('Guest'  , 'guest@email.com'  , '#Guest123'  , guestPermissions, false, '2')
    registerUser('Teacher', 'teacher@email.com', '#Teacher123', teachPermissions, true , '3')
}