import * as React from 'react';
import { Paper, Button, Card, CardMedia, CardContent, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Carousel from 'react-material-ui-carousel'
import useMarvel  from '../hooks/useMarvel'
import { useEffect } from 'react';
import { Box, CircularProgress } from "@mui/material";


const EventsComponent = () => {
   
  const {eventsData, getEventsComicsData} = useMarvel();

    useEffect(() =>{
      getEventsComicsData()
    },[])
  
    return (
      <div>
        {eventsData=== null?(<>
            <CircularProgress />
          </>):(
         <Carousel>
          {eventsData.map((group: any[], i: React.Key | null | undefined) => (
             <Stack key={i} direction="row" spacing={2}>
               {group.map((item, j) => (
                  <Card sx={{ width: '100vh', height:300 }} key={j}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.name||item.title}
                    </Typography>
                  </CardContent>
                </Card>
               ))}
             </Stack>
           ))} 
         </Carousel>)}
       </div>
    );
}





export default EventsComponent