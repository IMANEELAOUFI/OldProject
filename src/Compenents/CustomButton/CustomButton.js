import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
          
          width: '100%',
          padding: 15,
          marginVertical: 15,

          alignItems: 'center',
          borderRadius: 5,
          
    },

    container_PRIMARY: {
        backgroundColor:  "#1A237E",
    },
    container_SECONDARY: {
        borderColor: "#1A237E",
        borderWidth: 2,

    },
    container_TERTIARY: {
         
    },

    text: {
        fontWeight: 'bold',
        color: 'white',

    },

    text_TERTIARY: {
        color: 'gray',
    },

    text_SECONDARY: {
       color: 'blue',
    },
});

export default CustomButton