import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import { validateForm } from "../utils/validateForm";


interface FormValues {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
} 

interface IInitialLogin extends FormValues {
  email: string;
  password: string;
}

interface IInitialRegister extends FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const useForm = () => {
  const initialLogin: IInitialLogin = { email: "", password: "" };
  const initialRegister: IInitialRegister = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  };

  const { login, register } = useAuth();
  const { showAlert } = useAlert();
  const [values, setValues] = useState<FormValues>(initialLogin);
  const [onRegister, setOnRegister] = useState<boolean>(false);
  const [validateErrors, setErrorsValidate] = useState<object>({});

  const resetForm = () => {
    if (onRegister) {
      setValues(initialRegister);
    } else {
      setValues(initialLogin);
    }
    setErrorsValidate({});
  };

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    onRegister,
  ]); /* Setea el estado inicial del formulario y limpia los errores.  */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const errors = validateForm(values, onRegister); /* valida los errores */
    if (Object.keys(errors).length > 0) {
      /* retorna si existen errores en los inputs */
      setErrorsValidate(errors);
      return;
    }
    /* Se loguea o se registra el usuario dependiendo del estado onRegister */
    if (onRegister) {
      if (await register(values)) {
        showAlert(
          "Registro completado ahora puedes Iniciar Session",
          "success"
        );
        setOnRegister(false);
        setValues(initialLogin);
      }
    } else {
      if (!(await login(values))) {
        showAlert("Usuario o contraseña incorrectos", "error");
      }
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    onRegister,
    setOnRegister,
    validateErrors,
  };
};

export default useForm;
