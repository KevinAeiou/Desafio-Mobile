import { CameraView, BarcodeScanningResult } from 'expo-camera';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import BotaoFechar from '../BotaoFechar';
import Camera from '../Camera';

interface QRScannerProps {
    scanned: boolean;
    setScanned: (valor: boolean) => void;
    setScannedData: (valor: string | null) => void;
    setCameraActive: (valor: boolean) => void;
}
interface aoCodigoDigitalizadoProps extends BarcodeScanningResult {
    type: string;
    data: string;
}

export default function QRScanner({ scanned, setScanned, setScannedData, setCameraActive }: QRScannerProps) {
    const aoCodigoDigitalizado = ({ type, data }: aoCodigoDigitalizadoProps) => {
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
            <Camera 
                scanned= {scanned}
                aoCodigoDigitalizado={() => aoCodigoDigitalizado}
            />
            <BotaoFechar aoClicar={() => setCameraActive(false)}/>
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
});