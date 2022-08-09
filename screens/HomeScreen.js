import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { auth,firestore } from '../firebase';
import LauraScreen from './LauraScreen';
import BlankScreen from './BlankScreen';
import Mapa from './Mapa';
import ListarPontos from './ListarPontos';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Kauan" component={BlankScreen} />
      <Drawer.Screen name="Laura" component={LauraScreen} />
      <Drawer.Screen name="mapa" component={Mapa} />
      <Drawer.Screen name="Listar Pontos" component={ListarPontos} />
    </Drawer.Navigator>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
