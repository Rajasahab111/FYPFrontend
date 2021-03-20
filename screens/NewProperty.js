import React, {useState, useEffect} from 'react';
import {Searchbar, Menu, Provider} from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Permissions from 'expo-permissions';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TextInput,
    Button,
    ScrollView, StatusBar, TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

let DW = Dimensions.get('window').width;
import * as ImagePicker from 'expo-image-picker';

function ImagePickerExample() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title=" Image working" onPress={pickImage}/>
            {image && <Image source={{uri: image}} style={{width: 200, height: 200}}/>}
        </View>
    );
}


const Property = ({navigation}) => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <ScrollView>
            <SafeAreaView>
                {!search ?
                    <View style={styles.header3}>
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
                {menu ?
                    <View style={{paddingLeft: 15}}>
                        <Text style={styles.text} onPress={() => navigation.navigate('DashBoard')}>Advertisements</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Map')}>Map</Text>
                        <Text style={styles.text}>Cart</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('About')}>About us</Text>
                        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>Logout</Text>
                    </View> : null
                }

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
                    <Text style={styles.header}>
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
                    <Text style={styles.header}>
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
                    <Text style={styles.header}>
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
                    <Text style={styles.header}>
                         Property Type
                    </Text>
                </View>
                <View style={styles.scroll}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Plot', value: 0},
                            {label: 'House', value: 1},
                            {label: 'Commercial', value: 2},
                        ]}
                    />
                </View>
                <View>
                    <Text style={styles.header}>
                        Price
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.price}
                               placeholder="Enter your price(pkr)"
                               placeholderTextColor="#003f5c">

                    </TextInput>
                </View>
                <View>
                    <Text style={styles.header}>
                        Size
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.price}
                               placeholder="Enter your property size"
                               placeholderTextColor="#003f5c">

                    </TextInput>
                </View>
                <View>
                    <Text style={styles.header}>
                        Room(s)
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.price}
                               placeholder="Enter number of rooms"
                               placeholderTextColor="#003f5c">

                    </TextInput>
                </View>
                <View>
                    <Text style={styles.header}>
                        Washroom(s)
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.price}
                               placeholder="Number of washrooms"
                               placeholderTextColor="#003f5c">
                    </TextInput>
                </View>
                <View>
                    <Text style={styles.header}>
                        Construction Status
                    </Text>
                </View>
                <View style={styles.scroll}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Complete', value: 'a'},
                            {label: 'Under-Construction', value: 'b'},
                        ]}
                    />
                </View>
                <View>
                    <Text style={styles.header}>
                        Purpose
                    </Text>
                </View>
                <View style={styles.scroll}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Rent', value: 'r'},
                            {label: 'Sale', value: 's'},
                        ]}
                    />
                </View>
                <View>
                    <Text style={styles.header}>
                        Featured
                    </Text>
                </View>
                <View style={styles.scroll}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            {label: 'Yes', value: 'y'},
                            {label: 'No', value: 'n'},
                        ]}
                    />
                </View>
                <View >
                    <Text style={styles.header}>
                        Upload Images
                    </Text>
                </View>
                <ImagePickerExample/>
                <View>
                    <Button
                        title="image-1"
                        // onPress={pickImage}
                    />
                </View>
                <View>
                    <Button
                        title="image-3"
                    />
                </View>
                <View>
                    <Button
                        title="image-4"
                    />
                </View>
            </View>
            </SafeAreaView>
        </ScrollView>

    )
}


export default Property;
const styles = StyleSheet.create({

    header: {
        padding: 20,
        fontSize: 20,
        fontFamily: "Cochin",
        fontWeight: 'bold',
        alignItems : 'center'
    },
    header2: {
        width: 320,
        backgroundColor: "#F7F7F7",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        padding: 20,
    },
    container: {
        width: 320,
        backgroundColor: "#F7F7F7",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        padding: 20,

    },
    cntr: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttons:
        {
            backgroundColor: '#fff',
        },
    scroll:
        {
            padding: 15,
            marginTop: 0,
            marginBottom: 2,
            backgroundColor: '#5CADC6',
            width : 320
        },
    textbox: {
        width: 320,
        backgroundColor: "#F7F7F7",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        padding: 20,
    },
    price: {
        width: 320,
        backgroundColor: "#F7F7F7",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        padding: 20,
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
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
})
