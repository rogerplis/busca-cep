import { View,  Text, StyleSheet } from "react-native";

export default function ListaCep({item}) {
    return(
      <View style={styles.container} >
      <Text>CEP: {item.cep}</Text>
      <Text>Logradouro: {item.logradouro}</Text>
      <Text>Complemento: {item.complemento}</Text>
      <Text>Bairro: {item.bairro}</Text>
      <Text>Localidade: {item.localidade}</Text>
      <Text>UF: {item.uf}</Text>           
      <Text>DDD: {item.ddd}</Text>      
      <Text> --------------------</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginLeft:3,
  }
})