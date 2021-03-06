import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import {Platform} from 'react-native';
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import About from '../Screens/About';

function CustomDrawerContent(props) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.drawerHeaderText}>
                    <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
                </View >
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                icon={() => <Icon name={Platform.OS ==='ios' ? "ios-close" : "md-close"} color="black" size={22}/>}
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
        </ScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomDrawerContent{...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="About" component={About}/>

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: 'rgb(20,30,60)',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold'
    }
})

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}
