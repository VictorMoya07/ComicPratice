import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  getCharacters,
  getCommics,
  getEventsComics,
  getSeries,
} from "../services/MarvelServices";
import { chunckArray } from "../utils/chunckArray";
import useConfig from "../hooks/useConfig";

interface IMarvelData {
  characters: number;
  series: number;
  commics: number;
  eventsComics: number;
}

interface IContextMarvel {
  marvelData: IMarvelData;
  characData: []|null;
  seriesData: []|null;
  comicsData: []|null;
  eventsData: []|null;
}

interface IMarvelProvider {
  children: ReactNode;
}


const MarvelContext = createContext<IContextMarvel>({} as IContextMarvel);

const MarvelProvider = ({ children }: IMarvelProvider) => {
  const { config } = useConfig();
  const [marvelData, setMarvelData] = useState<IMarvelData>({
    characters: 0,
    series: 0,
    commics: 0,
    eventsComics: 0,
  });
  const [characData, setCharactersData] = useState<[]|null>(null);
  const [comicsData, setComicsData] = useState(null);
  const [eventsData, setEventsData] = useState(null);
  const [seriesData, setSeriesData] = useState(null);

  const getCharactersData = useCallback(async () => {
    try {
      const data:any = await getCharacters();
      setMarvelData((prevMarvelData) => ({
        ...prevMarvelData,
        characters: data.total,
      }));
      setCharactersData(await chunckArray(data.results, 3));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getSeriesData = useCallback(async () => {
    try {
      const data: any = await getSeries();
      setMarvelData((prevMarvelData) => ({
        ...prevMarvelData,
        series: data.total,
      }));
      setSeriesData(await chunckArray(data.results, 3));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getComicsData = useCallback(async () => {
    try {
      const data: any = await getCommics();
      setMarvelData((prevMarvelData) => ({
        ...prevMarvelData,
        commics: data.total,
      }));
      setComicsData(await chunckArray(data.results, 3));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getEventsData = useCallback(async () => {
    try {
      const data: any = await getEventsComics();
      setMarvelData((prevMarvelData) => ({
        ...prevMarvelData,
        eventsComics: data.total,
      }));
      setEventsData(await chunckArray(data.results, 3));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (config.characters) {
      getCharactersData();
    }
    if (config.series) {
      getSeriesData();
    }
    if (config.comics) {
      getComicsData();
    }
    if (config.events) {
      getEventsData();
    }
  }, [config, getCharactersData, getSeriesData, getComicsData, getEventsData ]);

  const memoizedContextValue = useMemo<IContextMarvel>(
    () => ({
      marvelData,
      characData,
      seriesData,
      comicsData,
      eventsData,
    }),
    [marvelData, characData, seriesData, comicsData, eventsData]
  );

  return (
    <MarvelContext.Provider value={memoizedContextValue}>
      {children}
    </MarvelContext.Provider>
  );
};

export { MarvelContext, MarvelProvider };
