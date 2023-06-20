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

const useForm = () => {
  const initialLogin = { email: "", password: "" };
  const initialRegister = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  };

  const { login, register, user } = useAuth();
  const{ showAlert }= useAlert();
  const [values, setValues] = useState<FormValues>(initialLogin);
  const [onRegister, setOnRegister] = useState<boolean>(false);
  const [validateErrors, setErrorsValidate] = useState<object>({});

  useEffect(() => {
    if (onRegister) {
      setValues(initialRegister)
      setErrorsValidate({});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRegister]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const errors = validateForm(values, onRegister);
    if(Object.keys(errors).length>0) {
      setErrorsValidate(errors);
      return;
    }

    if (onRegister) {
     if (await register(values)) {
        showAlert("Registro completado ahora puedes Iniciar Session", "success");
        setOnRegister(false)
        setValues(initialLogin)
     }
    } else {
      await login(values);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    onRegister,
    setOnRegister,
    validateErrors
  };
};

export default useForm;
