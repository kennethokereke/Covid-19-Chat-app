import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'

const CustomListItem = () => {
    return (
       <ListItem>
           <Avatar
           rounded
           source={{
               uri:
                "https://cencup.com/wp-content/uploads/2019/avatar-placeholder.png",
           }}
           />
       </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
