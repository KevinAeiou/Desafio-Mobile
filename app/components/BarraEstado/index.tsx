import { StatusBar } from "react-native";
import { useTheme } from "react-native-paper";

export default function BarraEstado() {
    const theme = useTheme();
    
    return (
        <StatusBar
            backgroundColor={theme.colors.primary}
            barStyle="default"
        />
    )
}