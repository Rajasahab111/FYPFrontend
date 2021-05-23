import React, {useState} from 'react';
import { StyleSheet, Text, View, Image ,TextInput,Button,Linking} from 'react-native';
import axios from "axios";
import Login from "./LoginScreen";
const Signup = ({navigation})=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [data, setData] = useState('')
    const handleSignup = async () => {
        await axios.post('http://192.168.1.8:4000/api/users/', {
            username: username,
            email: email,
            password: password,
            password2: password2
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then((response) =>navigation.navigate('Login')).catch(() => alert('Username or Password is incorrect!'));
    };
      return(
      <View style= {styles.mainView}>
          <View>
              <Text style={{ fontSize: 64, position: 'relative', top : -50, right : 40 }}>
                 Sign up!
              </Text>
          </View>
    <View>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your username"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholderTextColor="#003f5c"/>
     </View>
     <View>
           <TextInput
             style={styles.inputText}
             placeholder="Enter your email address"
             value={email}
             onChangeText={text => setEmail(text)}
             placeholderTextColor="#003f5c"/>
      </View>
      <View>
      <TextInput
             secureTextEntry
             style={styles.inputText}
             placeholder="Password"
             value={password}
             onChangeText={text => setPassword(text)}
             placeholderTextColor="#003f5c"/>

       </View>
     <View>
     <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Re-type your password"
            value={password2}
            onChangeText={text => setPassword2(text)}
            placeholderTextColor="#003f5c"/>

      </View>
      <View style={styles.button}>
        <Button onPress={() => handleSignup()}
        title={"Sign-up"} />
      </View>
      <View >
        <Button
        title={"Already a user? Log-in"}
        onPress = {()=>navigation.navigate('Login')}
        />


      </View>
      </View>

    )
  }


export default Signup;


const styles =StyleSheet.create({
  logo:{
    fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40,
    },
    heading:{
       color: '#a6a6a6',
       justifyContent: "center",
       marginBottom:10,
       padding:20,
       fontSize : 25,

    },
    inputText:{
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
button : {
    borderRadius: 10,
    height : 56,
    width: 320,
    backgroundColor : '#5CADC6',
    marginTop : 40
}

}
)
