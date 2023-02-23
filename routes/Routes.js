import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuscaPorEnder from "../components/buscaPorEnder";
import Home from "../components/Home";
import BuscaPorCep from "../components/buscaPorCep";
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="BuscaPorEnder" component={BuscaPorEnder}/>
            <Stack.Screen name="BuscaPorCep" component={BuscaPorCep}/>
        </Stack.Navigator>
    )
}
export default Routes;