import Toast from "react-native-toast-message";
import { CountryType } from "types/country";
import { ALL_COUNTRIES, FETCH_COUNTRY_BY_NAME, FETCH_EXCHANGE } from "@env";

type FetchParams = Parameters<typeof fetch>;

export const fetcher = <T>(...params: FetchParams): Promise<T> => {
  return fetch(...params).then(resp => resp.json() as Promise<T>);
};

interface GetAllCountries {
  setIsLoading: (T: boolean) => void;
  setCountries: (T: CountryType[]) => void;
}

export const getAllCountries = async ({
  setIsLoading,
  setCountries,
}: GetAllCountries) => {
  try {
    setIsLoading(true);
    const _countries: CountryType[] = await fetcher(ALL_COUNTRIES);
    setCountries(_countries);
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error getting countries!",
    });
    console.warn("ERROR ON GETTING COUNTRIES DATA: ", error);
  } finally {
    setIsLoading(false);
  }
};

interface GetCountryByName {
  name: string;
  fullName?: boolean;
  setIsLoading: (T: boolean) => void;
  setCountry?: (T: CountryType) => void;
  setSuggestedCountries?: (T: CountryType[]) => void;
}

/* This function will get 2 types of query: 
    1. FullName that will show user come from countries list
    2. PartialName that will show that user comes from searching the country name
*/
export const getCountryByName = async ({
  name,
  setIsLoading,
  // these two have default invocable body (coz they can be undefined in certain situation)
  setCountry = () => null,
  setSuggestedCountries = () => null,
  fullName,
}: GetCountryByName) => {
  try {
    setIsLoading(true);
    const hasFullName = fullName ? "?fullText=true" : "";
    const _country: CountryType[] = await fetcher(
      `${FETCH_COUNTRY_BY_NAME + name + hasFullName}`,
    );
    if (fullName) {
      setCountry(_country[0]);
    } else {
      setSuggestedCountries(_country);
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error getting country!",
    });
    console.warn("ERROR ON GETTING COUNTRY DATA: ", error);
  } finally {
    setIsLoading(false);
  }
};

interface GetExchangeRate {
  from: string;
  to: string;
  amount: number;
  setIsLoading: (T: boolean) => void;
  setResult: (T: number) => void;
  setRate: (T: number) => void;
}

export const getExchangeResult = async ({
  from,
  to,
  amount,
  setIsLoading,
  setRate,
  setResult,
}: GetExchangeRate) => {
  try {
    setIsLoading(true);
    const response: any = await fetcher(
      `${FETCH_EXCHANGE}from=${from}&to=${to}&amount=${amount}`,
    );
    setResult(response?.result);
    setRate(response.info?.rate);
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error Exchanging!",
    });
    console.warn("ERROR ON EXCHANGING THE AMOUNT: ", error);
  } finally {
    setIsLoading(false);
  }
};
