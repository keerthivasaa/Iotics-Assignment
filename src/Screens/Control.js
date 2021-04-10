import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import ControlLight from './ControlLight';

export default Control = () => {

    const [lightOne, setLightOne] = useState(false);
    const [lightTwo, setLightTwo] = useState(false);
    const [lightThree, setLightThree] = useState(false);
    const [lightFour, setLightFour] = useState(false);

    const onSwitchPress1 = () => {
        setLightOne(!lightOne);
    }

    const onSwitchPress2 = () => {
        setLightTwo(!lightTwo);
    }

    const onSwitchPress3 = () => {
        setLightThree(!lightThree);
    }

    const onSwitchPress4 = () => {
        setLightFour(!lightFour);
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black', padding: 30 }}>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={onSwitchPress1} >
                    {lightOne ?
                        <View style={{ alignItems: 'center', }}>
                            <Ionicons name="ios-power-sharp" size={150} color={'white'} style={{}} />
                            <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                        </View> :
                        <View style={{ alignItems: 'center', }}>
                            <Ionicons name="ios-power-sharp" size={150} color={'gray'} style={{}} />
                            <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                        </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={onSwitchPress2} >
                    {lightTwo ?
                        <View style={{ alignItems: 'center', }}>
                            <Ionicons name="ios-power-sharp" size={150} color={'white'} style={{}} />
                            <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                        </View> :
                        <View style={{ alignItems: 'center', }}>
                            <Ionicons name="ios-power-sharp" size={150} color={'gray'} style={{}} />
                            <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
            <ControlLight/>
        </View>
    )
}