import React from "react";
import{ useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import axios from "axios";

import ListaCep from "./List";

const BuscaPorCep = () => {
  const [data, setData] = useState(null);
  const [cep, setCep] = useState("");
  
  
  useEffect(() => {
    axios
      .get(`http://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setData([response.data]);
        console.log(response.data.length())
      })
      .catch((error) => {
        console.error;
      });
  }, [cep]);
  console.log(data)
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >Vamos buscar o Endereço</Text>
      <TextInput
        style={styles.textImput}
        placeholder="Digite o CEP"
        onChangeText={setCep}
      /> 
       
      <FlatList
        data={data}
        renderItem={({ item }) => <ListaCep item={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.dataList}
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    alignItems: "center",
  },
  textImput: {
    margin: 20,
    padding: 10,
    borderColor: "#ff8001",
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    width: 300,
    
  },  
  textStyle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  dataList: {
    textAlign:"left",
    borderWidth: 1,
    margin: 2,
    width: 300,
    maxHeight: 200,
    minHeight: 200
  }
});
export default BuscaPorCep;