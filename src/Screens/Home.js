import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import HomeComponent from './HomeComponents';

export default Home = ({ navigation }) => {
    const [location, setLocation] = useState();
    const [room, setRoom] = useState();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{
                height: 55,
                backgroundColor: '#51087E',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{ marginLeft: 160, justifyContent: 'center', fontSize: 20, alignSelf: 'center', color: 'white'}}>Dashboard</Text>
                <Ionicons name="reorder-three-outline" size={30} color={'white'} onPress={() => navigation.openDrawer()} style={{ marginRight: 20, alignSelf: 'center' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <View>
                    <Picker
                        selectedValue={location}
                        style={{ height: 50, width: 180 }}
                        itemStyle={{ height: 50, color: 'white' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setLocation(itemValue)
                        }>
                        <Picker.Item label="All Location" value="AllLocation" />
                        <Picker.Item label="Panruti" value="Panruti" />
                    </Picker>
                </View>
                <View>
                    <Picker
                        selectedValue={room}
                        style={{ height: 50, width: 180 }}
                        itemStyle={{ height: 50, color: 'white' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setRoom(itemValue)
                        }>
                        <Picker.Item label="All Rooms" value="java" />
                        <Picker.Item label="Kitchen" value="js" />
                    </Picker>
                </View>
            </View>
            <HomeComponent />
        </SafeAreaView>
    )
}