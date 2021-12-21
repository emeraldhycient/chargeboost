import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text,Button } from "react-native-paper";

const Cards = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.card_body}>
        <View style={{paddingLeft:15,paddingTop:13,paddingBottom:10}}>
        <Text style={{ color: "grey" ,padding:4}}>Charged for:</Text>
        <Text style={{ color: "#000",fontSize:20,fontWeight:"bold",padding:5 }}>{data.charge_time}</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Image style={styles.marker} source={require("../../../assets/address/ic_other.png")} />
        <Text style={{ color: "grey",padding:4 }}>{data.location}</Text>
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
    borderRadius:20,
    height: 150,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
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
      height:18,
      width:18,
      marginTop:5
  }
});
