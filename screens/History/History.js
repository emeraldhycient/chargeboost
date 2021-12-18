import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Cards from "./components/Cards";
import car1 from "../../assets/Vehicle/mycar1.png"
import car2 from "../../assets/Vehicle/mycar2.png"

const History = () => {
    const datas = [
        {
         id:1,
        charge_time :"00:12:00 min",
        location:"Agungi,Lekki",
        image:car1
    },
    {
        id:2,
        charge_time :"00:30:00 min",
        location:"Agungi,Lekki",
        image:car2
    },
    {
        id:3,
        charge_time :"00:15:00 min",
        location:"Agungi,Lekki",
        image:car1
    },
    {
        id:4,
        charge_time :"00:07:00 min",
        location:"Agungi,Lekki",
        image:car2
    },
    {
        id:4,
        charge_time :"00:12:00 min",
        location:"Agungi,Lekki",
        image:car1
    },
    {
        id:5,
        charge_time :"00:11:00 min",
        location:"Agungi,Lekki",
        image:car2
    },
]

  return (
    <SafeAreaView>
      <View>
        <View style={{
            height:100,
            width:"100%",
            justifyContent:"center",
            alignItems:"center"
        }}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>ChargeBoost</Text>
        </View>
        <ScrollView>
          <View style={styles.card_holder}>
              {
                  datas.map((item,i)=>(
                      <Cards data={item} index={i} />
                  ))
              }
           
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  card_holder: {
    backgroundColor: "#B1D0E0",
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
});
