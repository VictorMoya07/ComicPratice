import Carousel from "react-material-ui-carousel";
import Stack from '@mui/material/Stack';
import { Key, useEffect, useState } from "react";
import './styles.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMarvel  from '../hooks/useMarvel'
import { Box, CircularProgress } from "@mui/material";


const CharacterComponent = () => {

    const {characData, getCharactersData} = useMarvel();

    useEffect(() =>{
      getCharactersData()
    },[])


   
     return (
       <div>
        {characData=== null?(<>
            <CircularProgress />
          </>):(
         <Carousel>
          {characData.map((group: any[], i: Key | null | undefined) => (
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
                    {item.name}
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

export default CharacterComponent