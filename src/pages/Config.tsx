import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ConfigForm from '../components/configForm';



const Config = () => {

  
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
        <Typography component="h1" variant="h4">
          Configuración
        </Typography>
       <ConfigForm/>
      </Box>
    </Container>
  )
}

export default Config