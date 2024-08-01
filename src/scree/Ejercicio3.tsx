import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ejercicio3 = () => {
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
        left:0,
        position:'absolute',
        right:0
    },
    boxBlue:{
        width:100,
        height:100,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
        top:300,
        left:0,
        position:'absolute',
        right:0
        
    },
    boxSkyblue:{
        width:450,
        height:100,
        backgroundColor:'#08c1e3',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0,
        bottom:0,
        top:500,
        left:1
        

}});