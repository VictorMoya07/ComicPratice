import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useConfig from "../hooks/useConfig";

const ConfigForm = () => {
  const { config, updateConfig } = useConfig();

  const [configuracion, setConfiguracion] = useState(config);
  const [option1, setOption1] = useState(
    Object.keys(config).find((key) => config[key])
  );
  const [option2, setOption2] = useState(
    Object.keys(config).find((key) => config[key] && key !== option1)
  );

  const handleOption1Change = (event) => {
    const selectedOption = event.target.value;
    const updatedConfiguracion = { ...configuracion };
    if (selectedOption !== option2) {
      updatedConfiguracion[option1] = false;
      updatedConfiguracion[selectedOption] = true;
      setOption1(selectedOption);
      setConfiguracion(updatedConfiguracion);
    }
  };

  const handleOption2Change = (event: { target: { value: any; }; }) => {
    const selectedOption = event.target.value;
    const updatedConfiguracion = { ...configuracion };
    if (selectedOption !== option1) {
      updatedConfiguracion[option2] = false;
      updatedConfiguracion[selectedOption] = true;
      setOption2(selectedOption);
      setConfiguracion(updatedConfiguracion);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Opción 1:", configuracion);
    updateConfig(configuracion);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 5, width: "100%", mb: 10 }}
    >
      <FormControl variant="outlined" fullWidth sx={{ marginBottom: "10px" }}>
        <InputLabel>Categorias</InputLabel>
        <Select value={option1} onChange={handleOption1Change} label="Opción 1">
          {Object.keys(config).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth>
        <InputLabel>Categorias</InputLabel>
        <Select value={option2} onChange={handleOption2Change} label="Opción 2">
          {Object.keys(config).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Confirmar
      </Button>
    </Box>
  );
};

export default ConfigForm;
