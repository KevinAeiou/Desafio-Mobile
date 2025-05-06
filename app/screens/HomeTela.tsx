import React, { useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import CampoTexto from "../components/CampoTexto";
import IndicadorProgresso from "../components/IndicadorProgresso";
import Lista from "../components/Lista";
import CampoBusca from "../components/CampoBusca";
import BarraEstado from "../components/BarraEstado";
import BarraSuperior from "../components/BarraSuperior";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function HomeTela() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsFiltrados, setPostsFiltrados] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchWidth] = useState(new Animated.Value(0));

  const mostraDados = (dados: Post | Post[] | null) => {
    setCarregando(true);
    
    if(dados === null) {
      setCarregando(false);
      return;
    }

    const postsArray = Array.isArray(dados)
      ? dados
      : [dados];

    setPosts(postsArray);
    setPostsFiltrados(postsArray);
    setCarregando(false);
  };

  const aoBuscar = (texto: string) => {
    setSearchQuery(texto);
    if (texto.length === 0) {
      setPostsFiltrados(posts);
      return
    }
    if (posts.length > 0) {
      setPostsFiltrados(posts.filter(post => post.title.toLowerCase().includes(texto.toLocaleLowerCase())));
    }
  };

  const toogleSearch = () => {
    if (showSearch) {
      setSearchQuery('');
      setPostsFiltrados(posts);
      Animated.timing(searchWidth, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start(() => setShowSearch(false));
      return
    }
    setShowSearch(true);
    Animated.timing(searchWidth, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };
  
  return (
    <View style={styles.conteiner}>
      <BarraEstado />
      <BarraSuperior
        titulo="Posts"
        mostrarBusca={showSearch}
        aoClicarBusca={toogleSearch}
      >
        <Animated.View style={[
          styles.searchContainer,
          {
            width: showSearch ? '100%' : searchWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            opacity: showSearch ? 1 : searchWidth
          }
        ]}>
          <CampoBusca
            aoBuscar={aoBuscar}
            toogleSearch={toogleSearch}
            showSearch={showSearch}
            searchQuery={searchQuery}
          />
        </Animated.View>
      </BarraSuperior>
      <View style={styles.conteinerCampos}>
        <CampoTexto aoDadosRecebidos={mostraDados}/>
        {carregando && <IndicadorProgresso />}
        {postsFiltrados.length > 0 ? (
          <Lista posts={postsFiltrados}/>
        ) : (
          !carregando && <Text style= {styles.emptyText}>Nenhum post encontrado</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#f5f5f5',
  },
  conteinerCampos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#6c757d',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});