import { View } from "react-native";
import NavigationStack from "./../navigation/NavigationStack";

export default function Main() {
  return (
    <View style={{ marginTop: 50, flexGrow: 1 }}>
      <NavigationStack />
    </View>
  );
}
