//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import {BrandOrder} from "./Components/BrandOrder"

let { colorWhite, colorCerulean, colorBlack} = theme;

export default function App() {
  return (
    
    <View style={styles.container}>
      <BrandOrder name="Coffee"/>  
      <BrandOrder name="Tea" isCompleted/>  
      <BrandOrder name="Hot Chocolate" isCompleted/>  
      <BrandOrder name="Iced Tea" isCompleted/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite,
    justifyContent: "center",
  }
 
});
