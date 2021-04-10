import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import HomeBedRoom from './HomeBedRoom';

const HomeComponent = () => {
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
        <View style={{ padding: 30 }}>
            <View style={{
                padding: 20,
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
            }}>
                <View style={{flexDirection: 'row',
      justifyContent: 'space-between',}}>
                    <Text style={{color: 'white',
        fontSize: 16}}>Living Room</Text>
                    <Entypo name="dots-three-horizontal" size={18} color={'white'} />
                </View>
                <Text style={{ color: 'gray', marginTop: 10 }}>Home {'>'} Living Room</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={onSwitchPress1} >
                        {lightOne ?
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'white'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View> :
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'gray'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSwitchPress2} >
                        {lightTwo ?
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'white'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View> :
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'gray'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSwitchPress3} >
                        {lightThree ?
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'white'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View> :
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'gray'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Light {'1'}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSwitchPress4} >
                        {lightFour ?
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'white'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Fan</Text>
                            </View> :
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="ios-power-sharp" size={60} color={'gray'} style={{}} />
                                <Text style={{ color: 'white', marginTop: 15 }}>Fan</Text>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <HomeBedRoom />
        </View>
    );
}


export default HomeComponent;