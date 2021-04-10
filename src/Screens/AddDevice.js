import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default AddDevice = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{
                height: 55,
                backgroundColor: '#51087E',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Ionicons name="arrow-back" size={30} color={'white'} onPress={() => navigation.goBack()} style={{ marginLeft: 20, alignSelf: 'center' }} />
                <Text style={{ marginRight: 160, justifyContent: 'center', fontSize: 20, alignSelf: 'center', color: 'white' }}>Dashboard</Text>
            </View>
            <MaterialTopTabNavigator />
        </SafeAreaView>
    )
}