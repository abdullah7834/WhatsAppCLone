import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonComp from '../../components/atoms/ButtonComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import OTPInput from "@codsod/react-native-otp-input";
import { useState } from 'react';


const Verify_Otp = () => {
  const [otp, setOTP] = useState("");

  const onVerify =() =>{

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={24} color="black" style={styles.backButton} />
      <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendtext}>Code has been send to +923** 8*****32</Text>
        <OTPInput length={4} onOtpComplete={(txt) => setOTP(txt)}  style={styles.otp_COntainer}
        inputStyle={styles.input_style} />
        <Text style={styles.otpReasendtext}>Resend Code in <Text style={styles.counter_text}>56</Text> s</Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="verify" onPress={onVerify} style={styles.verify_button} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:moderateScale(20),
    justifyContent:'space-between',
   paddingTop:verticalScale(40)
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    gap:scale(10)
  },
backButton:{
  fontSize:moderateScale(24),
  color:'black',
  fontWeight:'bold'
},
headTitle:{
  fontSize:moderateScale(24),
  color:'black',
  fontWeight:'bold'
},

  body:{
    alignItems:'center',
    gap:verticalScale(25)
  },
  otpSendtext:{
    fontSize:moderateScale(16),
    fontWeight:'400'
  },
  otpReasendtext:{},
  counter_text:{
    color:'#00A884'
  },



  footer:{},
  verify_button:{
    borderRadius:moderateScale(30)
  }, 
  input_style:{
    borderColor:'black',
    borderRadius:moderateScale(15),
   height:verticalScale(50),
   width:scale(50)
  },
  otp_COntainer:{
    gap:scale(10)
  }
})

export default Verify_Otp