import { ActivityIndicator, StyleSheet } from "react-native";


export default function IndicadorProgresso() {
    return (
        <ActivityIndicator size='large' color='#6200ee' style={styles.loader} />
    )
}

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
});