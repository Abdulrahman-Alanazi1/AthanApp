import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React from "react";
import { RootObject } from "../../interfaces/Athan";
/* 
things to be added:
- isLoadingAthan
*/

type prayingTimes = {
  athan: RootObject | undefined;
  isLoadingAthan: boolean;
};
export default function PrayingTimes({ athan, isLoadingAthan }: prayingTimes) {

  if (isLoadingAthan) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"blue"} />
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  }
  return (
    
    <View style={styles.container}>
        <View style={styles.prayContainer}>
        <Text>Fajr Time</Text>
        <Text>{athan?.data.timings.Fajr}</Text>
      </View>
      <View style={styles.prayContainer}>
        <Text>Sunrise Time</Text>
        <Text>{athan?.data.timings.Sunrise}</Text>
      </View>
      <View style={styles.prayContainer}>
        <Text>Dhuhr Time</Text>
        <Text>{athan?.data.timings.Dhuhr}</Text>
      </View>
      <View style={styles.prayContainer}>
        <Text>Asr Time</Text>
        <Text>{athan?.data.timings.Asr}</Text>
      </View>
      <View style={styles.prayContainer}>
        <Text>Maghrib Time</Text>
        <Text>{athan?.data.timings.Maghrib}</Text>
      </View>
      <View style={styles.prayContainer}>
        <Text>Isha Time</Text>
        <Text>{athan?.data.timings.Isha}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
    margin: 15,
    backgroundColor: "snow",
    elevation: 5,
    borderRadius: 10,
  },
  prayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
});
