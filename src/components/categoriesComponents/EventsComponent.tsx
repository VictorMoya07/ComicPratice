import Stack from "@mui/material/Stack";
import Carousel from "react-material-ui-carousel";
import useMarvel from "../../hooks/useMarvel";
import { Box, CircularProgress } from "@mui/material";
import CardComponent from "../cardComponent/CardComponent";

const EventsComponent = () => {
  const { eventsData } = useMarvel();

  return (
    <Box>
      {eventsData === null ? (
        <>
          <CircularProgress />
        </>
      ) : (<>
      <Box className={'titleCategories'}>Eventos</Box>
      <Carousel indicators={false}>
          {eventsData.map((group:[], i:number) => (
            <Stack key={i} direction="row" spacing={2}>
              {group.map((item, j) => (
                <CardComponent key={j} item={item} />
              ))}
            </Stack>
          ))}
        </Carousel>
      </>
        
      )}
    </Box>
  );
};

export default EventsComponent;
