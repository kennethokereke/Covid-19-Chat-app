import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { auth } from '../config/firebase'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageurl, setImageurl] = useState("")

    //brings up a promise
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser =>{
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageurl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        })
        .catch(error => alert(error.message))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })

    },[navigation])
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{ marginBottom: 50}}>
                Create Covid-19App account
                </Text>
                <View style={styles.inputContainer}>
                    <Input placeholder="Fullname"
                     autoFocus
                      type= 'text' 
                      value={name}
                      onChangeText={(text) => setName(text)}
                      />
                      <Input placeholder="Email"
                     autoFocus
                      type= 'email' 
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      />
                      <Input placeholder="password"
                     autoFocus
                      type= 'password' 
                      secureTextEntry
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      />
                      <Input placeholder="Profile picture URL"
                      autoFocus
                       type= 'text' 
                       value={imageurl}
                       onChangeText={(text) => setImageurl(text)}
                       onSubmitEditing={register}
                       />
                       
                      
                      
                      
                </View>

                <Button buttonStyle={{backgroundColor: '#850101'}}
                 raised onPress={register} 
                 containerStyle={styles.button}
                 onPress={register}
                 title="Register"/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10

    }
})
