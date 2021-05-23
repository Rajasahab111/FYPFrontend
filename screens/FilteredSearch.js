import React, {useContext, useState} from "react";
import {View,Text,TextInput,ScrollView,SafeAreaView,StyleSheet} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {ContextApi} from "../ContextApi";

const FilteredSearch = ({navigation}) =>{
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
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                <Text style={styles.fs}>
                    Filtered Search
                </Text>
                <View  style={styles.text}>
                    <Text style={styles.header}>
                        Enter Maximum price
                    </Text>
                    <TextInput placeholder={'Enter max price'} style={styles.price}>

                    </TextInput>
                </View>
                <View  style={styles.text}>
                    <Text style={styles.header}>
                        Enter City
                    </Text>
                    <TextInput placeholder={'Islamabad,Lahore..'} style={styles.price}>
                    </TextInput>
                </View>
                <View  style={styles.text}>
                    <Text style={styles.header}>
                        Enter Location
                    </Text>
                    <TextInput placeholder={'Mehrban House etc'} style={styles.price}>
                    </TextInput>
                </View>
                <View>
                    <Text style={styles.header}>
                        Select Type
                    </Text>
                <Picker
                    selectedValue={Type}
                    onValueChange={(itemValue, itemIndex) =>
                        setType(itemValue)
                    }>
                    <Picker.Item label="Plot" value="plot" />
                    <Picker.Item label="House/Flat" value="property" />
                    <Picker.Item label="Commercial" value="commercial" />
                </Picker>
                </View>
                <View>
                    <Text style={styles.header}>
                        Select Purpose
                    </Text>
                    <Picker
                        selectedValue={Type}
                        onValueChange={(itemValue, itemIndex) =>
                            setType(itemValue)
                        }>
                        <Picker.Item label="rent" value="rent" />
                        <Picker.Item label="sale" value="sale" />

                    </Picker>
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

                    <Picker
                        selectedValue={Units}
                        onValueChange={(itemValue, itemIndex) =>
                            setUnits(itemValue)
                        }>
                        <Picker.Item label="Marla" value="marla" />
                        <Picker.Item label="Kanal" value="kanal" />
                        <Picker.Item label="square_meters" value="square_meters" />
                        <Picker.Item label="square_yards" value="square_yards" />
                    </Picker>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
}
export default FilteredSearch;
const styles = StyleSheet.create({

    header: {
        padding: 20,
        fontSize: 20,
        fontFamily: "Cochin",
        fontWeight: 'bold',


    },
    price: {
        width: 320,
        backgroundColor: "#F7F7F7",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
        padding: 20,

    },
    main :{
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
    text :{
alignItems: "center"
    },
    fs :{
        backgroundColor: 'blue',

    }


})