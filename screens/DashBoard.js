import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Button, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Searchbar, Menu, Provider} from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {SafeAreaView} from "react-navigation";


const DashBoard = ({navigation}) => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <ScrollView>
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
                        <TouchableOpacity onPress={() => setSearch(false)}>
                            <FontAwesome5 name={"arrow-left"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <Searchbar
                            style={{width: '90%'}}
                            placeholder="Search Here"
                        />
                    </View>
                }
                {menu ?
                    <View style={{paddingLeft: 15}}>
                        <Text style={styles.text} onPress={() => navigation.navigate('Property')}>Post Ad</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Map')}>Map</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('')}>Cart</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('About')}>About us</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Logout</Text>
                    </View> : null
                }
                <View style={styles.container}>
                    <View style={{paddingTop: 5}}>
                        <Image style={styles.pic_container} source={require('../assets/1.jpeg')}/>

                        <View style={{paddingTop: 5}}>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Title</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>House</Text></View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Price</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>2500</Text></View>
                                </View>
                            </View>
                            <Button title={'View'} color={'#5CADC6'} style={{size: 50}}/>
                        </View>
                    </View>
                    <View style={{paddingTop: 5}}>
                        <Image style={styles.pic_container} source={require('../assets/1.jpeg')}/>

                        <View style={{paddingTop: 5}}>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Title</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>House</Text></View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Price</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>2500</Text></View>
                                </View>
                            </View>
                            <Button title={'View'} color={'#5CADC6'} style={{size: 50}}/>
                        </View>
                    </View>
                    <View style={{paddingTop: 5}}>
                        <Image style={styles.pic_container} source={require('../assets/1.jpeg')}/>

                        <View style={{paddingTop: 5}}>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Title</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>House</Text></View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Price</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>2500</Text></View>
                                </View>
                            </View>
                            <Button title={'View'} color={'#5CADC6'} style={{size: 50}}/>
                        </View>
                    </View>
                    <View style={{paddingTop: 5}}>
                        <Image style={styles.pic_container} source={require('../assets/1.jpeg')}/>

                        <View style={{paddingTop: 5}}>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Title</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>House</Text></View>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <View
                                    style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <View><Text style={styles.text}>Price</Text></View>
                                    <View><Text style={styles.text}>:</Text></View>
                                    <View><Text style={styles.text}>2500</Text></View>
                                </View>
                            </View>
                            <Button title={'View'} color={'#5CADC6'} style={{size: 50}}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
        // <ScrollView>
        //     {/*<StatusBar barStyle="dark-content" hidden={false} backgroundColor="blue" translucent={true}/>*/}
        //
        //     {/*<View style={styles.container}>*/}
        //     {/*    <View>*/}
        //     {/*        <NavigationBar*/}
        //     {/*            title={title}*/}
        //     {/*            rightButton={() => {*/}
        //     {/*                navigation.navigate('NewProperty')*/}
        //     {/*            }}*/}
        //     {/*            leftButton={leftButton}*/}
        //
        //     {/*        />*/}
        //     {/*    </View>*/}
        //     {/*    <View style={styles.container}>*/}
        //     {/*        <Image*/}
        //     {/*            style={styles.pic_container}*/}
        //     {/*            source={{*/}
        //     {/*                uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
        //     {/*            }}*/}
        //     {/*        />*/}
        //     {/*    </View>*/}
        //     {/*    <View>*/}
        //     {/*        <Text style={styles.text}> Title : </Text>*/}
        //     {/*        <Text style={styles.text}> Price : </Text>*/}
        //     {/*        <Text style={styles.text}> Size : </Text>*/}
        //     {/*    </View>*/}
        //     {/*    <View style={styles.container}>*/}
        //     {/*        <Image*/}
        //     {/*            style={styles.pic_container}*/}
        //     {/*            source={{*/}
        //     {/*                uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
        //     {/*            }}*/}
        //     {/*        />*/}
        //     {/*    </View>*/}
        //     {/*    <View>*/}
        //     {/*        <Text style={styles.text}> Title : </Text>*/}
        //     {/*        <Text style={styles.text}> Price : </Text>*/}
        //     {/*        <Text style={styles.text}> Size : </Text>*/}
        //     {/*    </View>*/}
        //     {/*    <View style={styles.container}>*/}
        //     {/*        <Image*/}
        //     {/*            style={styles.pic_container}*/}
        //     {/*            source={{*/}
        //     {/*                uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
        //     {/*            }}*/}
        //     {/*        />*/}
        //     {/*    </View>*/}
        //     {/*    <View>*/}
        //     {/*        <Text style={styles.text}> Title : </Text>*/}
        //     {/*        <Text style={styles.text}> Price : </Text>*/}
        //     {/*        <Text style={styles.text}> Size : </Text>*/}
        //     {/*    </View>*/}
        //     {/*    <View style={styles.container}>*/}
        //     {/*        <Image*/}
        //     {/*            style={styles.pic_container}*/}
        //     {/*            source={{*/}
        //     {/*                uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
        //     {/*            }}*/}
        //     {/*        />*/}
        //     {/*    </View>*/}
        //     {/*    <View>*/}
        //     {/*        <Text style={styles.text}> Title : </Text>*/}
        //     {/*        <Text style={styles.text}> Price : </Text>*/}
        //     {/*        <Text style={styles.text}> Size : </Text>*/}
        //     {/*    </View>*/}
        //     {/*</View>*/}
        // </ScrollView>
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

export default DashBoard;
