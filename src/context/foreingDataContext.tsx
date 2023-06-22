import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTextFromCms } from "../services/ForeingServices";
import useConfig from "../hooks/useConfig";

interface IConfigProvider {
  children: ReactNode;
}

interface IForeingContext {
  textHome: string | undefined;
  textConfig: string | undefined;
}

const ForeingContext = createContext({} as IForeingContext);

const ForeingProvider = ({ children }: IConfigProvider) => {
  const { checkConfig } = useConfig();
  const [textHome, setTextHome] = useState<string>();
  const [textConfig, setTextConfig] = useState<string>();

  const getTextToTitle = useCallback(async () => {
    try {
      const res: any = await getTextFromCms();
      if (res) {
        setTextHome(res.homeTitle);
        setTextConfig(res.configTitle);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const callCms = () => {
      getTextToTitle();
    };
    if (checkConfig) {
      callCms();
    }
  }, [checkConfig, getTextToTitle]);

  const memoizedContextValue: IForeingContext = useMemo(
    () => ({
      textHome,
      textConfig,
    }),
    [textHome, textConfig]
  );
  return (
    <ForeingContext.Provider value={memoizedContextValue}>
      {children}
    </ForeingContext.Provider>
  );
};

export { ForeingContext, ForeingProvider };
