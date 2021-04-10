import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Drawer} from './src/Navigation';
import { Text, View } from 'react-native';

export default App = () => {
  return(
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}