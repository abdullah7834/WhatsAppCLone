import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Auth = () => {
  return (
    <View>
     <Link href={"/login"}>Login</Link>
    </View>
  )
}

export default Auth