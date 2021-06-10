import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatScreen = ({navigation, route}) => {
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
        });
    }, [navigation])
    
    return (
        <View>
            <Text>
                {route.params.chatName}
            </Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
