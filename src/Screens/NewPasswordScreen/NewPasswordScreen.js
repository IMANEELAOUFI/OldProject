import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView,  Platform } from 'react-native'
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const NewPasswordScreen = () => { 
const [code, setCode] = useState('');
const [newPassword, setNewPassword] = useState('');

const navigation = useNavigation();
    

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };
    
    const onSignInPressed = () => {
        navigation.navigate('Sign in');
    };


    return (
        <ScrollView>
       <View style={styles.fot}>
        <View style={styles.root}>
            <Text style={styles.title}>
               Reset your password 
            </Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Code</Text>
            <View style={styles.action}>

            <FontAwesome 
                 name="code"
                 color="#05375a"
                 size={20}
/>
             
             <TextInput 
                    placeholder="Enter your confirmation code"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
              
      
            </View>
             <Text style={styles.text_footer}>New password</Text>
        <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#05375a" 
                    size={20}
                />
              <TextInput 
                    placeholder="Your new password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    
                />
              
        </View>
             

             <CustomButton  
             text="Submit" 
             onPress={onSubmitPressed}  
             /> 
              

             <CustomButton  
             text="Back to Sign in" 
             onPress={onSignInPressed} 
             type="TERTIARY" 
             /> 

        </Animatable.View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    fot: {
        flex: 1,
        backgroundColor: "#1A237E", 
    },
    root: {
        flex: 2,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#1A237E",
        justifyContent: 'center',
    
    },

    footer: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    
      },
    
    
    text: {
     color: 'gray',
     marginVertical: 10,   
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 50,
        
    },

    link: {
         color: '#F0B074',  
    },

    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});

export default NewPasswordScreen