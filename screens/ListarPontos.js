import React ,{useState, useEffect} from 'react'
import {ActivityIndicator, SafeAreaView, View, FlatList, Text } from 'react-native';
import { firestore } from '../firebase'

const ListarPontos = () => {
  const [loading, setLoading] = useState(true); 
  const [mapas, setmapas] = useState([]); 

  //function para listar os pontos
  useEffect(() => {
    const subscriber = firestore.collection('mapas')
      .onSnapshot(querySnapshot => {
        const mapas = [];
        querySnapshot.forEach(documentSnapshot => {
          mapas.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.nome,
          });
        });
        setmapas(mapas);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

const Item = ({ nome }) => (
  <View>
    <Text>{nome}</Text>
  </View>
);

  const renderItem = ({ item }) => <Item nome={item.nome} />;

  return (
    <SafeAreaView >
      <FlatList 
      data={mapas} 
      renderItem={renderItem} 
      keyExtractor={item => item.nome} 
      />
    </SafeAreaView>
  );
};

export default ListarPontos;
