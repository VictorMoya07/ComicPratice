import useMarvel from "../hooks/useMarvel";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TotalComponent = () => {

    const {marvelData} = useMarvel();

    
  return (<>
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {'series' + marvelData.series}
        </Typography>
        <Typography variant="h5" component="div">
        {'caracterres'+ marvelData.characteres}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {'events'+marvelData.eventsComics}
        </Typography>
        <Typography variant="body2">
        {'comics'+ marvelData.commics}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </>
    
  )
}

export default TotalComponent