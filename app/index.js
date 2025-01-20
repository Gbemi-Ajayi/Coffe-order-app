//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { theme } from "../theme";
import { BrandOrder } from "../Components/BrandOrder"
import { Link, useRouter } from "expo-router";

let { colorWhite} = theme;

export default function App() {
  
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("./counter")}>
        <Text style={{ textAlign: "center", marginBottom: 18, fontSize: 40 }}>
          Go to Counter
        </Text>
      </TouchableOpacity>
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
