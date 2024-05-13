import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>inicio</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </View>
  );
}
