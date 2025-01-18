
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { theme } from "../theme";
let { colorWhite, colorCerulean } = theme;
import AntDesign from '@expo/vector-icons/AntDesign';



const BrandOrder = ({ name, isCompleted = false }) => {
    
    const handleDelete = () => {
        Alert.alert(`Are you sure you want to delete ${name}?`, "It will be removed permanently", [
                  {
                    text: "Okay",
                    style: 'destructive',
                onPress: () => { Alert.alert('gone')}
                  },
                  {
                    text: "Cancel",
                    style: "cancel"
                  }
        
 ])
    } 
    
    return (
        
        <View style={[styles.itemsContainer, isCompleted ? styles.completedContainer: null]}>
            <Text style={[styles.itemsText, isCompleted ? styles.completeTxt: null]}> { name }</Text>
                <TouchableOpacity onPress={handleDelete} activeOpacity={0.8} style={[styles.deleteBtn, isCompleted ? styles.completeButton : null]}>
                    <Text style={styles.deleteTxt}><AntDesign name="delete" size={22} color={isCompleted ? theme.colorGrey: theme.colorRed} /></Text>
              </TouchableOpacity>
              </View>
    )
}


const styles = StyleSheet.create({
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
    completedContainer: {
        backgroundColor: theme.colorLightGrey,
        borderBottomColor: theme.colorGrey,

        
    },
    completeButton: {
        color: theme.colorGrey,
    },
    completeTxt: {
        textDecorationLine: "line-through",
        textDecorationColor: theme.Grey,
        color: theme.colorGrey
    },
    deleteBtn: {
    marginHorizontal: 10,
    padding: 8,
    //backgroundColor: colorBlack,
    borderRadius: 6,
   
    },
  deleteTxt: {
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: colorWhite,
   
  }
 
});

export {BrandOrder}