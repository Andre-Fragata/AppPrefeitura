import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function Start() {
    const navigation = useNavigation();

    const onPressBotao = () => {
        navigation.navigate('TelaHome');
    }
    const onPressFunc = () => {
        navigation.navigate('TelaHome');
    }


    return(
        <View>
            <Text>Usuário</Text>
            <Button title="Ir para próxima tela" onPress={onPressBotao}/>
            <Text>Funcionário</Text>
            <Button title="tela funcionário" onPress={onPressFunc}/>
        </View>
    )
}