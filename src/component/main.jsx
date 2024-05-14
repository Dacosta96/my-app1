import { View } from "react-native";
import NavigationStack from "./../navigation/NavigationStack";
import NavigationTab from "../navigation/NavigationTab";
import NavigationDrawer from "../navigation/NavigationDrawer";

export default function Main() {
  return (
    <View style={{ marginTop: 50, flexGrow: 1 }}>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </View>
  );
}
