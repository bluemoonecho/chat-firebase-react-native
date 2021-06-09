import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'; 


const LoginScreen = () => {
    return (
        <View>
        <StatusBar style='light'/>
        <AntDesign name="wechat" size={200} color="#2C6BED" />
        </View>
    )
}

export default LoginScreen
