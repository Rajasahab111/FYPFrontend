import React, {useState, useEffect, useContext} from 'react';
import {Searchbar, Menu, Provider} from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import {Picker} from '@react-native-picker/picker';
import * as Permissions from 'expo-permissions';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ScrollView, StatusBar, TouchableOpacity
} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

let DW = Dimensions.get('window').width;
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import {set} from "react-native-reanimated";
import {ContextApi} from "../ContextApi";

function ImagePickerExample() {
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             if (status !== 'granted') {
    //                 alert('Sorry, we need camera roll permissions to make this work!');
    //             }
    //         }
    //     })();
    // }, []);
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
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [City, setCity] = useState('')
    const [Location, setLocation] = useState('')
    const [Size, setSize] = useState('')
    const [Units, setUnits] = useState('')
    const [Beds, setBeds] = useState('')
    const [Price, setPrice] = useState('')
    const [Baths, setBaths] = useState('')
    const [Type, setType] = useState('')
    const [Purpose, setPurpose] = useState('')
    const [Featured, setFeatured] = useState('')
    const [Construction_status, setConstruction_status] = useState()
    const {Latitude, Longitude} = useContext(ContextApi);
    const {latitude, setlatitude} = useState(0.0)
    const {longitude, setlongitude} = useState(0.0)
    const [cell_no, setContact] = useState()
    const [current_latitude, setCurrentLatitude] = Latitude;
    const [current_longitude, setCurrentLongitude] = Longitude;
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    const [isSelected, setSelection] = useState(false);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setCurrentLatitude(position.coords.latitude)
                setlatitude(position.coords.latitude)
                setCurrentLongitude(position.coords.longitude)
                setlongitude(position.coords.longitude)
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }, [])
    const handlepost = async () => {
        if (!isSelected) {
            setlatitude(0.0)
            setlongitude(0.0)
        }
        await axios.post('http://192.168.1.7:4000/api/CreateAd/', {
            Title: Title,
            Description: Description,
            City: City,
            Location: Location,
            Size: Size,
            Units: Units,
            Beds: Beds,
            Price: Price,
            Baths: Baths,
            longitude: longitude,
            latitude: latitude,
            Construction_status: Construction_status,
            cell_no: cell_no,


        }, {
            headers: {'Content-Type': 'application/json', 'Authorization': `Token ${navigation.getParam('token')}`}
        }).then(() => navigation.navigate('DashBoard')).catch((error) => console.log(error));

    };
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
                        <Text style={styles.text} onPress={() => navigation.navigate('FilteredSearch')}>Filter</Text>
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
                                   value={Title}
                                   onChangeText={text => setTitle(text)}
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
                                   value={City}
                                   onChangeText={text => setCity(text)}
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
                                   value={Location}
                                   onChangeText={text => setLocation(text)}
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
                                   value={Description}
                                   onChangeText={text => setDescription(text)}
                                   placeholderTextColor="#003f5c">

                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Property Type
                        </Text>
                    </View>
                    <View style={styles.scroll}>

                        <Picker
                            selectedValue={Type}
                            onValueChange={(itemValue, itemIndex) =>
                                setType(itemValue)
                            }>
                            <Picker.Item label="Plot" value="plot"/>
                            <Picker.Item label="House/Flat" value="property"/>
                            <Picker.Item label="Commercial" value="commercial"/>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Units
                        </Text>
                    </View>
                    <View style={styles.scroll}>

                        <Picker
                            selectedValue={Units}
                            onValueChange={(itemValue, itemIndex) =>
                                setUnits(itemValue)
                            }>
                            <Picker.Item label="Marla" value="marla"/>
                            <Picker.Item label="Kanal" value="kanal"/>
                            <Picker.Item label="square_meters" value="square_meters"/>
                            <Picker.Item label="square_yards" value="square_yards"/>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Price
                        </Text>
                    </View>
                    <View>
                        <TextInput style={styles.price}
                                   placeholder="Enter your price(pkr)"
                                   value={Price}
                                   onChangeText={text => setPrice(text)}
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
                                   value={Size}
                                   onChangeText={text => setSize(text)}
                                   placeholderTextColor="#003f5c">

                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Contact
                        </Text>
                    </View>
                    <View>
                        <TextInput style={styles.price}
                                   placeholder="03011111111"
                                   value={Size}
                                   onChangeText={text => setContact(text)}
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
                                   value={Beds}
                                   onChangeText={text => setBeds(text)}
                                   placeholderTextColor="#003f5c">

                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.header}
                        >
                            Washroom(s)
                        </Text>
                    </View>
                    <View>
                        <TextInput style={styles.price}
                                   placeholder="Number of washrooms"
                                   value={Baths}
                                   onChangeText={text => setBaths(text)}
                                   placeholderTextColor="#003f5c">
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Construction Status
                        </Text>
                    </View>
                    <View style={styles.scroll}>

                        <Picker
                            selectedValue={Construction_status}
                            onValueChange={(itemValue, itemIndex) =>
                                setConstruction_status(itemValue)
                            }>
                            <Picker.Item label="Complete" value="complete"/>
                            <Picker.Item label="Under Construction" value="under_construction"/>
                        </Picker>
                    </View>

                    <View>
                        <Text style={styles.header}>
                            Purpose
                        </Text>
                    </View>
                    <View style={styles.scroll}>
                        <Picker
                            selectedValue={Purpose}
                            onValueChange={(itemValue, itemIndex) =>
                                setPurpose(itemValue)
                            }>
                            <Picker.Item label="Rent" value="rent"/>
                            <Picker.Item label="Sale" value="sale"/>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.header}>
                            Featured
                        </Text>
                    </View>
                    <View style={styles.scroll}>

                        <Picker
                            selectedValue={Featured}
                            onValueChange={(itemValue, itemIndex) =>
                                setFeatured(itemValue)
                            }>
                            <Picker.Item label="Yes" value="true"/>
                            <Picker.Item label="No" value="false"/>
                        </Picker>
                    </View>
                    <View>
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
                            onPress={() => console.log(`${current_latitude}`)}
                        />
                    </View>
                    <View>
                        <CheckBox
                            value={isSelected}
                            onValueChange={() => setSelection(!isSelected)}
                            style={styles.checkbox}
                        />
                    </View>
                    <View>
                        <Button
                            title="Submit"
                            onPress={() => handlepost()}
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
        alignItems: 'center'
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
            backgroundColor: 'white',
            width: 320
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
