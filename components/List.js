import { View,  Text } from "react-native";

export default function ListaCep({item}) {
    return(
      <View>
      <Text>CEP: {item.cep}</Text>
      <Text>Logradouro: {item.logradouro}</Text>
      <Text>Complemento: {item.complemento}</Text>
      <Text>Bairro: {item.bairro}</Text>
      <Text>Localidade: {item.localidade}</Text>
      <Text>UF: {item.uf}</Text>
      <Text>IBGE: {item.ibge}</Text>
      <Text>GIA: {item.gia}</Text>
      <Text>DDD: {item.ddd}</Text>
      <Text>SIAFI: {item.siafi}</Text>
      <Text> --------------------</Text>
    </View>
    )
}