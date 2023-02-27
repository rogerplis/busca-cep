import React from "react";
import {  StyleSheet } from "react-native";
import {StatusBar} from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native'

import Routes from "./routes/Routes";


export default function App() { 
  return (
    <NavigationContainer style={styles.container}>   
     <Routes/>
     <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
