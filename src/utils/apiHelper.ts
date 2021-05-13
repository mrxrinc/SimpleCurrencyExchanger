import Toast from "react-native-toast-message";
import { CountryType } from "types/country";
import { ALL_COUNTRIES, FETCH_COUNTRY_BY_NAME } from "@env";

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
  fullName: string;
  setIsLoading: (T: boolean) => void;
  setCountry: (T: CountryType) => void;
}

export const getCountryByName = async ({
  fullName,
  setIsLoading,
  setCountry,
}: GetCountryByName) => {
  try {
    setIsLoading(true);
    const _country: CountryType[] = await fetcher(
      `${FETCH_COUNTRY_BY_NAME + fullName}?fullText=true`,
    );
    setCountry(_country[0]);
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error getting country!",
    });
    console.warn("ERROR ON GETTING COUNTRy DATA: ", error);
  } finally {
    setIsLoading(false);
  }
};
