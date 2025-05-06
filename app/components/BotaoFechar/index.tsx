import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoFecharProps {
    aoClicar: () => void;
}
export default function BotaoFechar({ aoClicar }: BotaoFecharProps) {
    return (
        <TouchableOpacity
            style={styles.closeButton}
            onPress={aoClicar}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});