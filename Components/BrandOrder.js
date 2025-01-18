
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { theme } from "../theme";
let { colorWhite, colorCerulean, colorBlack } = theme;



const BrandOrder = ({ name }) => {
    
    const handleDelete = ({name}) => {
        Alert.alert(`Are you sure you want to delete ${name}?`, "It will be removed permanently", [
                  {
                    text: "Okay",
                    style: 'destructive',
                    onPress: () => {Alert.alert('gone')}
                  },
                  {
                    text: "Cancel",
                    style: "cancel"
                  }
        
 ])
    } 
    
    return (
        
        <View style={styles.itemsContainer}>
            <Text style={styles.itemsText}> { name }</Text>
                <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
                    <Text style={styles.deleteBtn}>Delete</Text>
              </TouchableOpacity>
              </View>
    )
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

export { BrandOrder}