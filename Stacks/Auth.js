import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Auths/Login";
import Register from "../screens/Auths/Register";
import BottomScreen from "../tabs/BottomScreen";

const Stack = createStackNavigator();

const StackScreen = () => (
    <Stack.Navigator initialRouteName="login">
    <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="register" component={Register} options={{ headerShown: false }}  />
    <Stack.Screen name="main" component={BottomScreen} options={{ headerShown: false }}  />
  </Stack.Navigator>
);


export default StackScreen;