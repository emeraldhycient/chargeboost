import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import axios from 'axios'

import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Register = ({navigation}) => {

  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e);
    }
  }

  const enterApp = ()=>{
    const formdata = new FormData();
    formdata.append("fullname",fullname)
    formdata.append("email",email)
    formdata.append("phone",phone)
    axios.post('https://chargeboost.cedarcourier.com/auth/createaccount.php',formdata)
    .then(res=>{
      if(res.data.status === "success"){
        alert(res.data.message)
        storeData('fullname',fullname)
        storeData('email',email)
        storeData('phone',phone)
        navigation.push('main')
      }else{
        alert(res.data.message);
      }
    })
    .catch(err=>{alert(err.response.data.message);})
  }

  return (
    <SafeAreaView>
    <View style={styles.image_top_holder}>
      <View style={{paddingTop:45,paddingLeft:50}}>
        <TouchableOpacity onPress={e=>navigation.pop()}>
        <Ionicons name="arrow-back" size={30} color="#000"/>
        </TouchableOpacity>
        <Text style={{fontSize:30,fontWeight:'800',marginBottom:10}}>Register</Text>
        <Text style={{color:'gray',fontSize:14,fontWeight:'700'}}>in less than a minute</Text>
      </View>
      <Image
        source={require("../../assets/img_signin.png")}
        resizeMode="contain"
        style={styles.image_top}
      />
      </View>
      <View style={styles.holder}>
        <TextInput
          label="Full Name"
          placeholder="Enter Full Name"
          style={styles.input_box}
          onChangeText={(text) => setfullname(text)}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter Email Address"
          style={styles.input_box}
          onChangeText={(text) => setemail(text)}
          left={<TextInput.Icon name="at" />}
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter Phone Number"
          style={styles.input_box}
          onChangeText={(text) => setphone(text)}
          left={<TextInput.Icon name="phone" />}
        />
      <Button
        mode="contained"
        dark
        style={styles.button_box}
        color="#39A388"
        onPress={(e) => enterApp()}
      >
        Continue
      </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  image_top_holder: {
    backgroundColor:"#B1D0E0",
    height: Dimensions.get("window").height / 3.5,
    width: "100%",
    flexDirection:'row',
    justifyContent:'space-around',
  },
  image_top:{
    height:135,
    width:330,
    left:40,
    top:70,
    bottom:0
  },
  holder:{
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingTop: 20, 
    paddingLeft: 10,
     paddingRight: 10 ,
     backgroundColor:"#fff",
     marginTop:-6
  },
  input_box: {
    backgroundColor: "#fafafa",
    marginTop:20
  },
  button_box: {
    height: 50,
    fontWeight: "900",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 16,
  },
});
