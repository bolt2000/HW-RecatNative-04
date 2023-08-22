import {
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./src/Screens/MapScreen/MapScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <MapScreen />
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}
