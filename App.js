import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from "@expo/vector-icons"


import LoadingScreen from './screens/LoadingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

// For Tabs bar
import HomeScreen from './screens/HomeScreen'
import MessagaeScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB3CfSnkhF8mDplcg6iTQ3ucfb0HV3R9wE",
  authDomain: "umarket-18653.firebaseapp.com",
  databaseURL: "https://umarket-18653.firebaseio.com",
  projectId: "umarket-18653",
  storageBucket: "umarket-18653.appspot.com",
  messagingSenderId: "320747923282",
  appId: "1:320747923282:web:d719bcf22b045f15ca3c8b",
  measurementId: "G-ZTT1LXMFDS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const AppTabNavigator = createBottomTabNavigator(
  {
      Home:{
        screen: HomeScreen,
        navigationOptions:{
          tabBarIcon:({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
        }
      },
      Messagae:{
        screen: MessagaeScreen,
        navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}></Ionicons>
        }
      },
      Post:{
        screen: PostScreen,
        navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-add-circle" size={24} color={tintColor}></Ionicons>
        }
      }, 
      Notification:{
        screen: NotificationScreen,
        navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor}></Ionicons>
        }
      },
      Profile:{
        screen: ProfileScreen,
        navigationOptions:{
        tabBarIcon:({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
        }
      }
      

  },
  {
      tabBarOptions:{
        activeTintColor: "#161F3D",
        inactiveTintColor: "#BBBBC4",
        showLabel: false
      }
    }
)
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)