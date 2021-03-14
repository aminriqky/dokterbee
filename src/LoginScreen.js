import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        if (username != "" && password == "12345678") {
          navigation.navigate('DokterBee');
          setUsername("");
          setPassword("");
        } else {
          setUsername("");
          setPassword("");
        }
      };

    return (
    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <View style={{width: 50, height: 50, backgroundColor: '#f50057', borderRadius: 50, alignSelf: 'center', top: 120}}>
            <Ionicons style={{alignSelf: 'center', paddingVertical: 12}} name='lock-closed-outline' size={24} color='white' />
        </View>
        <Text style={{top: 130, alignSelf: 'center', fontSize: 20, color: 'white'}}>Login</Text>
        <View style={styles.regis}>
            <Text style={styles.text}>Username / Email</Text>
            <TextInput autoCompleteType='email' value={username} onChangeText={(value)=>setUsername(value)} style={styles.input}/>
            <Text style={styles.text}>Password</Text>
            <TextInput autoCompleteType='password' value={password} onChangeText={(value)=>setPassword(value)} secureTextEntry={true} style={styles.input}/>
        </View>
        <View style={{top: 175, alignSelf: 'center'}}>
            <TouchableOpacity style={styles.button} 
            onPress={submit}>
                <Text style={{color: 'white', alignSelf: 'center', paddingVertical: 8, fontSize: 20}}>Masuk</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        top: 40,
    },
    regis: {
        top: 130
    },
    text: {
        marginTop: 20,
        marginLeft: 50,
        color: 'white'
    },
    input: {
        top: 5, 
        padding: 10, 
        borderColor: '#003366', 
        borderWidth: 2, 
        borderRadius: 2, 
        marginRight: 50, 
        marginLeft: 50, 
        color: 'black',
        backgroundColor: 'white'
    },
    button: {
        width: Dimensions.get('screen').width - 100, 
        height: 50, 
        borderRadius: 5, 
        backgroundColor: '#3f51b5'
    },
    button1: {
        width: 150, 
        height: 50, 
        borderRadius: 20, 
        backgroundColor: '#3EC6FF'
    }
})