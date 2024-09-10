import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { CountriesInterface, Country } from "../../interfaces/Countries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyContext } from "../../context/MyProvider";


export default function Countries({ data, handleValue, myPlace}: CountriesInterface) {

  
  const {country , setCountry, capital, setCapital} = useContext(MyContext)

 


  const handleOnChange = async (item: Country) => {
    handleValue(item.name, item.capital)
    setCapital(item.capital)
    setCountry(item.name)
    
    console.log(capital)
  };
  

  return (
    <View>
      
        <View style={styles.methodContainer}>
          <Text style={{ fontSize: 15, fontWeight: "500", margin:5 }}>
            Select a country
          </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={{ fontSize: 12 }}
            data={data}
            search={true}
            maxHeight={500}
            labelField="name"
            valueField="capital"
            placeholder='city'
            renderItem={i=>{
              return(
                <Text style={{padding:10, margin:12}}>{i.name} / {i.capital}</Text>
              )
            }}
            searchPlaceholder="country name only"
            value={capital}
            onChange={handleOnChange}
          />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  methodContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: "snow",
    elevation: 5,
    borderRadius: 5,
  },
  dropdown: {
    margin: 5,
    height: 50,
    width: "99%",
    padding: 9,
    borderWidth: 1,
    borderRadius: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 10,
  },

  inputSearchStyle: {
    height: 50,
    fontSize: 13,
    padding: 1,
    borderRadius: 7,
  },
});
