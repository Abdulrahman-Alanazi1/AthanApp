import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import IonIcons from "@expo/vector-icons/Ionicons";
import { MenuProvider } from "react-native-popup-menu";
import { useNavigation } from "@react-navigation/native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Settings from "./src/screens/Settings";
import MyCalendar from "./src/screens/MyCalendar";
import Details from "./src/screens/Details";
import React from "react";
import { MyProvider } from "./src/context/MyProvider";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function MyTabs() {

  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home1"
        component={Home}
        options={{
          headerShown: false,
          title: "Praying Time",
          tabBarIcon: ({ color }) => (
            <IonIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Calendar1"
        component={MyCalendar}
        options={{
          headerShown: false,
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <IonIcons name="calendar" size={24} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
function MyStack() {
  const navigation = useNavigation<any>();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: "Praying Times",
          headerRight: () => (
            <Menu>
              <MenuTrigger>
                <IonIcons name="ellipsis-vertical-sharp" size={24} />
              </MenuTrigger>
              <MenuOptions
                optionsContainerStyle={{
                  borderRadius: 5,
                  backgroundColor: "snow",
                }}
                customStyles={{ optionText: { margin: 5 } }}
              >
                <MenuOption
                  text="Setting"
                  onSelect={() => navigation.navigate("Settings")}
                />
                <MenuOption
                  text="About Us"
                  onSelect={() => alert("About Us")}
                />
              </MenuOptions>
            </Menu>
          ),
        }}
      />
      <Stack.Screen name="Settings" component={Settings} options={{}} />
      <Stack.Screen name="Details" component={Details} options={{}} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <MyProvider>
      <MenuProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </MenuProvider>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
