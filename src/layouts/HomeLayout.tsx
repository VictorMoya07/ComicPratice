import { AppBar, Box, Container, Toolbar, Typography  } from "@mui/material";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar"
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Victor Moya Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const HomeLayout = () => {
  const {user }:any = useAuth();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Navbar user={user}/>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Box  component="footer">
        <Copyright />
      </Box>
    </>
  );
};

export default HomeLayout;
