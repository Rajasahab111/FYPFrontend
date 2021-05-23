import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import ImageView from 'react-native-image-view';
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Button
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Searchbar} from "react-native-paper";

const Ad = ({navigation}) => {
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
                                <Image style={styles.pic_container} source={{uri: item.Image1}}/>
                                <Image style={styles.pic_container} source={{uri: item.Image2}}/>
                                <Image style={styles.pic_container} source={{uri: item.Image3}}/>
                                <Image style={styles.pic_container} source={{uri: item.Image4}}/>
                                <Image style={styles.pic_container} source={{uri: item.Image5}}/>
                                <View style={{paddingTop: 5}}>

                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Title:{item.Title}</Text></View>
                                        </View>
                                    </View>

                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Location:{item.Location}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>City:{item.City}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Size:{item.Size}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Units:{item.Units}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Price:{item.Price}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Beds:{item.Beds}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Baths/Washrooms:{item.Baths}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Type:{item.Type}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Construction Status:{item.Construction_status}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Contact:{item.cell_no}</Text></View>
                                        </View>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <View
                                            style={{flexDirection: "row", justifyContent: "space-between"}}>
                                            <View><Text style={styles.text}>Description:{item.Description}</Text></View>
                                        </View>
                                    </View>
                                    <View style={styles.mainView}>
                                    <View style={styles.button}>
                                        <Button title={"Text Owner"}/>
                                    </View>
                                    </View>
                                    <View style={styles.mainView}>
                                        <View style={styles.button}>
                                            <Button title={"Back To Dashboard"} onPress={() => navigation.navigate('DashBoard')}/>
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
export default Ad;

