import React  ,{ useEffect, useState } from 'react';
import { SafeAreaView,Text, TextInput, StyleSheet } from 'react-native'
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8000/api';


const AdminHomeScreen = () => {

    const navigation = useNavigation();
    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetchChats();
      }, []);
    
      const fetchChats = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.data.success) {
            setChats(response.data.data.items);
            // console.log(chats)
          } else {
            console.error('Error while loading Contacts:', response.data.message);
          }
        } catch (error) {
          console.error('Error while loading Contacts:', error.message);
        }
      };
      const RenderChatItem = ({ item }) => (
        <TouchableOpacity>
           {/* <Image source={{ uri: item.avatar }} style={styles.profileAvatar} />  */}
          <View style={styles.chatDetails}>
            <Text style={styles.chatName}>{item.username}</Text>
            <Text style={styles.chatMessage}>{item.email}</Text>
          </View>
        </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
          <Text style={styles.title}>All Users</Text>
          <TextInput
            placeholder="Search"
            clearButtonMode="always"
            style={styles.searchInput}
          />
          <FlatList
            data={chats}
            renderItem={({item}) => <RenderChatItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.chatList}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
      },
      title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 20,
      },
      searchInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
      },
      chatList: {
        paddingBottom: 20,
      },
      chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      chatDetails: {
        flex: 1,
      },
      chatName: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
      },
      chatMessage: {
        fontSize: 14,
        color: '#888',
      },
    });
    

export default AdminHomeScreen;
