import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { AddDevice, Help, Home, Logout } from '../Screens';
import CustomDrawer from './CustomDrawer';
import { View, Text, SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerStyle={{
                backgroundColor: '#3D3158',
            }}
            drawerContentOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',
                activeBackgroundColor: true,
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: config => <Entypo
                        size={23}
                        color={'white'}
                        name={Platform.OS === 'ios' ? 'home' : 'home'} />
                }} />
            <Drawer.Screen name="Add Device" component={AddDevice}
                options={{
                    drawerIcon: config => <Ionicons
                        size={23}
                        color={'white'}
                        name={Platform.OS === 'ios' ? 'add-circle-outline' : 'add-circle-outline'} />
                }} />
            <Drawer.Screen name="Help" component={Help}
                options={{
                    drawerIcon: config => <Ionicons
                        size={23}
                        color={'white'}
                        name={Platform.OS === 'ios' ? 'ios-help-outline' : 'ios-help-outline'} />
                }} />
            <Drawer.Screen name="Logout" component={Logout}
                options={{
                    drawerIcon: config => <AntDesign
                        size={20}
                        color={'white'}
                        name={Platform.OS === 'ios' ? 'logout' : 'logout'} />
                }} />
        </Drawer.Navigator>
    )
}