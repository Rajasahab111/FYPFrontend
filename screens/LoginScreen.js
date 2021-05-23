import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, Linking} from 'react-native';
import axios from "axios";
import DashBoard from "./DashBoard";
import {color} from "react-native-reanimated";

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')
    const handleLogin = async () => {
        await axios.post('http://192.168.1.7:4000/auth/', {
            username: username,
            password: password
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(response => navigation.navigate('DashBoard',{token: response.data.token})
        ).catch(() => alert('Username or Password is incorrect!'));
    };

    return (
        <View style={styles.mainView}>
            <View>
                <View>
                    <Text style={{fontSize: 64, position: 'relative', top: -50, right: 32}}>
                        Hi!
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 32, position: 'relative', top: -35, right: 32}}>
                        Welcome to Estate
                    </Text>
                </View>
            </View>
            <View>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    name={'username'}
                    value={username}
                    onChangeText={text => setUsername(text)}
                    placeholderTextColor="#003f5c"/>
            </View>
            <View>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    name={'password'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"/>

            </View>
            <View style={styles.button}>
                <Button onPress={() => handleLogin()} title={"Login"}/>


            </View>
            <View>
                <Text style={styles.nn}>
                    Not Registered?
                </Text>
                <Button
                    title={"Signup"}
                    onPress={() => navigation.navigate('Signup')}
                />

            </View>

        </View>

    )
}


export default Login;


const styles = StyleSheet.create({
        logo: {
            fontWeight: "bold",
            fontSize: 50,
            color: "#fb5b5a",
            marginBottom: 40,
        },
        heading: {
            color: '#a6a6a6',
            justifyContent: "center",
            marginBottom: 10,
            padding: 20,
            fontSize: 25,

        },
        inputText: {
            width: 320,
            backgroundColor: "#F7F7F7",
            borderRadius: 5,
            height: 60,
            marginBottom: 10,
            padding: 20,
        },
        mainView:
            {
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',


            },
        button: {
            borderRadius: 10,
            height: 56,
            width: 320,
            backgroundColor: '#5CADC6',
            marginTop: 40
        },
        nn: {
            marginTop: 30
        }


    }
)
