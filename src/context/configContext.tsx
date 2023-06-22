import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import useAlert from "../hooks/useAlert";


interface IConfig {
  [key: string]: boolean;
  comics: boolean;
  characters: boolean;
  events: boolean;
  series: boolean;
}

interface IconfigContext {
  config: IConfig
  setCheckConfig:Dispatch<SetStateAction<boolean>>
  checkConfig:boolean
  isLoading:boolean
  updateConfig:(data: IConfig) => Promise<void>
}

interface IConfigProvider {
  children: ReactNode;
}

const firstConfig: IConfig = {
  comics: false,
  characters: false,
  events: true,
  series: true,
};

const ConfigContext = createContext({} as IconfigContext);

const ConfigProvider = ({ children }: IConfigProvider) => {
  const { showAlert } = useAlert();

  const [config, setConfig] = useState<IConfig>(firstConfig);
  const [checkConfig, setCheckConfig] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sendFirtsConfig = async () => {
    localStorage.setItem("config", JSON.stringify(config));
    setIsLoading(false);
  };

  const getConfig = async () => {
    const configData = localStorage.getItem("config");
    if (configData) {
      setConfig(JSON.parse(configData));
      setIsLoading(false);
      return true;
    }
    return false;
  };

  const updateConfig = async (data: IConfig) => {
    localStorage.setItem("config", JSON.stringify(data));
    showAlert("Configuracion guardada con exito. Puedes volver a HOME", "success");
    setConfig(data);
  };
  useEffect(() => {
    const confirConfig = async () => {
      const res = await getConfig();
      if (!res) {
        sendFirtsConfig();
      }
    };
    if (checkConfig) {
      confirConfig();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkConfig]);

  const value: IconfigContext = {
    config,
    setCheckConfig,
    checkConfig,
    isLoading,
    updateConfig,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
