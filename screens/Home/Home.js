import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import axios from "axios";
import Markers from "./components/markers";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [details, setdetails] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://chargeboost.cedarcourier.com/user/allBooking.php")
      .then((res) => {
        if (res.data.status === "success") {
          const data = Object.values(res.data.data);
          setdetails(data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const search = () => {
    axios
      .get(
        `https://chargeboost.cedarcourier.com/user/search.php?search=${searchQuery}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.serach_holder}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
          />
        </View>
        <View style={styles.map_holder}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 6.52112,
              longitude: 3.33461,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {details ? (
              details.map((detail, i) => {
                return (

                  <Markers detail={detail} key={i}/>
                  
                );
              })
            ) : (
              <Text>i</Text>
            )}
          </MapView>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map_holder: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "relative",
    top: 0,
    left: 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  serach_holder: {
    position: "absolute",
    top: 50,
    elevation: 10,
    backgroundColor: "transparent",
  },
  search: {
    borderRadius: 17,
    width: Dimensions.get("window").width - 40,
    marginLeft: 20,
    marginRight: 20,
  },
});
