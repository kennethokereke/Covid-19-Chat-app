import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import {Button, Input, Image} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import { auth } from '../config/firebase'




const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () => {}
    
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser) {
                navigation.replace('Home')
            }
        })
        return unSubscribe

    }, [])
   


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image
            source={{ uri: "https://www.keionline.org/wp-content/uploads/covid-19-4855688_640.png"
        }}
        style={{width: 200, height: 200}}
 />
           
        
               <View style={styles.inputContainer}>
               <Input placeholder ="Email" 
               autoFocus 
               type="email"
               value={email}
               onChangeText={(text) => setEmail(text)}/>


               <Input placeholder ="Password" 
               secureTextEntry type="password"
               value={password}
               onChangeText={(pass) => setPassword(pass)}/>
               </View>


         

           <Button  buttonStyle={{backgroundColor: '#850101'}} containerStyle={styles.button} onPress={signIn} title="Login" />
           <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
           <View style={{height: 100}}/>
   

        </KeyboardAvoidingView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    button: {
        width:200,
        marginTop:10
    } ,
    inputContainer: {
        width: 300,
       
    },
})

