import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useConfig from "../hooks/useConfig";
import { useFeatureFlag } from "configcat-react";

interface IConfig {
  [key: string]: boolean;
  comics: boolean;
  characters: boolean;
  events: boolean;
  series: boolean;
}


const ConfigForm = () => {
  const { config, updateConfig } = useConfig();
  const { value: confirmFlag } = useFeatureFlag("confirmflag", false);

  const [configuracion, setConfiguracion] = useState<IConfig>(config);
  const [option1, setOption1] = useState<any>(
    Object.keys(config).find((key) => config[key])
  );
  const [option2, setOption2] = useState<any>(
    Object.keys(config).find((key) => config[key] && key !== option1)
  );

  const handleOption1Change = (e: { target: { value: string; }; }) => {
    const selectedOption = e.target.value as string;
    const updatedConfiguracion = { ...configuracion };
    if (selectedOption !== option2) {
      updatedConfiguracion[option1] = false;
      updatedConfiguracion[selectedOption] = true;
      setOption1(selectedOption);
      setConfiguracion(updatedConfiguracion);
    }
  };

  const handleOption2Change = (e: { target: { value: string; }; }) => {
    const selectedOption = e.target.value as string;
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
      <Button disabled={confirmFlag} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Confirmar
      </Button>
    </Box>
  );
};

export default ConfigForm;
