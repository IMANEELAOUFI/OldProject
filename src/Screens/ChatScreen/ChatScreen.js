import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.8.120:8000/api/v1';
const API_BASE_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDA1NmFjZmNkYWYxYTJjNGZhNzE1ZjdjMGM2ZTUzNGFjODVjNTRkY2RlNWZkZTUyNWU3NWQ4ZTM3ODViMDA1NTU3NDUwZTlhNGE0ZWEyYWYiLCJpYXQiOjE2ODUxMTY2MjQuNTUxNjI2LCJuYmYiOjE2ODUxMTY2MjQuNTUxNjI5LCJleHAiOjE3MTY3MzkwMjQuNTQwODM0LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.ThHOOpyfls2AZ4DT5wSktP9Ks6A2CZa_7SeicjqwR_ayCXHj6KSXMOoBrbxknEapStryGucoyHP9hUBZ-5rFrOvkNmxxAADwHosHiuzR-gA99ZaLxpVEGI-2GU7Rf43qUWJRKFm10s11HZ_jjIT5vHWiz3IHDKwqb68qUrgVJ95NmhEaEM9XYb5Il12qVR-mjHZxGN5xdJJxoJgj1IvAqWcPhI0G8UGsU8Tnzcwcpl6yD9mH22aPE47eGwi-EIMpeUKhmCLUo1EVyYpPo5y8Pp9c0O76uhdwuLJEUnmQHVw_xIvEF9DrfxmpmoEOJesuUUI0N6fN1VzC2gRcUa-eUXCjkdaJR1JCDYRfHSl7e_TLqKtNNgxjC2p_zqN7_3tnzDksa-lgFHAR1E6C6_gTZt6J1DJH9zzxwMxatKZpDHg-vJCotJ87QB25jOYIpd7oRK6ffk8C5rqqQVEdO7xCZ_V2wqpWXhVpAoy6tjQLhu37pUmpy8ZFhyLaLdiCWz58_x2qJjFJ8t1nS22_s2F4EdDab9Si0kgecDQK3V9YhQQhmwAETPtIyApTEHVuPlsJX7_8wLu_XeEj9PVRLRU7tLHlRRpZ3jNZq6OzgCI6UP0YvNQwAIUi5XuoitaN9vKKILClxkxfbMcd-ewCIT_1lUWcfLiRqEWf6nnGW9nNO2Q';


const ChatScreen = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/chat`, {
        headers: {
          Authorization: `Bearer ${API_BASE_TOKEN}`,
        },
      });

      if (response.data.success) {
        setChats(response.data.data);
      } else {
        console.error('Error while loading chats:', response.data.message);
      }
    } catch (error) {
      console.error('Error while loading chats:', error.message);
    }
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.profileAvatar} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
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
        renderItem={renderChatItem}
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
