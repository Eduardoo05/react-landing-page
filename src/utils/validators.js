const emailValidation = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
    message: 'El email ingresado no es válido'
}
  
const minPassword = {
    value: 8,
    message: 'Password must be more than 8 characters'
}
  
const maxPassword = {
    value: 24,
    message: 'Password must be less than 24 characters'
}

const telephoneValidation = {
    value: /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
    message: 'código de país requerido'
}

const minTel = {
    value: 7,
    message: 'debe ser de 7 o más dígitos'
}

const maxTel = {
    value: 15,
    message: 'debe ser de 15 o menos dígitos'
}

export {emailValidation, minPassword, maxPassword, telephoneValidation, minTel, maxTel}