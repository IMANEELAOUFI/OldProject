import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import ProfilePic from '../../../assets/images/ProfilePic.png';

const API_BASE_URL = 'http://10.0.2.2:8000/api';


const ChatScreen = () => {
  const [chats, setChats] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params

  useFocusEffect(
    React.useCallback(() => {
      fetchChats();
      console.log(name.name);
  
    }, [])
  );
  const fetchChats = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/chat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setChats(response.data.data.items);
        // console.log(chats)
      } else {
        console.error('Error while loading chats:', response.data.message);
      }
    } catch (error) {
      console.error('Error while loading chats:', error.message);
    }
  };
  const go =  (itemId , contact ) => {

      // Redirect or perform any other action based on the response
      navigation.navigate('Message' , { itemId , contact , name : name.name});
    } ;
    const RenderChatItem = ({ item }) => (
      <TouchableOpacity onPress={() => go(item.id, item.participants[1].user.username)} style={styles.chatItem}>
         {/* <ProfilePic source={{ uri: item.avatar }} style={styles.profileAvatar} />   */}
        <View style={styles.chatDetails}>
          <Text style={styles.chatName}>chat with {item.participants[1].user.username}</Text>
          {item.last_message && item.last_message.message && (
            <Text style={styles.chatMessage}>{item.last_message.message}</Text>
          )}
          {!item.last_message && (
            <Text style={styles.chatMessage}>No messages</Text>
          )}
        </View>
      </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
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

export default ChatScreen;