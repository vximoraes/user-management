import { Roles, rolePermissions } from '../models/roles'

// Permissões definidas ao Administrador.
export const adminPermissions: rolePermissions = {
    role           : Roles.ADMINISTRATOR,
    listProducts   : true,
    listProductsId : true,
    registerProduct: true,
    editProduct    : true,
    deleteProduct  : true,
}

// Permissões definidas ao Convidado.
export const guestPermissions: rolePermissions = {
    role           : Roles.GUEST,
    listProducts   : true,
    listProductsId : true,
    registerProduct: false,
    editProduct    : false,
    deleteProduct  : false,
}

// Permissões definidas ao Professor.
export const teachPermissions: rolePermissions = {
    role           : Roles.TEACHER,
    listProducts   : true,
    listProductsId : true,
    registerProduct: false,
    editProduct    : true,
    deleteProduct  : false,
}