import "react-native-gesture-handler";
import React,{useState,useEffect} from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import BottomScreen from "./tabs/BottomScreen";
import StackScreen from "./Stacks/Auth";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
 




    return (
    <PaperProvider>
      <NavigationContainer>
        {
          <StackScreen/>
        }
      </NavigationContainer>
    </PaperProvider>
  );
}
