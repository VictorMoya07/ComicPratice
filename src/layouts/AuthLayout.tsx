import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import './styles.scss';



const AuthLayout = () => {
  
  
  return (
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
  );
};

export default AuthLayout;
