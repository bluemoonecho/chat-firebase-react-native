import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'; 
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            console.log(authUser);
            if(authUser){
                navigation.replace('Home')
            }
        });
        return unsubscribe;
    },[])

    const signIn = () =>{
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error))
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
                    secureTextEntry
                    onChangeText={(text)=> setPassword(text)}
                    onSubmitEditing={signIn}
                    />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title='Login' />
            <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type='outline' title='Register' />
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}


export default LoginScreen


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


