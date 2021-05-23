import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Login from './LoginScreen';
import Property from './NewProperty';
import Signup from './SignUp';
import DashBoard from './DashBoard';
import Map from "./Maps";
import About from "./Aboutus";
import Ad from "./Ad";
import FilteredSearch from "./FilteredSearch";


const Stack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
    Property: {
        screen: Property,
        navigationOptions: {
            headerShown: false,
        },
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            headerShown: false,
        }
    },
    Map: {
        screen: Map,
        navigationOptions: {
            headerShown: false,
        },
    },
    FilteredSearch: {
        screen: FilteredSearch,
        navigationOptions: {
            headerShown: false,
        },
    },


    DashBoard: {
        screen: DashBoard,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            }
        }
    },


    About: {
        screen: About,
        navigationOptions: {
            headerShown: false,
        },
    },
    Ad: {
        screen: Ad,
        navigationOptions: {
            headerShown: false,
        },
    },


});
const AppContainer = createAppContainer(Stack);
export default AppContainer;
