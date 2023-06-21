import { Box, Container, Grid, Paper, CircularProgress, Typography } from "@mui/material";
import ComicComponent from "../components/ComicComponent";
import CharacterComponent from "../components/CharacterComponent";
import useMarvel from "../hooks/useMarvel";
import { useEffect } from "react";
import useConfig from "../hooks/useConfig";
import EventsComponent from "../components/EventsComponent";
import SeriesComponent from "../components/SeriesComponent";
import TotalComponent from "../components/totalComponent";
const Home = () => {
  const { characData, commicData, setIsDataSend,  } = useMarvel();
  const { config, setCheckConfig,checkConfig,isLoading }: any = useConfig();

  useEffect(() => {
    setCheckConfig(true);
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
            {config.characters &&(
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                  backgroundColor: "black",
                }}
              >
                <CharacterComponent  />
              </Paper>
            </Grid>
            )}

            {config.events &&(
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                  backgroundColor: "black",
                }}
              >
                <EventsComponent  />
              </Paper>
            </Grid>
            )}
            
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                }}
              >
                <TotalComponent />
              </Paper>
            </Grid>
            {config.comics && (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                  backgroundColor: "black",
                }}
              >
                <ComicComponent  />
              </Paper>
            </Grid>)}
            {config.series && (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                  backgroundColor: "black",
                }}
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
