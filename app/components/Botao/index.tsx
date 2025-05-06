import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoProps {
    aoClicar: () => void;
    texto: string;
}

export default function Botao({ aoClicar, texto }: BotaoProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={aoClicar}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200ee',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});