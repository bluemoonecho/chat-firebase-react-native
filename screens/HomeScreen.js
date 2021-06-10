import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { ListItem, Avatar } from 'react-native-elements'
import {auth, db} from '../firebase'


const Home = ({navigation}) => {
    

const signOutUser = () =>{
    auth.signOut().then(()=>{
        navigation.replace('Login')
    })
}

// test3@test.com 
// test1234

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTitleStyle: { color: 'black'},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity 
                    onPress={signOutUser}
                    activeOpacity={0.5}>
                    <Avatar
                        rounded
                        source={{uri: auth?.currentUser?.photoURL}}
                    />
                    {/* <Text>avatar</Text> */}
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])
    
    return (
        <SafeAreaView>
            <ScrollView> 
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
