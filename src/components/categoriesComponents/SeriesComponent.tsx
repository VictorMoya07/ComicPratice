import Carousel from "react-material-ui-carousel";
import Stack from "@mui/material/Stack";
import useMarvel from "../../hooks/useMarvel";
import { Box, CircularProgress } from "@mui/material";
import CardComponent from "../cardComponent/CardComponent";

const SeriesComponent = () => {
  const { seriesData } = useMarvel();

  return (
    <Box>
      {seriesData === null ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <>
          <Box className={"titleCategories"}>Series</Box>
          <Carousel indicators={false}>
            {seriesData.map((group: [], i: number) => (
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

export default SeriesComponent;
