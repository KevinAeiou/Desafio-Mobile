import { useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Botao from '../components/Botao';
import Permissao from '../components/Permissao';
import QRScanner from '../components/QRScanner/indesx';
import BarraEstado from '../components/BarraEstado';
import BarraSuperior from '../components/BarraSuperior';


export default function CameraTela() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [scannedData, setScannedData] = useState<string | null>(null);
    
    if (!permission) {
        return <View />;
    }
    if (!permission.granted) {
        return (
            <Permissao requestPermission= {requestPermission} />
        )
    }
    
    const aoClicar = () => {
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

const styles = StyleSheet.create({
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