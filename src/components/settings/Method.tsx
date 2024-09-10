import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
/* 
things to be added:
-- linking the values with useAthan hook.
*/
export default function Method() {
  const [value, setValue] = useState<string>("4");

  const data = [
    { label: "University of Islamic Sciences, Karachi", value: "1" },
    { label: " Islamic Society of North America", value: "2" },
    { label: "Muslim World League", value: "3" },
    { label: "Umm Al-Qura University, Makkah", value: "4" },
    { label: "Egyptian General Authority of Survey", value: "5" },
  ];
  return (
    <View>
      <View style={styles.methodContainer}>
        <Text style={{ fontSize: 15, fontWeight: "500", margin:5}}>
          Select a method
        </Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={{ fontSize: 12 }}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="method"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  methodContainer: {
    flexDirection: "column",
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
