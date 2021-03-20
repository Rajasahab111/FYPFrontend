import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput,Button,Linking} from 'react-native';
const Signup = ({navigation})=>{
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
            placeholderTextColor="#003f5c"/>
     </View>
     <View>
           <TextInput
             style={styles.inputText}
             placeholder="Enter your email address"
             placeholderTextColor="#003f5c"/>
      </View>
      <View>
      <TextInput
             secureTextEntry
             style={styles.inputText}
             placeholder="Password"
             placeholderTextColor="#003f5c"/>

       </View>
     <View>
     <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Re-type your password"
            placeholderTextColor="#003f5c"/>

      </View>
      <View style={styles.button}>
        <Button
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
