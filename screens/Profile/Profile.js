import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Button, Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      navigation.popToTop();
    } catch (e) {
      // clear error
    }

    console.log("Done.");
  };

  const [fullname, setfullname] = useState("User");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("fullname");
      if (value !== null) {
        setfullname(value);
      }
    } catch (e) {
      setislogged(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 22, fontWeight: "700", marginBottom: 8 }}
              >
                {fullname}
              </Text>
              <Text>My Profile</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/profiles/img3.png")}
                style={{ height: 70, width: 70 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View
            style={{
              height: 120,
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "#39A388",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons name="ios-wallet-outline" size={30} color="#fafafa" />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "600",
                    color: "#cacaca",
                    marginBottom: 10,
                  }}
                >
                  Wallet
                </Text>
                <Text style={{ color: "#cacaca" }}>quick payments</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 10, color: "#cacaca" }}>
                $0.0
              </Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={25}
                color="#fafafa"
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.content_content}>
            <MaterialCommunityIcons
              name="car-sports"
              size={30}
              color="#39A388"
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.content_content_header}>My Vehicle</Text>
              <Text>Add Vehicle information</Text>
            </View>
          </View>
          <View style={styles.content_content}>
            <Ionicons name="md-location-outline" size={30} color="#39A388" />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.content_content_header}>My Addresses</Text>
              <Text>Pre saved Addresses</Text>
            </View>
          </View>
          <View style={styles.content_content}>
            <SimpleLineIcons name="envelope-open" size={30} color="#39A388" />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.content_content_header}>Support</Text>
              <Text>contact us for enquires</Text>
            </View>
          </View>
          <View style={styles.content_content}>
            <MaterialCommunityIcons
              name="note-text"
              size={30}
              color="#39A388"
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.content_content_header}>Privacy Policy</Text>
              <Text>Know about privacy policy</Text>
            </View>
          </View>
          <View style={{width:100,marginTop:15}}>
            <Button
              onPress={(e) => clearAll()}
              mode="contained"
              dark
              color="#39A388"
            >
              Logout
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingTop: Platform.OS === "android" ? 40 : "",
    backgroundColor: "#B1D0E0",
    paddingLeft: 20,
    height: Dimensions.get("window").height / 4,
    width: "100%",
  },
  header_text: {
    fontSize: 16,
    fontWeight: "700",
  },
  body: {
    height:
      Dimensions.get("window").height - Dimensions.get("window").height / 3.6,
    backgroundColor: "#cacaca",
  },
  content: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height:
      Dimensions.get("window").height -
      Dimensions.get("window").height / 3.6 -
      120,
    marginTop: -400,
    width: "100%",
    backgroundColor: "#cacaca",
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  content_content: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  content_content_header:{
    fontSize:17,
    fontWeight:'600',
    marginVertical:3
  }
});
