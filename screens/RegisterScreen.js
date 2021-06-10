import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native'
import {Button, Input, Text} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import { auth } from '../firebase'



const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 'https://image.pngaaa.com/569/2189569-middle.png',
            })
        }
        ).catch(err => alert(error.message))
    };
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Text h3 style={{marginBottom: 50}}>
                Create an Account
            </Text>
            <View style={styles.inputContainer}> 
                <Input
                    placeholder="Full Name"
                    autofocus={true}
                    type='text'
                    value={name}
                    onChangeText={(text)=> setName(text)}
                />
                    <Input
                    placeholder="Email"
                    type='text'
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    autofocus={true}
                    type='text'
                    secureTextEntry
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                />
                <Input
                    placeholder="Profile Image URL (optional)"
                    autofocus={true}
                    type='text'
                    value={imageUrl}
                    onChangeText={(text)=> setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
                <Button 
                    containerStyle={styles.button}
                    raised 
                    onPress={register} 
                    title='Register' />
                <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    inputContainer:{
        width: 300,
    },
    button:{
        width: 200,
        marginTop: 10,
    }
})
