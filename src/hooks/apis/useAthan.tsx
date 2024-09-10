import axios from "axios";
import React, { useState, useEffect } from "react";
import { RootObject } from "../../interfaces/Athan";

/* 
things to be added:
a praying methode --- it is in Method.tsx file and pass it as a prop and in "&method="
caching files for axios so it wont keeps on calling.
*/

const instance = axios.create({
  baseURL: "https://api.aladhan.com/v1/timingsByCity",
}); 

export default function useAthan( dateCal:string,city: string,country: string) {
  const [athan, setAthan] = useState<RootObject>();
  const [isLoadingAthan, setIsLoadingAthan] = useState(true);

  useEffect(() => {
    const AthanApi = async () => {
      try {
        const response = await instance.get<RootObject>(
          `${dateCal}?city=${city}&country=${country}&method=4`
        );
        console.log(response.status)
        setAthan(response.data);
        setIsLoadingAthan(false);
      } catch (error) {
        console.error("Error fetching data from useAthan.tsx:", error);
        setIsLoadingAthan(false);
      }
    };
    AthanApi();
  }, [dateCal, city, country]);

  return {athan, isLoadingAthan}
}
