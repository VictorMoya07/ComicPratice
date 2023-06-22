import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ConfigForm from '../components/ConfigForm';
import AlertComponent from "../components/AlertComponent";
import useForeing from '../hooks/useForeing';

const Config = () => {

  const {textConfig}= useForeing();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      > 
      <AlertComponent/>
        <Typography component="h1" variant="h4">
          {textConfig}
        </Typography>
       <ConfigForm/>
      </Box>
    </Container>
  )
}

export default Config