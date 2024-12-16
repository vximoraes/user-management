import { v4 as uuid } from 'uuid'
import { registerUser } from "../services/userService"
import { adminPermissions, guestPermissions, teachPermissions} from "./rolesSeeds"

// Função para registrar os usuários seeds
export function seedUsers(): void {
    registerUser(uuid(), 'Admin'  , 'admin@email.com'  , '#Admin123'  , adminPermissions, true)
    registerUser(uuid(), 'Guest'  , 'guest@email.com'  , '#Guest123'  , guestPermissions, false)
    registerUser(uuid(), 'Teacher', 'teacher@email.com', '#Teacher123', teachPermissions, true)
}