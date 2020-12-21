import React, {useState} from 'react';
import { Dimensions,SafeAreaView,StyleSheet, Text, View, Image ,TextInput,Button,ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
let DW =Dimensions.get('window').width;

const Property =() => {


    return(
      <ScrollView >
      <View style={styles.cntr}>

      <View>
      <Text style={styles.header}>
      Title
      </Text>
      </View>
      <View>
      <TextInput style={styles.container}
      placeholder="Title for your Advertisement"
      placeholderTextColor="#003f5c">

      </TextInput>
      </View>
      <View>
      <Text style={styles.header2}>
    City
      </Text>
      </View>
      <View>
      <TextInput style={styles.container}
      placeholder="Enter your city"
      placeholderTextColor="#003f5c">

      </TextInput>
      </View>
      <View>
      <Text style={styles.header2}>
    Location
      </Text>
      </View>
      <View>
      <TextInput style={styles.container}
      placeholder="Enter your location"
      placeholderTextColor="#003f5c">

      </TextInput>
      </View>


      <View>
      <Text style={styles.header2}>
    Description
      </Text>
      </View>
      <View>
      <TextInput style={styles.textbox}

      placeholder="Enter your details"
      placeholderTextColor="#003f5c">

      </TextInput>
      </View>
      <View>
      <Text style={styles.header2}>
    Property Type
      </Text>
      </View>
      <View style ={styles.scroll}>
      <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Plot', value: 0 },
                  { label: 'House', value: 1 },
                  { label: 'Commercial', value: 2 },
              ]}
          />
</View>
</View>


      </ScrollView>

)}



export default Property;
const styles = StyleSheet.create({

  header : {

    padding : 40,
    fontSize : 20,
     fontFamily: "Cochin",
     fontWeight : 'bold'
  },
  header2:{

    fontSize :20,
     fontFamily: "Cochin",
      fontWeight : 'bold',
      marginBottom : 20
  },

 container: {
   width:250,
   backgroundColor:"#999999",
   borderRadius:50,
   height:70,
   marginBottom:17,
   padding:20,

 },
 cntr: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 buttons :
 {
   backgroundColor: '#fff',
 },
 scroll :
 {
   padding : 15,
   marginTop : 0,
   marginBottom :2,
   backgroundColor : 'red'
 },
 textbox : {
   backgroundColor :'red',
   width:DW - 5,
 height: 200,
   textAlign : 'left',
   marginBottom : 10

 }
})
