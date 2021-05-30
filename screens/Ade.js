import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import ImageView from 'react-native-image-view';
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text,
    Linking,
    ScrollView,
    Image,
    Button
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Searchbar} from "react-native-paper";

const Ade = ({navigation}) => {
    const [search, setSearch] = useState(false);
    const [item, setItem] = useState({});
    useEffect(() => {
        setItem(navigation.getParam('items'));
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#0F7ADD"
                    translucent={false}
                />
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
                            }}>Ad Details</Text>
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
                {item ?
                    <View style={styles.container}>
                        <Text
                            style={{
                                alignSelf: "center",
                                fontWeight: "bold",
                                fontSize: 20,
                                color: "black"
                            }}>Ad Details</Text>
                        <View style={{paddingTop: 5}}>
                            <Image style={styles.pic_container} source={{uri: item.image}}/>
                            <View style={{paddingTop: 5}}>

                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Name: {item.name}</Text></View>
                                    </View>
                                </View>

                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Brand: {item.brand}</Text></View>
                                    </View>
                                </View>



                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Price:{item.price}</Text></View>
                                    </View>
                                </View>


                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>Description: {item.description}</Text></View>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <View
                                        style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View><Text style={styles.text}>To buy this item: </Text></View>
                                    </View>
                                </View>
                                <View style={styles.mainView}>
                                    <View style={styles.button}>
                                        <Button title={"Back To Dashboard"} onPress={() => navigation.navigate('DashBoard')}/>
                                    </View>
                                </View>
                                <View style={styles.mainView}>
                                    <View style={styles.button}>
                                <Button title={"Click to Buy"}
                                      onPress={() => Linking.openURL('http://estate.com:3000/ecommerce/Product/${product.id}/')}>

                                </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    : null
                }
            </View>
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
            width: 400,
            height: 740,
            borderRadius: 0,
            marginTop:15,
            marginBottom:15


        },
        text: {
            fontSize: 20,
            fontWeight: "bold",
            marginTop:15,
            marginBottom:15
        },

        button: {
            borderRadius: 10,
            height: 56,
            width: 320,
            backgroundColor: '#5CADC6',
            justifyContent: 'center',
            alignItems: 'center',

        },
        mainView:
            {
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:5


            },


    }
)
export default Ade;

