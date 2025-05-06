import { BarcodeScanningResult, CameraView } from "expo-camera";
import { StyleSheet, View } from "react-native";

interface CameraProps {
    scanned: boolean;
    aoCodigoDigitalizado: (scanningResult: BarcodeScanningResult) => void;
}

export default function Camera({ scanned, aoCodigoDigitalizado }: CameraProps) {
    return (
        <CameraView
            style= {styles.camera}
            barcodeScannerSettings={{
                barcodeTypes: ["qr", "pdf417"],
            }}
            onBarcodeScanned={scanned ? undefined : aoCodigoDigitalizado}
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
    )
}

const styles = StyleSheet.create({
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
});