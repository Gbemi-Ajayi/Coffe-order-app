//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Alert} from "react-native";
import { theme } from "./theme";
import {BrandOrder} from "./Components/BrandOrder"

let { colorWhite, colorCerulean, colorBlack} = theme;

export default function App() {
  return (
    
    <View style={styles.container}>
      <BrandOrder name="Coffee"/>  
      <BrandOrder name="Tea"/>  
      <BrandOrder name="Hot Chocolate"/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite,
    justifyContent: "center",
  },
  itemsText: {
    fontSize: 20,
    fontWeight: 200
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: colorCerulean
  },
  deleteBtn: {
    marginHorizontal: 10,
    padding: 8,
    color: colorWhite,
    backgroundColor: colorBlack,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 6,
    letterSpacing: 1,
    textTransform: "uppercase"
  }
 
});
