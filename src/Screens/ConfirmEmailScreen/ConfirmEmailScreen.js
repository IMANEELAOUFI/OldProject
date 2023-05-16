import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, ScrollView,  Platform } from 'react-native'
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ConfirmEmailScreen = () => { 
const [code, setCode] = useState('');
const [codeError, setCodeError] = useState(false);
    
const navigation = useNavigation();

    
    const validateCode = code => {
    return code.length == 4;
    };

    const onConfirmPressed = () => {

        const errors = {};
  
          if (!validateCode(code)) {
            errors.code = ' Code must contain just 4 characters';
          }
          if (Object.keys(errors).length > 0) {
            setCodeError(errors.code || false);
            return;
          }

        navigation.navigate('Sign in');
    };
    
    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

    return (
        <ScrollView>
        <View style={styles.fot}>
        <View style={styles.root}>
            <Text style={styles.title}>
               CONFIRM EMAIL 
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
                    value={code}
                    onChangeText={text => setCode(text)}
                />
              
      
            </View>
            {codeError && (
        <Text style={styles.errorMsg}>Code must contain just 4 characters</Text>
      )}

             <CustomButton  
             text="Confirm" 
             onPress={onConfirmPressed}  
             /> 
              
              <CustomButton  
             text="Resend code " 
             onPress={onResendPressed} 
             type="SECONDARY" 
             /> 

        </Animatable.View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    fot: {
        flex: 1,
        backgroundColor: "#ADD8E6", 
    },
    root: {
        flex: 2,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#ADD8E6",
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

export default ConfirmEmailScreen