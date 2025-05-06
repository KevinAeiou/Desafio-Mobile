import { CameraView } from 'expo-camera';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function QRScanner({ scanned, setScanned, setScannedData, setCameraActive }) {
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        Alert.alert(
            "QR Code Escaneado!",
            `Tipo: ${type}\nConteúdo: ${data}`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        setScanned(false);
                        setCameraActive(false);
                    }
                }
            ]
        );
    };
    return (
        <View style= {styles.container}>
            <CameraView
                style= {styles.camera}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr", "pdf417"],
                }}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            >
                <View style={styles.overlay}>
                    <View style={styles.unfocusedContainer} />
                        <View style={styles.middleContainer}>
                            <View style={styles.unfocusedContainer} />
                                <View style={styles.focusedContainer} />
                            <View style={styles.unfocusedContainer} />
                        </View>
                    <View style={styles.unfocusedContainer} />
                </View>
            </CameraView>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setCameraActive(false)}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
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
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },
    unfocusedContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    middleContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    focusedContainer: {
        flex: 10,
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 2,
        borderRadius: 10,
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