import { View } from "react-native";
import React, { useContext } from "react";
import Method from "../components/settings/Method";
import Countries from "../components/settings/Countries";
import useCountries from "../hooks/apis/useCountries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyPlace, MyContext } from "../context/MyProvider";
export default function Settings() {
  const { countries, isLoading } = useCountries();
  

  const { country, setCountry, capital, setCapital }: MyPlace = useContext(MyContext);



  const handleValue = (country: string, capital: string) => {
    setCountry(country);
    setCapital(capital);
    console.log("country: " + country + " + capital: " + capital);
  };
   

  return (
    <View>
      <Method />
      <Countries
        data={countries?.data ?? []}
        handleValue={handleValue}
        myPlace={{ capital, country, setCapital, setCountry }}
      />
    </View>
  );
}
