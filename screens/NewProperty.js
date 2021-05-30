import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Button, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Searchbar, Menu, Provider} from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {SafeAreaView} from "react-navigation";
const Property=({navigation})=>{
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    return(
        <SafeAreaView>
            {!search ?
                <View style={styles.header}>
                    <StatusBar
                        barStyle="dark-content"
                        hidden={false}
                        backgroundColor="#0F7ADD"
                        translucent={false}
                    />
                    {menu ?
                        <TouchableOpacity onPress={() => setMenu(false)}>
                            <FontAwesome5 name={"bars"} size={25} color={"black"}/>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => setMenu(true)}>
                            <FontAwesome5 name={"bars"} size={25} color={"black"}/>
                        </TouchableOpacity>}
                    <Text
                        style={{
                            alignSelf: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "black"
                        }}>About Us</Text>
                    <TouchableOpacity onPress={() => setSearch(true)}>
                        <FontAwesome5 name={"search"} size={25} color={"black"}/>
                    </TouchableOpacity>
                </View> :
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setSearch(false)}>
                        <FontAwesome5 name={"arrow-left"} size={25} color={"black"}/>
                    </TouchableOpacity>
                    <Searchbar
                        style={{width: '90%'}}
                        placeholder="Search Here"
                    />
                </View>
            }
            {menu ?
                <View style={{paddingLeft: 15}}>
                    <Text style={styles.text} onPress={() => navigation.navigate('DashBoard')}>Advertisements</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate('Map')}>Map</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate('FilteredSearch')}>Filter</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate('Property')}>New Ad</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Logout</Text>
                </View> : null
            }

            <View>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
        </SafeAreaView>

    )

}
export default Property;
const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: 50,
            flexDirection: "row",
            backgroundColor: '#5CADC6',
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
        },
        container: {
            backgroundColor: "#2096D6",
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 5

        },
        pic_container: {
            width: 350,
            height: 200,
            borderRadius: 20,

        },
        text: {
            fontSize: 20,
            fontWeight: "bold"
        },
        button: {
            backgroundColor: 'wheat',
            borderRadius: 20,
        }


    }
)