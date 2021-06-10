import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { ListItem, Avatar } from 'react-native-elements'
import {auth, db} from '../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 



const Home = ({navigation}) => {
    
    const [chats, setChats] = useState([])


    const signOutUser = () =>{
        auth.signOut().then(()=>{
            navigation.replace('Login')
        })
    }

// test3@test.com 
// test1234

    useEffect(()=>{
        const unsubscribe = db.collection("chats").onSnapshot((snapshot) => 
            setChats(
                snapshot.docs.map(doc => ({
                id : doc.id,
                data: doc.data(),
            })))
        )
        return unsubscribe;
    }, [])


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
            ),
            headerRight: () => (
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        marginRight: 20,
                    }}> 
                    <TouchableOpacity activeOpacity={0.5}> 
                        <AntDesign name='camerao' size={24} color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('AddChat')} activeOpacity={0.5}> 
                        <SimpleLineIcons name='pencil' size={24} color='black'/>
                    </TouchableOpacity>
                    
                </View>
            ),
        })
    }, [navigation])
    
    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id: id, 
            chatName: chatName,
        });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}> 
                {chats.map(({id, data: {chatName}}) => (
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{ 
        height: '100%',
    }
})
