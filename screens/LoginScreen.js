import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput,Button,Linking} from 'react-native';
const Login = ()=>{
      return(
      <View style= {styles.mainView}>
      <View>
      <Text style={styles.heading}>
      Estate 🏠
      </Text>
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
        <Button
        title={"log-in"}>

        </Button>
      </View>
      <View>
        <Button
        title={"Not registered? Sign-up"}>

        </Button>
      </View>

      </View>

    )
  }


export default Login;


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
     width:250,
     backgroundColor:"#999999",
     borderRadius:50,
     height:70,
     marginBottom:10,
     padding:20,
   },
   mainView:
   {
     flex: 1,
      backgroundColor: '#483D8B',
     alignItems: 'center',
     justifyContent: 'center',




}}
)
