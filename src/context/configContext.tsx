import { createContext, useEffect, useState } from "react";

const ConfigContext = createContext(null);

interface IConfig {
  comics: boolean;
  characters: boolean;
  events: boolean;
  series: boolean;
}

const firstConfig: IConfig = {
  comics: false,
  characters: false,
  events: true,
  series: true,
};

const ConfigProvider = ({ children }: any) => {
  const [config, setConfig] = useState(firstConfig);
  const [checkConfig, setCheckConfig] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const sendFirtsConfig = async () => {
    localStorage.setItem("config", JSON.stringify(config));
    setIsLoading(false)
  };

  const getConfig = async () => {
    const configData = localStorage.getItem("config");
    if (configData) {
      setConfig(JSON.parse(configData));
      setIsLoading(false)
      return true;
    }
    return false;
  };


  const updateConfig = async(data)=>{
    localStorage.setItem("config", JSON.stringify(data));
    setConfig(data)
  }
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
  }, [checkConfig]);

  const value: any = {config, setCheckConfig,checkConfig,isLoading,updateConfig};

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
