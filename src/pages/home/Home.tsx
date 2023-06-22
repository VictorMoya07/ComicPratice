import { useEffect } from "react";
import { Box, Container, Grid, Paper, CircularProgress } from "@mui/material";
import ComicComponent from "../../components/categoriesComponents/ComicComponent";
import CharacterComponent from "../../components/categoriesComponents/CharacterComponent";
import useConfig from "../../hooks/useConfig";
import EventsComponent from "../../components/categoriesComponents/EventsComponent";
import SeriesComponent from "../../components/categoriesComponents/SeriesComponent";
import TotalComponent from "../../components/TotalComponent";
import './styles.scss'
const Home = () => {
  const { config, setCheckConfig, isLoading }= useConfig();

  useEffect(() => {
    setCheckConfig(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TotalComponent />
              </Paper>
            </Grid>
            {config.characters &&(
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                className="paperCat paperCat--characters"
              >
                <CharacterComponent  />
              </Paper>
            </Grid>
            )}

            {config.events &&(
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                className="paperCat paperCat--events"
              >
                <EventsComponent  />
              </Paper>
            </Grid>
            )}
            
            
            {config.comics && (
            <Grid item xs={12}>
              <Paper
                className="paperCat paperCat--comics"
              >
                <ComicComponent  />
              </Paper>
            </Grid>)}
            {config.series && (
            <Grid item xs={12}>
              <Paper
                className="paperCat paperCat--series"
              >
                <SeriesComponent  />
              </Paper>
            </Grid>)}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;
