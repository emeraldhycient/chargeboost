import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>chargeboost</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
