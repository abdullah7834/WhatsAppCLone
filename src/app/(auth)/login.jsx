import { View, Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import ButtonComp from "../../components/atoms/ButtonComp";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";



const Login = () => {
 
 
const  onnextButtonClick=() =>{
    router.push('/(auth)/verify_otp')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}> What’s my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity style={styles.drpo_down_container}  >
            <View/>
            <Text style={styles.drpo_down_title}>Pakistan</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line}/>
          <View style={styles.input_container}>
            <TouchableOpacity style={styles.country_code} >
              <Text style={styles.country_code_text}>+ 92</Text>
              <View style={styles.horizontal_line}/>
            </TouchableOpacity>
            <View style={{gap:verticalScale(10) , flex:1}}>
            <TextInput style={styles.input} placeholder="Enter your Phone Number" underlineColorAndroid="transparent" />
            <View style={styles.horizontal_line}/>

            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title={"Next"} style={{paddingHorizontal:scale(29)}} onPress={onnextButtonClick} />
      </View>
 
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'space-between',
  alignItems:'center',
  paddingVertical:verticalScale(50),
  paddingHorizontal:scale(40)
 },
  header: {
    gap: verticalScale(50),
  },
  heading_container: {
    gap: verticalScale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color:"black",
    fontWeight:'bold',
    textAlign:'center'
  },
  description: {
    textAlign:'center',
    fontSize: moderateScale(13),
    fontWeight:400,
    color:'black'
  },
  link_description: {
    color:'#002AC0'
  },
  input_main_container: {},
  footer: {},
  horizontal_line:{
    width:'100%',
    height:verticalScale(1),
    backgroundColor:'#05AAB2',

  },
  drpo_down_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(20)
  },
  drpo_down_title:{
    fontSize:moderateScale(16),
    fontWeight:"500",
    color:"black"
  },
  input_container:{
// paddingHorizontal:scale(20),
paddingVertical:verticalScale(12),
flexDirection:'row',
alignItems:'center',
gap:scale(20)
  },
  country_code:{
    gap:verticalScale(10)
  },
  input:{
    fontSize:moderateScale(16),
    color:'grey',
    borderStyle:'none'
  },
  country_code_text:{
    fontSize:moderateScale(16),
    fontWeight:"500",
    color:"black"
  }
});


export default Login;
