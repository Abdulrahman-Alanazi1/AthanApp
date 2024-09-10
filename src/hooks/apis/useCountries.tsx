import React, { useState, useEffect } from "react";
import axios from "axios";
import { CountriesInterface } from "../../interfaces/Countries";

/* 
things to be added:
- changing the api to a better api -- this one used to break.
*/

const instance = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
});

export default function useCountries() {
  const [countries, setCountries] = useState<CountriesInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countriesApi = async () => {
      try {
        const response = await instance.get("/capital");
        setCountries(response.data);
        setIsLoading(false)
       
      } catch (error) {
        console.error("Error fetching data from useCountries.tsx  : " + error);
      }
    };
    countriesApi()
  }, [countries]);

  return {countries, isLoading}
}
