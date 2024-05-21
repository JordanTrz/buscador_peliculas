import axios, { AxiosError, AxiosResponse } from "axios";
import { TMovie } from "../types/types";

export const useGet = () => {
  const DB_BASE: string = import.meta.env.VITE_URL_API_DB;

  // If api is not send, then we will get the data from the json file.
  // This is made just for the test. If a backend is called, we do need to remove the DB_BASE
  const executeGet = async (api: string = ""): Promise<string[] | TMovie[]> => {
    try {
      const res: AxiosResponse = await axios.get(DB_BASE);
      return handleSearch(api, res.data);
    } catch (error: unknown) {
      handleError(error);
      return [];
    }
  };

  const handleError = (error: unknown) => {
    // for further manage response
    if (error instanceof AxiosError){
      const { response } = error;
      if (response !== undefined && response.status !== 200){
        console.error(response.status);
      }
    } else {
      console.error("An unknown error occurred.");
    }
  };

  // for further logic
  const handleSearch = (api: string, data: Record<string, string[] | TMovie[]>) => {
    return data[api];
  };

  return [executeGet];
};