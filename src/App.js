// membuat halaman SPLASH SCREEN

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {Router} from './router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';
import { UploadPhoto } from './pages';


const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      {/* <Router/> */}
      <UploadPhoto/>
    </NavigationContainer>
    
  );
};
export default App;



