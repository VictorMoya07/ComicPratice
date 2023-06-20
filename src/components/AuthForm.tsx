import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent } from "react";



interface Props {
    onRegister:boolean;
    handleChange:(event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit:()=>void;
    values:Values;
    validateErrors:valuesToValidate
}

interface Values {
    name?:string,
    email?:string,
    password?:string,
    confirmPassword?:string
}

interface valuesToValidate{
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const AuthForm = ({onRegister,handleChange, handleSubmit, values,validateErrors}: Props) => {

  const handleFormSubmit =(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <div>
      <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
        {onRegister ?<TextField
          margin="normal"
          required
          fullWidth
          error={Boolean(validateErrors.name)}
          id="name"
          label="Nombre"
          name="name"
          autoComplete="Nombre"
          onChange={handleChange}
          value={values.name}
          helperText={validateErrors.name}
        />:null }
        
        <TextField
          margin="normal"
          required
          fullWidth
          error={Boolean(validateErrors.email)}
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          value={values.email}
          helperText={validateErrors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          error={Boolean(validateErrors.password)}
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={values.password}
          helperText={validateErrors.password}
        />
       {onRegister ?<TextField
          margin="normal"
          required
          fullWidth
          type="password"
          id="confirmPassword"
          label="Repetir Contraseña"
          name="confirmPassword"
          autoComplete="Repetir Contraseña"
          onChange={handleChange}
          value={values.confirmPassword}
          error={Boolean(validateErrors.confirmPassword)}
          helperText={validateErrors.confirmPassword}
        />:null }
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {onRegister ? 'Registrate':'Iniciar Session'}
        </Button>
      </Box>
    </div>
  );
};

export default AuthForm;
