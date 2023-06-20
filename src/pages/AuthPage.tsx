import { Box, Typography, Button } from "@mui/material";
import AuthForm from "../components/AuthForm";
import useForm from "../hooks/useForm";
import AlertComponent from "../components/AlertComponent";

const AuthPage = () => {
  const { handleChange, values, handleSubmit, onRegister, setOnRegister,validateErrors } = useForm();

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
      <AlertComponent/>
      <Typography component="h1" variant="h5">
        {!onRegister ? "Inicia Sesion" : "Registrate"}
      </Typography>
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
          <Button variant="text" onClick={() => setOnRegister(true)}>
            Registrate
          </Button>
        </Typography>
      ) : null}
    </Box>
  );
};

export default AuthPage;
