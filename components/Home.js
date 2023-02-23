import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View, Text } from "react-native";

// import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HOME</Text>
      <Button
        title="Pesquisa por endereço"
        onPress={() => navigation.navigate("BuscaPorEnder")}
      />
      <Button
        title="Pesquisa por CEP"
        onPress={() => navigation.navigate("BuscaPorCep")}
      />
    </View>
  );
};

export default Home;
