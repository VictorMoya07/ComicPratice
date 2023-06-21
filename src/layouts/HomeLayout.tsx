import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./styles.scss";

const HomeLayout = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}

        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography sx={{margin:'10px'}} variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
          <Typography  variant="h6" sx={{margin:'10px'}} color="inherit" noWrap>
            config
            <Link to={"/config"} color="inherit">
  {'color="inherit"'}
</Link>

          </Typography>
          <Typography  variant="h6" color="inherit" noWrap>
            home
            <Link to={'/home'} variant="body2">
  {'variant="body2"'}
</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Outlet />
      </Container>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default HomeLayout;
