import Carousel from "react-material-ui-carousel";
import Stack from '@mui/material/Stack';
import useMarvel  from '../../hooks/useMarvel'
import { Box, CircularProgress } from "@mui/material";
import CardComponent from '../cardComponent/CardComponent'
import './styles.scss'


const ComicComponent = () => {
  const {comicsData} = useMarvel();
  
    return (
      <Box>
        {comicsData=== null?(<>
            <CircularProgress />
          </>):(<>
          <Box className={'titleCategories'}>Comics</Box>
         <Carousel indicators={false}>
          {comicsData.map((group:[], i: number) => (
             <Stack key={i} direction="row" spacing={2}>
               {group.map((item, j) => (
                <CardComponent key={j} item={item} />
               ))}
             </Stack>
           ))} 
         </Carousel></>)}
       </Box>
    );
}



export default ComicComponent