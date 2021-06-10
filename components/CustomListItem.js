import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={{
                uri: 'https://image.pngaaa.com/569/2189569-middle.png'
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: '800'}}> 
                Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}> 
                message
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
