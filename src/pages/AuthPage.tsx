import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useForm from "../hooks/useForm";

const AuthPage = () => {
  const { handleChange, values, handleSubmit } = useForm({
    email: "",
    password: "",
  });

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
      <Typography component="h1" variant="h5">
        Inicia Sesion
      </Typography>
      <AuthForm
        onRegister={false}
        handleChange={handleChange}
        values={values}
        handleSubmit={handleSubmit}
      />

      <Typography variant="body2" color="text.secondary" align="center">
        No tienes cuenta aun? <Link to="/register">Registrate</Link>
      </Typography>
    </Box>
  );
};

export default AuthPage;
