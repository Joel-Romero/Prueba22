import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ejercicio5 = () => {
  return (
    <View style={style.container}>
    <View style={style.boxBlue}></View>
    <View style={style.boxOrange}></View>
    <View style={style.boxSkyblue}></View>
    </View>
  )
}


//Gestion estilos
const style = StyleSheet.create({
    container:{
        flex: 1,
        width:500,
        height: 300,
        marginTop:50,
        paddingTop: 45,
        backgroundColor:'#5d8991',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    boxOrange:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        top:400,
        left:170,
        position:'absolute',
    },
    boxBlue:{
        width:100,
        height:100,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
        top:10,
        left:0,
        position:'absolute',
        right:0
        
    },
    boxSkyblue:{
        width:100,
        height:100,
        backgroundColor:'#08c1e3',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:790,
        left:350,
        alignContent:'center'
        

}});