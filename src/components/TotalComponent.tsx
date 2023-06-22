import useMarvel from "../hooks/useMarvel";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

const TotalComponent = () => {
  
  const {marvelData} = useMarvel();
  
  return (
  <Grid container spacing={2} justifyContent={'space-around'} alignContent={'space-around'}>
    <Grid item xs={12}>
      <Typography variant="h4" component="h1" sx={{textAlign:'center'}}>
        Totales de cada categoria de Marvel Comics
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5" component="h1">
        {'Series: ' + marvelData.series}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5" component="h1">
        {'Personajes: ' + marvelData.characters}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5" component="h1">
        {'Eventos: ' + marvelData.eventsComics}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5" component="h1">
        {'Comics: ' + marvelData.commics}
      </Typography>
    </Grid>
  </Grid>
    
  )
}

export default TotalComponent