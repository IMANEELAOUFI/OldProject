import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


import SigninScreen from '../Screens/SigninScreen/SigninScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
import AdminLoginScreen from '../Screens/AdminLoginScreen/AdminLoginScreen';
import AdminHomeScreen from '../Screens/AdminHomeScreen/AdminHomeScreen';
import GetstartedScreen from '../Screens/GetstartedScreen/GetstartedScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import SettingAdminScreen from '../Screens/SettingAdminScreen/SettingAdminScreen';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HScreen() {
    return ( 
      <HomeScreen/>
    );
  }
  function ChScreen() {
    return (
      <ChatScreen/>
    );
  }
  function SeScreen() {
    return (       
      <SettingScreen/>    
    );
  }

  function TabB() {
    return (
        <Tab.Navigator initialRouteName="Chat" screenOptions={{headerShown: false }}>
          <Tab.Screen  name="Contact"  component={HScreen}
         options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}/>
          <Tab.Screen name="Chat" component={ChScreen} 
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="chat" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Settings" component={SeScreen} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>

    );
  }

  function SetAdminScreen() {
    return (
        
      <SettingAdminScreen/>
      
    );
  }
  function AScreen() {
    return (
       
      <AdminHomeScreen/>
      
    );
  }

  function TabA() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
          <Tab.Screen name="Users" component={AScreen} 
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Settings" component={SetAdminScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>

    );
  }

const Naviagtion = () => {

    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{headerShown: false }}>
             <Stack.Screen name="Get started" component={GetstartedScreen} />
             <Stack.Screen name="Sign in" component={SigninScreen} />
             <Stack.Screen name="Admin" component={AdminLoginScreen} />
             <Stack.Screen name="Sign up" component={SignupScreen} />
             <Stack.Screen name="confirm email" component={ConfirmEmailScreen} />
             <Stack.Screen name="Forgot password" component={ForgotPasswordScreen} />
             <Stack.Screen name="New password" component={NewPasswordScreen} />
             <Stack.Screen name="Home" component={TabB} />
             <Stack.Screen name="Admin Home" component={TabA} />

    </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Naviagtion;