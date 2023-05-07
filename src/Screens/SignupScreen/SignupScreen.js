import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView,  Platform} from 'react-native'
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


const SignupScreen = () => { 
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordRepeat, setPasswordRepeat] = useState('');

const navigation = useNavigation();
    

    const onRegisterPressed = () => {
       navigation.navigate('confirm email');
    };
    
    const onSignInPressed = () => {
        navigation.navigate('Sign in');
    };

    const onTermsUsePressed = () => {
        console.warn('onTermsUsePressed');
    };
    const onPrivacyPressed = () => {
        console.warn('oonPrivacyPressed');
    };

    return (
        <ScrollView>
        <View style={styles.fot}>
        <View style={styles.root}>
            <Text style={styles.title}>
               Create an account 
            </Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>

            <FontAwesome 
            name="user-o" 
            size={20} 
            color="#05375a" 
            />
             
             <TextInput 
                    placeholder="username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
              
      
            </View>

            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>

            <Entypo name="email" 
            color="#05375a" 
            size={20} 
            />
             
             <TextInput 
                    placeholder="Your email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
              
      
            </View>

            <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#05375a" 
                    size={20}
                />
              <TextInput 
                    placeholder="Your password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    
                />
              
        </View>

        <Text style={styles.text_footer}>Confirm password </Text>
        <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#05375a" 
                    size={20}
                />
              <TextInput 
                    placeholder="Confirm your password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    
                />
              
        </View>

             <CustomButton 
              text="Register " 
              onPress={onRegisterPressed}
              /> 
              
             <Text style={styles.text}>
                By registering, you confirme that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsUsePressed}>termes of Use</Text> and{' '}  
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text> 

             <CustomButton  
             text="Have an account? Sign In" 
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

    footer: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    
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

export default SignupScreen