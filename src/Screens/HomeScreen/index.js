import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-animatable';

const index = () => {

    const navigation = useNavigation();


    return (

        <SafeAreaView style={{ flex: 1, marginHorizontal: 20}}>
            <View>
                <Text style={styles.tir}>Contact</Text>
            </View>
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

export default index;
