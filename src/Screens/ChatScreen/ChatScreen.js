import React from 'react'
import { SafeAreaView,Text, TextInput, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native';


const ChatScreen = () => {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20}}>
                <Text style={styles.tir}>Chat</Text>
              
             <TextInput
                  placeholder="Search"
                  clearButtonMode="always"
                  style={{paddingHorizontal: 20, paddingVertical: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 8,}}
              /> 
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    tir: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
         marginVertical: 20,
    },
   
  });

export default ChatScreen;
