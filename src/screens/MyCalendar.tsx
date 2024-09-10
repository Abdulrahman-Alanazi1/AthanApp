import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import IonIcon from "@expo/vector-icons/Ionicons";
import CalendarCom from "../components/calendars/CalendarCom";
import momentHijri from "moment-hijri";
export default function MyCalendar() {
  const [daysLeft, setdaysLeft] = useState<number>(0);

  const currentDate = momentHijri();
  
  const year = momentHijri().format("iYYYY");
  const targetDate = momentHijri(`${year}-9-1`, "iYYYY-iMM-iDD");
  useEffect(() => {
    const daysLeft = targetDate.diff(currentDate, "days");
    setdaysLeft(daysLeft);
  }, []); 
  return (
    <View style={{ flex: 1 }}>
      <CalendarCom />
      <View style={{padding:10, backgroundColor:'gray',margin:5, borderRadius:5, elevation:5}}>
        <Text style={{ textAlign: "center", color:'snow'}}>
          {currentDate.locale('en').format("iD iMMMM (iM) iYYYY")}
        </Text>
      </View>
      <View style={styles.ramdanContainer}>
        <View style={styles.ramdanCalendar}>
          <Text>Time remaining for Ramdan</Text>
          <View
            style={{ marginTop: 9, flexDirection: "row", alignItems: "center" }}
          >
            <IonIcon name="calendar-outline" size={24} color={"gray"} />
            <Text style={{ marginLeft: 5, color: "gray" }}>
              {targetDate.locale('en').format('iD iMMMM (iM) iYYYY')} ( {targetDate.fromNow()} )
            </Text>
          </View>
        </View>
        <View style={styles.ramdanTimer}>
          <Text style={styles.timerText}>{daysLeft}</Text>
          <Text style={{ fontSize: 12 }}>Day/s</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ramdanContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: "snow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    borderRadius: 10,
  },
  ramdanCalendar: {
    padding: 3,
    margin: 3,
  },
  ramdanTimer: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "lightgray",
  },
  timerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
