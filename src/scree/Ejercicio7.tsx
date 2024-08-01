import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ejercicio7 = () => {
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
        width:450,
        height:200,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        top:200,
        left:0,
        position:'absolute',
        right:0
    },
    boxBlue:{
        width:450,
        height:200,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
        top:0,
        left:0,
        position:'absolute',
        
    },
    boxSkyblue:{
        width:450,
        height:500,
        backgroundColor:'#08c1e3',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:400,
        left:1
        

}});