import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CounterScreen() {

    const router = useRouter();

  return (
    <View style={styles.container}>
          <Text style={styles.text}>Counter</Text>
          <TouchableOpacity onPress={() => router.navigate("./idea")}>
            <Text style={{textAlign: "center", marginBottom: 18, fontSize: 40}}>
                Go to Idea
            </Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
