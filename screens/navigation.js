import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Login from './LoginScreen';
import Property from './NewProperty';
import Signup from './SignUp';
import DashBoard from './DashBoard';
import Map from "./Maps";
import About from "./Aboutus";


const Stack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    },
        DashBoard: {
            screen: DashBoard,
            navigationOptions: {
                headerShown: false,
            },
        },
        Map: {
            screen: Map,
            navigationOptions: {
                headerShown: false,
            },
        },


        Signup: {
            screen: Signup,
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
    About: {
        screen: About,
        navigationOptions: {
            headerShown: false,
        },
    },

});
const AppContainer = createAppContainer(Stack);
export default AppContainer;
