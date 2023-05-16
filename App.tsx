/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Naviagtion from './src/navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Naviagtion />
    </SafeAreaView>

  );
 
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: 'center',
    
  },

  
});

export default App;
