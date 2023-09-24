import { Text, TextInput, View } from "react-native";
import { styles } from "./style";


export function Home(){

    return(
        <View style={styles.main}>
            <Text style={{color: 'white'}}>Endereço:</Text>
            <TextInput
            style={styles.input}
            placeholder="rua"
            />
            <Text style={{color: 'white'}}>Número:</Text>
            <TextInput
            style={styles.input}
            placeholder="numero"
            />
            <Text style={{color: 'white'}}>Bairro:</Text>
            <TextInput
            style={styles.input}
            placeholder="bairro"
            />
        </View>
    )
}