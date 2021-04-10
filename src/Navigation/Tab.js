import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Control, Schedule } from '../Screens'

const Tab = createMaterialTopTabNavigator();

export default MaterialTopTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        style: { backgroundColor: 'black' }
      }}>
      <Tab.Screen name="Control" component={Control} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
