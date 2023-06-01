import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text  style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '60%',
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center', // Added to center the button horizontally
      },
  container_PRIMARY: {
    backgroundColor: "#0000ff",
  },
  container_SECONDARY: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#0000ff",
  },
  container_TERTIARY: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  PRIMARY_text: {
    color: '#FFFFFF',
  },
  SECONDARY_text: {
    color: '#0000ff',
  },
  TERTIARY_text: {
    color: '#0000ff',
  },
});

export default CustomButton;
