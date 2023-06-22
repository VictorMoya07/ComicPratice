import axios, { AxiosResponse } from "axios";
import md5 from "md5";
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const privateKey = import.meta.env.VITE_PRIVATE_KEY


interface DataMarvelPureResponse {
  code: number;
  status: string;
  data: DataMarvelGeneral;
}

interface DataMarvelGeneral {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: DataResultMarvel[];
}

interface DataResultMarvel{
  id:number;
  name?:string;
  title?:string
  thumbnail:IThumbnail;
}

interface IThumbnail {
  extension:string;
  path:string;
}

const gerenateApiUrl = async (sessionMarvel: string | undefined) => {
  const now = Date.now();
  const hashToken = md5(now + privateKey + publicKey);
  const params = {
    apikey: publicKey,
    ts: now,
    hash: hashToken,
  };
  const apiPrepared = `https://gateway.marvel.com/v1/public/${sessionMarvel}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`;
  return apiPrepared;
};

export const getCommics = async () => {
  try {
    const apiUrl = await gerenateApiUrl("comics");
    const response:AxiosResponse<DataMarvelPureResponse> = await axios.get(apiUrl);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEventsComics = async () => {
  try {
    const apiUrl = await gerenateApiUrl("events");
    const response:AxiosResponse<DataMarvelPureResponse> = await axios.get(apiUrl);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacters = async () => {
  try {
    const apiUrl = await gerenateApiUrl("characters");
    const response:AxiosResponse<DataMarvelPureResponse> = await axios.get(apiUrl);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSeries = async () => {
  try {
    const apiUrl = await gerenateApiUrl("series");
    const response:AxiosResponse<DataMarvelPureResponse> = await axios.get(apiUrl);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
