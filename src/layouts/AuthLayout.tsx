import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './styles.scss';



const AuthLayout = () => {
  const defaultTheme = createTheme();
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
       <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className="marvelImage"
        /> 

        <Grid item xs={12} sm={8} md={5}>
          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AuthLayout;
