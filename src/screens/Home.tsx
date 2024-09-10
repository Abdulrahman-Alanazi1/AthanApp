import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Agenda } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import useAthan from "../hooks/apis/useAthan";
import momentHijri from "moment-hijri";
import { MyContext, MyPlace } from "../context/MyProvider";
import PrayingTimes from "../components/home/PrayingTimes";
/* 
things to be added:
-- making the ui better.
-- a timer for each prayer time that it should
show the time lift between the current time and the pray time in the middle of linearGradiant view.
*/
export default function Home() {
  const [dateCal, setDateCal] = useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const currentHijriDate = momentHijri();

  const { country, capital }: MyPlace = useContext(MyContext);

  const { athan, isLoadingAthan } = useAthan(
    dateCal,
    capital || "Riyadh",
    country || "Saudi Arabia"
  );

  //console.log(country, "and", capital);

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["purple", "blue", "black"]}
          locations={[0.0, 0.5, 1]}
          style={styles.primaryCard}
        >
          <View style={styles.linearContentContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.currentHijriDate}>
                {currentHijriDate.locale("en").format("D iMMMM (iM) iYYYY")}
              </Text>
              <Text style={styles.currentHijriDate}>
                {currentHijriDate.locale("ar").format("iD iMMMM (iM) iYYYY")}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.currentHijriDate}>
                {isLoadingAthan ? null : athan?.data.meta.timezone}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <Agenda
          hideKnob={true}
          showClosingKnob={true}
          columnWrapperStyle={{ backgroundColor: "lightpink" }}
          style={{ borderRadius: 10 }}
          refreshing={true}
          showOnlySelectedDayItems
          renderList={(list) => {
            return (
              <View>
                <PrayingTimes athan={athan} isLoadingAthan={isLoadingAthan} />
              </View>
            );
          }}
          onDayPress={(date) => {
            setDateCal(date.dateString);
          }}
          renderEmptyData={() => {
            return (
              <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} color={"blue"} />
                <Text>Loading ...</Text>
              </SafeAreaView>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryCard: {
    height: 250,
    backgroundColor: "",
    padding: 10,
    margin: 5,
    borderRadius: 11,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  linearContentContainer: {
    flex: 1,
  },
  currentHijriDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: "yellow",
    margin: 10,
  },
  loadingContainer: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
