import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,TextInput, Button} from 'react-native';
import { firestore } from '../firebase'

const Mapa = () => {

  //function para salvar os dados no banco, após mostra um alert
const enviarDados = () => {
  firestore
  .collection('mapas')
  .add({
    nome: titulo,
    descricao: descricao,
    latitude: lat,
    longitude: long, 
  })
  .then(() => {
    alert('local '+titulo+' Adicionado com Sucesso')
    
  });
}
  //INSTANCIANDO AS const PARA DAR UM GET NOS INPUTS E A LAT E LNG PELO MAPS
  const [lat, onChangeLat] = useState('');
  const [long, onChangeLong] = useState('');
  
  const [titulo, onChangeTitulo] = useState('');
  const [descricao, onChangeDescricao] = useState('');

  const [coordenadas, onChangeCoordenadas] = useState([]);
  
  const onPress=()=>{
    onChangeCoordenadas([...coordenadas,{latitude:lat, longitude:long, titulo:titulo, descricao: descricao}])
    enviarDados()

  }

  // VIEW COM O MAPA E SETANDO AS COORDENADAS
  return (
    <View style={styles.container}>
          <View style={styles.viewMapa}>
              <MapView style={styles.map} onPress={(e)=> {
                onChangeLat(e.nativeEvent.coordinate.latitude)
                onChangeLong(e.nativeEvent.coordinate.longitude)
              }}  >
                {coordenadas.map((item)=>(
                  <Marker title = {item.titulo} description = {item.descricao} coordinate = {{latitude: item.latitude, longitude: item.longitude}}/>
                ))}
                
              </MapView>
          </View >
          
          <View style={styles.viewTexto}>
          <Text>Latitude: {lat}</Text>
            <Text>Longitude: {long}</Text>
            <Text style={styles.text}>TÍTULO</Text>
            <TextInput style={styles.input}
              onChangeText={onChangeTitulo} 
              value = {titulo}
            />

            <Text style={styles.text}>DESCRIÇÃO</Text>
            <TextInput style={styles.input}
              onChangeText={onChangeDescricao} 
              value = {descricao}
            />

            <Button
              onPress={onPress}
              title="Salvar"
              color="#483D8B"
              backgroundColor='black'
            />
          </View>
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  viewTexto: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  viewMapa: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  map: {
    flex:1,
  },
text:{
  marginLeft: 160,
},
  input:{
    width: Dimensions.get('screen').width*0.9,
    height:36, 
    backgroundColor: 'gray',
    color: '#fff',
    marginLeft: 20 
    
  }
});
export default Mapa