import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text,Button } from "react-native-paper";
import HiOutlineLocationMarker from  "react-native-vector-icons"

const Cards = ({ data, index }) => {
  return (
    <View style={styles.card} key={index}>
      <View style={styles.card_body}>
        <View style={{paddingLeft:15,paddingTop:13,paddingBottom:10}}>
        <Text style={{ color: "#000" ,padding:4}}>Charged for:</Text>
        <Text style={{ color: "#000",fontSize:20,fontWeight:"600",padding:5 }}>{data.charge_time}</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image style={styles.marker} source={require("../../../assets/address/ic_other.png")} />
        <Text style={{ color: "#000",padding:4 }}>{data.location}</Text>
        </View>
        </View>
        <Image source={data.image} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.card_footer}>
           <Button color="green" uppercase>Re-Book</Button>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: "95%",
    borderRadius:15,
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: 20,
    marginBottom: 10,
  },
  card_body: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    flexDirection:"row",
    justifyContent:'space-between'
  },
  card_footer: {
    height: 50,
    width: "100%",
    backgroundColor: "#EAEAEA",
  },
  image: {
    height: 80,
    width: "40%",
  },
  marker:{
      height:20,
      width:20,
      marginTop:5
  }
});
