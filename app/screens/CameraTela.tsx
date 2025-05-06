import { useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Botao from '../components/Botao';
import Permissao from '../components/Permissao';
import QRScanner from '../components/QRScanner/indesx';
import BarraEstado from '../components/BarraEstado';
import BarraSuperior from '../components/BarraSuperior';


export default function CameraTela() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState<boolean>(false);
    const [cameraActive, setCameraActive] = useState<boolean>(false);
    const [scannedData, setScannedData] = useState<string | null>(null);
    
    if (!permission) {
        return <View />;
    }
    if (!permission.granted) {
        return (
            <Permissao requestPermission= {requestPermission} />
        )
    }
    
    const aoClicar = (): void => {
        setCameraActive(true);
        setScanned(false);
        setScannedData(null);
    }

    if (cameraActive) {
        return (
            <QRScanner 
                scanned={scanned}
                setScanned={setScanned}
                setScannedData={setScannedData}
                setCameraActive={setCameraActive}
            />
        )
    }

    return (
        <View style= {styles.container}>
            <BarraEstado />
            <BarraSuperior
                titulo='Câmera'
                mostrarBusca={true}
                aoClicarBusca={() => null}
            />
            <View style={styles.containerConteudo}>
                <Botao 
                    aoClicar={aoClicar}
                    texto= {'Abrir Câmera'}
                />
                {scannedData && (
                    <View style= {styles.resultContainer}>
                        <Text style= {styles.resultText}>Último código lido: {scannedData}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

interface Styles {
    container: ViewStyle;
    containerConteudo: ViewStyle;
    resultContainer: ViewStyle;
    resultText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    containerConteudo: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    resultContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    resultText: {
        fontSize: 16,
        color: '#333',
    },
});