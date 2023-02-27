import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


import Button from "./Button";
const logo = require('../assets/img/R.jpg') 
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >Busque seu CEP ou endereço</Text>
      <Image source={logo} style={styles.ImageContainer}/>
      <Button
        theme={"primary"}
        label="Pesquisa por endereço"
        onPress={() => navigation.navigate("BUSCA POR ENDEREÇO")}
      />
      <Button
        theme={"primary"}
        label="Pesquisa por CEP"
        onPress={() => navigation.navigate("BUSCA POR CEP")}
      />
      
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between", 
    marginBottom: 100,   
  },
  ImageContainer: {
    width: 400,
    height: 100,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
  }

})