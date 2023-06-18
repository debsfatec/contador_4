import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Contador from './src/components/Contador'
import Duplicador from './src/components/Duplicador'

export default function App() {
  return (
    <View style={style.App}>
    <Contador inicial={500}/>
    <Duplicador inicial={2}/>
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    backgroundColor:'#d62063',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


