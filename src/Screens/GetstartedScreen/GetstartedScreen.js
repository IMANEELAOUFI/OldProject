import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import AppLogo from '../../../assets/images/AppLogo.png';
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';



const GetstartedScreen = () => { 

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Sign in');
    };
    const onSignInAdminPressed = () => {
        navigation.navigate('Admin');
    };



    return (
        <ScrollView>
        <View style={styles.fot}>
        <View style={styles.root}>
            <Image
             source={AppLogo} 
             style={[styles.AppLogo, {height: height * 0.3}]}
              resizeMode='contain' />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
              <Text style={styles.titre}>Stay connected with everyone!</Text>
             
             <CustomButton 
              text="Sign in with user account" 
              onPress={onSignInPressed}
              /> 
              
               <CustomButton 
              text="Sign in with admin account" 
              onPress={onSignInAdminPressed}
              /> 
              
        </Animatable.View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    fot: {
        flex: 1,
        backgroundColor: "#ADD8E6" , 
    },
    root: {
        flex: 2,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#ADD8E6" ,
        justifyContent: 'center',
    
    },
    AppLogo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 300,
        margin: 20,
        
    },

    footer: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    
      },
 
      titre: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    
});

export default GetstartedScreen