interface valuesToValidate{
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

interface Ierrors{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}


export const validateEmail = (email: string) => {return /\S+@\S+\.\S+/.test(email)}
    


export const validateForm =(values:valuesToValidate, onRegister:boolean)=>{

    const errors:Ierrors = {};
    if (!values.email) {
        errors.email = "El correo electrónico es obligatorio";
      } else if (!validateEmail(values.email)) {
        errors.email = "El correo electrónico no es válido";
      }
  
      // Validar el campo de contraseña
      if (!values.password) {
        errors.password = "La contraseña es obligatoria";
      } else if (values.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
      }

      // Validar el campo de nombre (solo en registro)
      if (onRegister && !values.name) {
        errors.name = "El nombre es obligatorio";
      }
  
      // Validar la confirmación de contraseña (solo en registro)
      if (onRegister && values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }

      if (onRegister && !values.confirmPassword ){
        errors.confirmPassword = "Se debe ingresar una contraseña";
      }

      return errors;
  
}