import { rolePermissions } from './roles'

export interface User {
    id          : string
    name        : string
    email       : string
    password    : string
    role        : rolePermissions
    registerDate: Date
    changeDate  : Date
    status      : boolean
}