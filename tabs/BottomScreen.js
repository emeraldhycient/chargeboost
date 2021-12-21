import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Home from "../screens/Home/Home";
import History from "../screens/History/History";
import Profile from "../screens/Profile/Profile";


const Bottomtab = createMaterialBottomTabNavigator();

const BottomScreen = () => (
  <Bottomtab.Navigator
    activeColor="#39A388"
    inactiveColor="grey"
    labeled={false}
    shifting={true}
  >
    <Bottomtab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#fafafa",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="home" color={color} size={20} />
        ),
      }}
    />
    <Bottomtab.Screen
      name="History"
      component={History}
      options={{
        tabBarLabel: "History",
        tabBarColor: "#fafafa",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="history" color={color} size={20} />
        ),
      }}
    />
    <Bottomtab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#fafafa",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="user" color={color} size={20} />
        ),
      }}
    />
  </Bottomtab.Navigator>
);

export default BottomScreen;