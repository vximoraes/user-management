// Padrão do e-mail.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Padrão da senha.
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

// Validação nome.
export function validateName(name: string): boolean {
    return name.length >= 3 && name.length <= 25
}

// Validação e-mail.
export function validateEmail(email: string): boolean {
    return emailPattern.test(email)
}

// Validação senha.
export function validatePassword(password: string): boolean {
    return passwordPattern.test(password)
}