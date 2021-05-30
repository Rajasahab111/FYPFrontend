import React, {useState, useEffect} from 'react';
import {StyleSheet,RefreshControl, StatusBar, View, FlatList, Button, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Searchbar, Menu, Provider} from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useIsFocused } from '@react-navigation/native';
import {SafeAreaView} from "react-navigation";
import axios from "axios";
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Ecommerce = ({navigation}) => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    const [images, setImages] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    useEffect(() => {
        alert(`Here`);
        axios.get('http://192.168.1.6:4000/api/Products/',{headers: {'Content-Type': 'application/json', 'Authorization':`Token b1fadb08b4aac402f0efebca04b8e3b6a2d4a9d7`}}).then(response => setImages(response.data)).catch(() => alert('Something went wrong'));
    },[])
    const search_Query = (searchText) => {
        setSearchText(searchText);
        if (searchText !== '') {
            const filteredData = images.filter(function (item) {
                if (item.City !== undefined && item.Location !== undefined && item.Construction_status !== undefined && item.Beds !== undefined )
                    return item.City.toLowerCase().includes(searchText.toLowerCase()) || item.Location.toLowerCase().includes(searchText.toLowerCase()) || item.Construction_status.toLowerCase().includes(searchText.toLowerCase()) || item.Baths === Number(searchText);
            });
            setFilteredData(filteredData);
        } else setFilteredData([]);
    };
    const reset = () => {
        setSearch(false);
        setFilteredData([]);
    };
    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >

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
                                <FontAwesome5 name={"bars"} size={25} color={"white"}/>
                            </TouchableOpacity> : <TouchableOpacity onPress={() => setMenu(true)}>
                                <FontAwesome5 name={"bars"} size={25} color={"white"}/>
                            </TouchableOpacity>}
                        <Text
                            style={{
                                alignSelf: "center",
                                fontWeight: "bold",
                                fontSize: 20,
                                color: "white"
                            }}>Advertisements</Text>
                        <TouchableOpacity onPress={() => setSearch(true)}>
                            <FontAwesome5 name={"search"} size={25} color={"white"}/>
                        </TouchableOpacity>
                    </View> :
                    <View style={styles.header}>
                        <TouchableOpacity onPress={reset}>
                            <FontAwesome5 name={"arrow-left"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <Searchbar
                            style={{width: '90%'}}
                            placeholder="Search Here"
                            onChangeText={text => search_Query(text)}
                        />
                    </View>
                }
                {menu ?
                    <View style={{paddingLeft: 15}}>
                        <Text style={styles.text} onPress={() => navigation.navigate('Property',{token: navigation.getParam('token')})}>Post Ad</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Map')}>Map</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('')}>Messages</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('FilteredSearch',{token: navigation.getParam('token')})}>Filter</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('About')}>About us</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Logout</Text>
                    </View> : null
                }
                <FlatList
                    data={filteredData && filteredData.length > 0 ? filteredData : images}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    nestedScrollEnabled={true}
                    numColumns={1}
                    renderItem={({item}) => <View style={styles.container}>
                        <View style={{paddingTop: 5}}>
                            <Image style={styles.pic_container} source={{uri: item.image}}/>
                            <View style={{paddingTop: 5}}>
                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Title:{item.name}</Text></View>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Price:{item.price}</Text></View>

                                    </View>
                                </View>
                                <Button title={'View'} onPress={() => navigation.navigate('Ade', {items: item})}
                                        color={'#5CADC6'} style={{size: 50}}/>
                            </View>
                        </View>
                    </View>}/>
            </SafeAreaView>
        </ScrollView>
    );
}
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
            backgroundColor: "white",
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
            backgroundColor: '#5CADC6',
            borderRadius: 20,
        }


    }
)

export default Ecommerce;
