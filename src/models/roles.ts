// Definição de um Enum 'Roles' para os diferentes tipos de funções de usuário.
export enum Roles {
    ADMINISTRATOR = 'Administrator',
    GUEST         = 'Guest',
    TEACHER       = 'Teacher'
}

// Definição de uma interface 'rolePermissions' para especificar as permissões associadas a cada função.
export interface rolePermissions {
    role           : Roles
    listProducts   : boolean
    listProductsId : boolean
    registerProduct: boolean
    editProduct    : boolean
    deleteProduct  : boolean
}