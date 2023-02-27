import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import {StatusBar} from "expo-status-bar";
import axios from "axios";

import ListaCep from "./List";

const BuscaPorEnder = () => {
  const [data, setData] = useState(null);
  const [uf, setUf] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [logradouro, setLogradouro] = useState("");

  const handPress = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`http://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error;
      });
  }, [uf, localidade, logradouro]);
  
  return (
    <View style={styles.container} >
      <Text style={styles.textStyle} >Vamos buscar o CEP</Text>
      <Text style={styles.textStyle} >Preencha os dados abaixo</Text>
      <TextInput
        style={styles.textImput}
        placeholder="Digite a UF"
        onChangeText={setUf}
      />
      <TextInput
        style={styles.textImput}
        placeholder="Digite o Municipio"
        onChangeText={setLocalidade}
      />
      <TextInput
        style={styles.textImput}
        placeholder="Digite somente o nome da Rua sem numero"
        onChangeText={setLogradouro}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListaCep item={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.dataList}
      />
      <StatusBar style="light" />
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
    margin: 10,
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
export default BuscaPorEnder;