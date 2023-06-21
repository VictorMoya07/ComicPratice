/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, ReactNode, useEffect } from "react";
import { getCharacters, getCommics, getEventsComics,getSeries } from "../services/MarvelServices";
import { chunckArray } from "../utils/chunckArray";


const MarvelContext = createContext<any>(null)



const MarvelProvider = ({children}:any)=>{
    const [marvelData, setMarvelData] = useState({
        characteres:0,
        series:0,
        commics:0,
        eventsComics:0
    })
    const [characData, setCharactersData] = useState(null)
    const [comicsData, setComicsData] = useState(null)
    const [eventsData, setEventsData] = useState(null)
    const [seriesData, setSeriesData] = useState(null)
    const [isDataSend, setIsDataSend] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getCharactersData = async() =>{
        try {
            const data:any = await getCharacters()
            setMarvelData((prevMarvelData) => ({
                ...prevMarvelData,
                characteres: data.total,
              }));
            setCharactersData(await chunckArray(data.results, 3))
            /* const chunckData = await chunckArray(data.results, 3); */
            /* setCharactersData(chunckData) */ 
        } catch (error) {
            console.error(error)
        }
    }

    const getComicsData = async() =>{
        try {
            const data = await getCommics()
            setMarvelData((prevMarvelData) => ({
                ...prevMarvelData,
                commics: data.total,
              }));
            setComicsData(await chunckArray(data.results, 3)) 
        } catch (error) {
            console.error(error)
        }
    }

    const getEventsComicsData = async() =>{
        try {
            const data = await getEventsComics()
            setMarvelData((prevMarvelData) => ({
                ...prevMarvelData,
                eventsComics: data.total,
              }));
            setEventsData(await chunckArray(data.results, 3)) 
        } catch (error) {
            console.error(error)
        }
    }

    const getSeriesData = async() =>{
            try {
                const data = await getSeries()
                setMarvelData((prevMarvelData) => ({
                    ...prevMarvelData,
                    series: data.total,
                  }));
                setSeriesData(await chunckArray(data.results, 3)) 
            } catch (error) {
                console.error(error)
            }
        }

   /*  useEffect(() => {
        const fetchData = async () => {
          try {
            const charactersData = await getCharactersData();
            setCharactersData(charactersData);
    
            const comicsData = await getComicsData();
            setCommicData(comicsData);
    
            setIsDataSend(true);
            setIsLoading(false)
          } catch (error) {
            console.error(error);
          }
        };
    
        if (isDataSend) {
          fetchData();
        }
      }, [isDataSend]); */
     

    return(
        <MarvelContext.Provider value={{marvelData,setIsDataSend, setMarvelData, characData,comicsData, getComicsData, getCharactersData,isLoading, 
          getEventsComicsData, eventsData, seriesData, getSeriesData}}>
            {children}
        </MarvelContext.Provider>
    )
}

export {MarvelContext, MarvelProvider}