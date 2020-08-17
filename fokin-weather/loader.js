import React from "react";
import {StyleSheet, Text , View} from "react-native";

// Function Component
export default function Loading (){
    return <View style={styles.container}>
        <Text style={styles.text}>Getting the Weather</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: "row",
      backgroundColor: 'white',
      paddingHorizontal: 30,
      paddingVertical: 100,
      justifyContent: 'flex-end',
      backgroundColor: "#FDF6AA"
    },
    
    text: {
      color: '#2c2c2c',
      fontSize: 30,
    },
  
    yellowView: {
      flex: 1,
      backgroundColor: 'yellow'
    },
  
    blueView: {
      flex: 1,
      backgroundColor: 'blue',
    },
  });
  