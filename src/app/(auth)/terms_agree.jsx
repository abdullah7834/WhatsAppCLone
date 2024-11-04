import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  verticalScale, moderateScale, scale } from "react-native-size-matters";
import imagesPath from '../../constants/imagesPath';
import ButtonComp from '../../components/atoms/ButtonComp';
import { router } from 'expo-router';


// In this page we made the three  three parts one is tha main container and second is the header and third is the footer

const TermsAgree = () => {
  const onAgree= ()=>{
    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
      {/* resize mode me yeh apny screen k height aur width k hisaab se adjust ho jaeyga  */}
      <Image  source={imagesPath.welcome} style={styles.image_style} resizeMode='contain' />
      <Text style={styles.description_text}>Read our <Text style={styles.link_text}>Privacy Policy.</Text>  Tap “Agree and continue” to 
      accept the <Text style={styles.link_text}>Teams of Service.</Text> 
      </Text>
      <View style={{width:300}}>
      <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
      </View>
     
     </View>
     <View style={styles.footer}>
     <Text style={styles.from_text}>From</Text>
     <Text style={styles.facebook_text}>Facebook</Text>
     </View>
    </SafeAreaView>
  )
}

export default TermsAgree
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(84),
    paddingHorizontal:scale(20)
  },
  header :{
    alignItems:'center',
    gap:verticalScale(30)

  },
  footer :{
    alignItems:"center"
    
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "black",
    textTransform:"uppercase",
    fontWeight:600
  },
  welcome_text:{
fontSize:moderateScale(30),
fontWeight:"bold",
color:"black",
marginBottom:verticalScale(10)
  },
  image_style:{
width:moderateScale(250),
height:moderateScale(250),
borderRadius:moderateScale(250),
  },
  description_text:{
textAlign:'center',
fontSize:moderateScale(13),
color:'black'
  },
  link_text:{
    color:'#0C42CC'

  }
})