import {Redirect, Stack} from "expo-router"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react"
//  Below line means that whenever we do not hide the Splash Screen It Will be Shown 
SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
const[islogin , setIsLogin] =useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hideAsync();
        },2000)
    },[])
  return (
    <>
    <Stack screenOptions={{headerShown:false}} />
     {
        // If user is logged In then go to the Chat areas otherwise go to the login page : Condition wise rendreing
        islogin ? <Redirect href={"/(main)"} /> :<Redirect href={"/(auth)"} />
     }
    </>
  )
}

export default RootNavigation