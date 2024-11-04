import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagesPath from "../../constants/imagesPath";
import {  verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

const Auth = () => {
  const[isloading  , setIsloading] = useState(false)
  // now we are making logic that the first it will be displayed for the 2 seconds and then the loading screen will be appear after that  
  let navigate_to_welcomeScreen =() =>{
    router.push("/(auth)/terms_agree")
  }
  useEffect(()=>{
    // ab yeh k 2 seconds k baad loading wala screen a jaeyga 
    const timeout = setTimeout(() => {
      setIsloading(true)
      setTimeout(()=>{
        navigate_to_welcomeScreen()
      },3000)
    }, 2000);
// this funcition will be called when the component is unmounted and restrict it from running in the background   it is called the componnetdidunmount 
    return ()=>{
      clearTimeout(timeout)
    }
  })
  return (
    // Safe Area View Gave a padding from the top to the Bottom
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagesPath.logo}
          style={styles.image_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {/* In this we use the loading screen effect for the two seconds:: */}
        {
          isloading ? (
            <>
            {/* By default React Native Loadding effect jo gol gol ghoomta hai  */}
            <ActivityIndicator size={moderateScale(48)}  color={"#0ccc83"}/>
            <Text style={styles.loading_text}>Loading...</Text>
            </>
            ) :( <>
           <Text style={styles.from_text}>From</Text>
           <Text style={styles.facebook_text}>Facebook</Text>
          </>
            )
        }
       
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent:'flex-end'
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "black",
    textTransform:"uppercase",
  },
  image_style: {
    // this will take the values inside a container item  according to width and  height of the Screen   and if we want the same height and the width we will use the moderate scale value
    width: verticalScale(70),
    height: verticalScale(70),
    borderRadius: verticalScale(70),
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "black",
    fontWeight: "bold",
  },
  loading_text:{
    color: "#00A884",
    fontSize: moderateScale(20),
    marginTop: verticalScale(15)
  }
});
