import { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

interface CampoBuscaProps {
    aoBuscar: (texto: string) => void;
    toogleSearch: () => void;
    showSearch: boolean;
    searchQuery: string;
}

export default function CampoBusca({ aoBuscar, toogleSearch, showSearch, searchQuery }: CampoBuscaProps) {    
    return (
        <Searchbar
            placeholder="Buscar posts..."
            placeholderTextColor='#999'
            onChangeText={aoBuscar}
            value={searchQuery}
            style={styles.searchBar}
            autoFocus={showSearch}
            onIconPress={toogleSearch}
            icon={showSearch ? 'arrow-left' : 'magnify'}
            inputStyle={styles.searchInput}
            elevation={2}
            theme={{
              colors: {
                primary: 'black',
                text: 'black',
                placeholder: 'rgba(255,255,255,0.7',
              },
              roundness: 10,
            }}
          />
    )
}
const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    marginRight: 8,
  },
  searchInput: {
    color: 'black',
    fontSize: 14,
    paddingBottom: 2,
  },
});