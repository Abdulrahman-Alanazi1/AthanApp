import { MyPlace } from "../context/MyProvider";

export interface CountriesInterface {
  // error: boolean;
  // msg: string;
  myPlace: MyPlace
  handleValue: (country: string,capital: string) => void; // this is for passing capital and country value to the setting screen
  data: Country[];
}

export interface Country {
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
}