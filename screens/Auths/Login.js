import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [phone, setphone] = useState("");

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const [islogged, setislogged] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("phone");
      if (value !== null) {
        setislogged(true);
      }
    } catch (e) {
      setislogged(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    islogged ? navigation.push("main") : null;
  }, [islogged]);

  const enterApp = () => {
    const formdata = new FormData();

    formdata.append("phone", phone);

    axios
      .post("https://chargeboost.cedarcourier.com/auth/login.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.message);
          setislogged(true);
          storeData("phone", phone);
          storeData("fullname", res.data.data.fullname);
          storeData("email", res.data.data.email);
          navigation.push("main");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

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
        <TouchableOpacity onPress={(e) => navigation.push("register")}>
          <Text style={{ color: "#39A388" }}>Sign In Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 80, paddingLeft: 10, paddingRight: 10 }}>
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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ color: "#cacaca" }}>or continue with</Text>
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
    fontSize: 15,
    fontWeight: "600",
    color: "#fafafa",
  },
  marker: {
    height: 18,
    width: 18,
    marginTop: 5,
    marginRight: 7,
  },
});
