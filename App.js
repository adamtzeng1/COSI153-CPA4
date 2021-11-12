 import React, { useState }  from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.js';
import SecondScreen from './components/SecondScreen.js';
import ThirdScreen from './components/ThirdScreen';
import FourthScreen from './components/FourthScreen';
import FifthScreen from './components/FifthScreen';
import ScreenTemplate from './containers/ScreenTemplate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SecondScreen" component = {SecondScreen}/>
        <Stack.Screen name = "ThirdScreen" component = {ThirdScreen}/>
        <Stack.Screen name = "FourthScreen" component = {FourthScreen}/>
        {/* <Stack.Screen name = "FifthScreen" component = {FifthScreen}/> */}
      </Stack.Navigator>
      <ScreenTemplate
        footer={<Text style={{backgroundColor: 'lightgreen', fontSize: 32 }}>Sponsored by Gatorade... Haha I wish</Text>}>
      </ScreenTemplate>
    </NavigationContainer>
    
  );
}

export default App;


