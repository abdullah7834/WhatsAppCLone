import { View,  Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const Home = () => {
  return (
    <View>
        
     <Image  source={imagePath.react_logo} />
    </View>
  )
}

export default Home