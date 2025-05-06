import { PermissionResponse } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";

interface PermissaoProps {
    requestPermission: () => Promise<PermissionResponse>
}

export default function Permissao({ requestPermission }: PermissaoProps) {
    return (
        <View style= {styles.container}>
            <Text style= {styles.message}>Nós precisamos de sua permissão para acessar a câmera</Text>
            <Button onPress= {requestPermission} title= {'Dar permissão'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
});