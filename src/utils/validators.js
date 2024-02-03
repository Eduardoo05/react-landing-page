const emailValidation = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'el email ingresado es invalido'
  }
  
const minPassword = {
    value: 8,
    menssage:'The Password must be at least 8 characters'
  }
  
const maxPassword = {
    value: 24,
    menssage:'The Password must be at than 24 characters'
  }

  export {emailValidation,minPassword,maxPassword}
  