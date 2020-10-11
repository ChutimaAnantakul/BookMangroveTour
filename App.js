//This is an example code for Bottom Navigation//
// import React, { Component }  from 'react';
// import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import React, { Component } from 'react';
 
import { StyleSheet, ActivityIndicator, ListView, Text, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import InformationMenu from './pages/InformationMenu';
import CustermerMenu from './pages/CustermerMenu';
import SearchStaffMenu from './pages/SearchStaffMenu';
import StaffMenu from './pages/StaffMenu';
import PaymentScreen from './pages/PaymentScreen';
import BookedMenu from './pages/BookedMenu';
import forestScreen from './pages/forest';
import FoodScreen from './pages/Food';
import ConcludeMenu from './pages/ConcludeMenu';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  },
);

const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Settings: {screen: SettingsScreen},
    // Details: {screen: DetailsScreen},
    Search: {screen: SearchStaffMenu},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  },
);

const StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff: {screen: StaffMenu},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Staff',
      //Header title
    },
  },
);

const CustomerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    // Settings: {screen: SettingsScreen},
    // Details: {screen: DetailsScreen},
    Customer: {screen: CustermerMenu},
    Payment: {screen: PaymentScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customer',
      //Header title
    },
  },
);

const InformationStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Infor: {screen: InformationMenu},
    forest: {screen: forestScreen},
    Food: {screen: FoodScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Infor',
      //Header title
    },
  },
);

const BookedStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Booked: {screen: BookedMenu},
    // Custermer: {screen: CustermerMenu},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Booked',
      //Header title
    },
  },
);

const ConcludeStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Conclude: {screen: ConcludeMenu},
    // Custermer: {screen: CustermerMenu},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#943126',
      },
      headerTintColor: '#FFFFFF',
      title: 'Conclude',
      //Header title
    },
  },
);

const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Search: {screen: SearchStack},
    Staff: {screen: StaffStack},
    Customer: {screen: CustomerStack},
    Infor: {screen: InformationStack},
    Booked: {screen: BookedStack},
    Conclude: {screen: ConcludeStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Staff') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Customer') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Infor') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Booked') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Conclude') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } 
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#943126',
      inactiveTintColor: 'gray',
    },
  },
);
export default createAppContainer(App);
