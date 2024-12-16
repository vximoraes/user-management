import { Roles, rolePermissions } from '../models/roles'

// Permissões atribuídas ao Administrador.
export const adminPermissions: rolePermissions = {
    role           : Roles.ADMINISTRATOR,
    listProducts   : true,
    listProductsId : true,
    registerProduct: true,
    editProduct    : true,
    deleteProduct  : true,
}

// Permissões atribuídas ao Convidado.
export const guestPermissions: rolePermissions = {
    role           : Roles.GUEST,
    listProducts   : true,
    listProductsId : true,
    registerProduct: false,
    editProduct    : false,
    deleteProduct  : false,
}

// Permissões atribuídas ao Professor.
const teachPermissions: rolePermissions = {
    role           : Roles.GUEST,
    listProducts   : true,
    listProductsId : true,
    registerProduct: false,
    editProduct    : true,
    deleteProduct  : false,
}