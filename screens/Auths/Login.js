import React,{useState} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

const Login = () => {

    const [phone, setphone] = useState('')

    const enterApp = ()=>{
        alert(phone)
    }

  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/img_sign.png")}
        style={styles.image_top}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <Text style={{color:'#39A388'}}>Sign In Now</Text>
      </View>
      <View style={{ marginTop: 80, paddingLeft: 10, paddingRight: 10 }}>
        <TextInput
          label="Phone Number"
          placeholder="Enter Phone Number"
          style={styles.input_box}
          onChangeText={text=>setphone(text)}
          left={<TextInput.Icon name="phone" />}
        />
        <Button mode="contained" dark style={styles.button_box} color="#39A388" onPress={e=>enterApp()}>
          Continue
        </Button>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={{color:'#cacaca'}}>or continue with</Text>
      </View>
      <View style={styles.external_auth}>
        <View style={styles.external_auth_card}>
          <Image
            style={styles.marker}
            source={require("../../assets/ic_fb.png")}
          />
          <Text style={styles.external_auth_text}>Facebook</Text>
        </View>
        <Text style={{ fontSize: 30, color: "#fff" }}>|</Text>
        <View style={styles.external_auth_card}>
          <Image
            style={styles.marker}
            source={require("../../assets/ic_google.png")}
          />
          <Text style={styles.external_auth_text}>Google</Text>
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image_top: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },
  input_box: {
    backgroundColor: "#fafafa",
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
  external_auth: {
    backgroundColor: "#39A388",
    height: 71,
    width: "100%",
    marginTop: 65,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  external_auth_card: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  external_auth_text: {
    fontSize:18,
    fontWeight:'600',
    color:"#fafafa"
  },
  marker: {
    height: 20,
    width: 20,
    marginTop: 5,
    marginRight: 7,
  },
});
