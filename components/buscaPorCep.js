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
      })
      .catch((error) => {
        console.error;
      });
  }, [cep]);
  console.log(data)
  return (
    <View>
      <Text>Vamos buscar o Endereço</Text>
      <TextInput
        style={styles.textImput}
        placeholder="Digite o CEP"
        onChangeText={setCep}
      /> 
       
      <FlatList
        data={data}
        renderItem={({ item }) => <ListaCep item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  textImput: {
    margin: 20,
    padding: 2,
    borderColor: "#f3f4",
    borderWidth: 2,
    height: 50,
    width: 300,
  },
});
export default BuscaPorCep;