import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


import SigninScreen from '../Screens/SigninScreen/SigninScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
import GetstartedScreen from '../Screens/GetstartedScreen/GetstartedScreen';
import ProfileScreen from '../Screens/SettingScreen/ProfileScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import ChatMessages from '../Screens/ChatScreen/ChatMessages';
import EditProfileScreen from '../Screens/SettingScreen/EditProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



  function TabB() {
    return (
        <Tab.Navigator initialRouteName="Chat" screenOptions={{headerShown: false }}>
          <Tab.Screen  name="Contact"  component={HomeScreen}
         options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}/>
          <Tab.Screen name="Chat" component={ChatScreen} 
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="chat" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Settings" component={ProfileScreen} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>

    );
        }


  

const Naviagtion = () => {

    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{headerShown: false }}>
             <Stack.Screen name="Get started" component={GetstartedScreen} />
             <Stack.Screen name="Sign in" component={SigninScreen} />
             <Stack.Screen name="Sign up" component={SignupScreen} />
             <Stack.Screen name="confirm email" component={ConfirmEmailScreen} />
             <Stack.Screen name="Forgot password" component={ForgotPasswordScreen} />
             <Stack.Screen name="New password" component={NewPasswordScreen} />
             <Stack.Screen name="Home" component={TabB} />
             <Stack.Screen name="Messages" component={ChatMessages} />
             <Stack.Screen name="Edit profile" component={EditProfileScreen} />

    </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Naviagtion;