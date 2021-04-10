import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

const ControlLight = () => {

    const [lightThree, setLightThree] = useState(false);
    const [lightFour, setLightFour] = useState(false);


    const onSwitchPress3 = () => {
        setLightThree(!lightThree);
    }

    const onSwitchPress4 = () => {
        setLightFour(!lightFour);
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={onSwitchPress3} >
                    {lightThree ?
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
                <TouchableOpacity onPress={onSwitchPress4} >
                    {lightFour ?
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
            <View style={{marginTop: 50, borderWidth: 5, borderColor: '#3D315B', borderRadius: 30,borderBottomWidth:15,borderTopWidth:15, backgroundColor: '#3D315B'}}>
                <Text style={{ color: 'white', fontSize: 20,alignSelf: 'center'}}>Master On</Text>
            </View>
            <View style={{marginTop: 30, borderWidth: 5, borderColor: '#3D315B', borderRadius: 30,borderBottomWidth:15,borderTopWidth:15, backgroundColor: '#3D315B'}}>
                <Text style={{ color: 'white', fontSize: 20,alignSelf: 'center'}}>Master Off</Text>
            </View>
        </View>
    )
}

export default ControlLight;