import { Box, Typography, Button } from "@mui/material";
import AuthForm from "../../components/AuthForm";
import useForm from "../../hooks/useForm";
import AlertComponent from "../../components/AlertComponent";

const AuthPage = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    onRegister,
    setOnRegister,
    validateErrors,
  } =useForm(); /* Se usa el hook useForm para llevar toda la logica del formulario */

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AlertComponent />
      {/* Se usa el componente AlertComponente para notificaciones  */}
      <Typography component="h1" variant="h5">
        {!onRegister ? "Inicia Sesion" : "Registrate"}
      </Typography>
      {/* Se usa el componente AuthForm y se le para los props necesarios para funcionar y realizar la logica */}
      <AuthForm
        onRegister={onRegister}
        handleChange={handleChange}
        values={values}
        handleSubmit={handleSubmit}
        validateErrors={validateErrors}
      />
      {!onRegister ? (
        <Typography variant="body2" color="text.secondary" align="center">
          No tienes cuenta aun?{" "}
          <Button variant="text" onClick={() => setOnRegister(true)} size="small">
            Registrate
          </Button>
        </Typography>
      ) : (
        <Typography variant="body2" color="text.secondary" align="center">
          Tienes un usuario?{" "}
          <Button variant="text" onClick={() => setOnRegister(false)} size="small">
            Hacer Login.
          </Button>
        </Typography>
      )}
    </Box>
  );
};

export default AuthPage;
