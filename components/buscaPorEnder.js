import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
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
    <View>
      <Text>Vamos buscar o CEP</Text>
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
        placeholder="Digite o nome da rua sem numero"
        onChangeText={setLogradouro}
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
export default BuscaPorEnder;