import React, {useState} from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'; 

const LoginScreen = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = () =>{

    }
    
    return (
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style='light'/>
            <AntDesign name="wechat" size={200} color="#2C6BED" />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email' 
                    autofocus 
                    type='Email' 
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                    />
                <Input 
                    placeholder='Password' 
                    autofocus type='Password' 
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                    />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title='Login' />
            <Button containerStyle={styles.button} type='outline' title='Register' />
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    inputContainer:{
        width: 300,
        marginTop: 10,
    },
    button:{
        width: 200,
        marginTop: 10,
    }


})

export default LoginScreen


