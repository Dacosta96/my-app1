import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/component/main";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
