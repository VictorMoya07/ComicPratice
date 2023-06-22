import Carousel from "react-material-ui-carousel";
import Stack from '@mui/material/Stack';
import { Key, useEffect, useState } from "react";
import './styles.scss';
import useMarvel  from '../hooks/useMarvel'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from "@mui/material";


const ComicComponent = () => {
    
  const {comicsData, getComicsData} = useMarvel();

    useEffect(() =>{
      getComicsData()
    },[])
  
    return (
      <div>
        {comicsData=== null?(<>
            <CircularProgress />
          </>):(
         <Carousel>
          {comicsData.map((group: any[], i: Key | null | undefined) => (
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



export default ComicComponent