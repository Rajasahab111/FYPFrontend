import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Text, ScrollView} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Searchbar} from "react-native-paper";


 const Map = ({navigation}) => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [search, setSearch] = useState(false);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#0F7ADD"
                    translucent={false}
                />
                <Marker coordinate={{latitude: latitude, longitude: longitude}}/>
                {!search ?
                    <View style={styles.header3}>
                        <StatusBar
                            barStyle="dark-content"
                            hidden={false}
                            backgroundColor="#0F7ADD"
                            translucent={false}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
                            <FontAwesome5 name={"arrow-left"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <Text
                            style={{
                                alignSelf: "center",
                                fontWeight: "bold",
                                fontSize: 20,
                                color: "white"
                            }}>Post an Ad</Text>
                        <TouchableOpacity onPress={() => setSearch(true)}>
                            <FontAwesome5 name={"search"} size={25} color={"white"}/>
                        </TouchableOpacity>
                    </View> :
                    <View style={styles.header3}>
                        <TouchableOpacity onPress={() => setSearch(false)}>
                            <FontAwesome5 name={"arrow-left"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <Searchbar
                            style={{width: '90%'}}
                            placeholder="Search Here"
                        />
                    </View>
                }
            </MapView>
        </View>

    );

}
export default Map;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header3: {
        width: '100%',
        height: 50,
        flexDirection: "row",
        backgroundColor: '#5CADC6',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});