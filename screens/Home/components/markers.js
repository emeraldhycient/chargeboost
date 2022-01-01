import React, { useState } from "react";
import { StyleSheet, Text, Modal, View, Pressable } from "react-native";
import { Marker } from "react-native-maps";
import Entypo from 'react-native-vector-icons/Entypo'

const Markers = ({ detail }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const togglevisiblity = () => setModalVisible((prev) => !prev);

  const cod = {
    latitude: parseFloat(detail.lat),
    longitude: parseFloat(detail.lng),
  };

  return (
    <View>
      <Marker
        coordinate={cod}
        title={detail.name}
        description={detail.description}
        onPress={() => togglevisiblity()}
        onSelect={() => {
          console.log("pressed ios");
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          togglevisiblity()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
               <View style={styles.modalHeader}>
                   <Text style={[styles.modalText,styles.textStyle]}>{detail.name}</Text>
                   <View style={{marginRight:0}}>
                   <View style={styles.checkCircle}><Entypo name="check" size={20} color="#fafafa" /></View>
                       <Text style={styles.modalText}>Checkin</Text>
                   </View>
               </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Markers;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width:"80%",
    height:"70%",
    marginLeft:-40,
    position:'absolute'
  },
  modalView: {
    marginTop:"36%",
    backgroundColor: "white",
    borderRadius:7,
    width:"80%",
    height:"70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader:{
    backgroundColor: "#2196F3",
    height:120,
    width:'100%',
    paddingTop:10,
    paddingLeft:15
  },
  checkCircle:{
      height:40,
      width:40,
      borderRadius:100,
      backgroundColor:'#39A388',
      justifyContent:'center',
      alignItems:'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize:20
  },
  modalText: {
    marginBottom: 15,
    color: "white",
    fontWeight: "bold",
  },
});
