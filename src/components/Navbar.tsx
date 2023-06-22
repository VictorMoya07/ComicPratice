import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavbarProps {
  user: {
    name: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <Box width="100%" sx={{ flexGrow: 1 }}>
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h6" color="inherit" noWrap>
          {"Bienvenido "} {user.name}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link to="/home">
              <Button variant="text" color="secondary">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/config">
              <Button variant="text" color="secondary">
                Config
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  );
};

export default Navbar;