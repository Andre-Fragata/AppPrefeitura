import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Start } from "../screens/Start";



const Stack = createStackNavigator();

export function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="TelaInicial" 
                component={Start}
                options={{
                    title: "Login Screen",
                }}
                />
                <Stack.Screen 
                name="TelaHome" 
                component={Home}
                options={{
                    title: "Teste"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}