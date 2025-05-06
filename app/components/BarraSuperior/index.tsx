import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";

interface BarraSuperiorProps {
  titulo: string;
  mostrarBusca: boolean;
  aoClicarBusca: () => void;
  children?: React.ReactNode;
}

export default function BarraSuperior({ titulo, mostrarBusca, aoClicarBusca, children }: BarraSuperiorProps) {
  const theme = useTheme();
    return (
      <View style={[styles.barra, { backgroundColor: theme.colors.primary}]}>
        <Text style={styles.titulo}>{titulo}</Text>
        {children}
        {!mostrarBusca && (
          <TouchableOpacity 
            onPress={aoClicarBusca}
            style={styles.botaoBusca}
            activeOpacity={0.7}
          >
            <Text style={styles.iconeBusca}>🔍</Text>
          </TouchableOpacity>
        )}
      </View>
    )
}
const styles = StyleSheet.create({
  barra: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    elevation: 0,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  botaoBusca: {
    padding: 8,
  },
  iconeBusca: {
    fontSize: 24,
    color: 'white',
  },
});