import React , {useState} from 'react'
import {Text, Button} from 'react-native'
import estilo from './Estilo'

export default comp =>{

const [numero, setNumero] = useState(comp.inicial)

  const inc = () => setNumero(numero +1)
  const dec = () => setNumero(numero -1)
return(
  <>
  <Text style={estilo.FontGrande}>{numero}</Text>
  <Button title=" + " onPress={inc}/>
  <Button title=" - " onPress={dec}/>
  </>
)

}