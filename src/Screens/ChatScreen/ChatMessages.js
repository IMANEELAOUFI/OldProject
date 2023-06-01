import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfilePic from '../../../assets/images/ProfilePic.png';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.8.120:8000/api/v1';
const API_BASE_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDA1NmFjZmNkYWYxYTJjNGZhNzE1ZjdjMGM2ZTUzNGFjODVjNTRkY2RlNWZkZTUyNWU3NWQ4ZTM3ODViMDA1NTU3NDUwZTlhNGE0ZWEyYWYiLCJpYXQiOjE2ODUxMTY2MjQuNTUxNjI2LCJuYmYiOjE2ODUxMTY2MjQuNTUxNjI5LCJleHAiOjE3MTY3MzkwMjQuNTQwODM0LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.ThHOOpyfls2AZ4DT5wSktP9Ks6A2CZa_7SeicjqwR_ayCXHj6KSXMOoBrbxknEapStryGucoyHP9hUBZ-5rFrOvkNmxxAADwHosHiuzR-gA99ZaLxpVEGI-2GU7Rf43qUWJRKFm10s11HZ_jjIT5vHWiz3IHDKwqb68qUrgVJ95NmhEaEM9XYb5Il12qVR-mjHZxGN5xdJJxoJgj1IvAqWcPhI0G8UGsU8Tnzcwcpl6yD9mH22aPE47eGwi-EIMpeUKhmCLUo1EVyYpPo5y8Pp9c0O76uhdwuLJEUnmQHVw_xIvEF9DrfxmpmoEOJesuUUI0N6fN1VzC2gRcUa-eUXCjkdaJR1JCDYRfHSl7e_TLqKtNNgxjC2p_zqN7_3tnzDksa-lgFHAR1E6C6_gTZt6J1DJH9zzxwMxatKZpDHg-vJCotJ87QB25jOYIpd7oRK6ffk8C5rqqQVEdO7xCZ_V2wqpWXhVpAoy6tjQLhu37pUmpy8ZFhyLaLdiCWz58_x2qJjFJ8t1nS22_s2F4EdDab9Si0kgecDQK3V9YhQQhmwAETPtIyApTEHVuPlsJX7_8wLu_XeEj9PVRLRU7tLHlRRpZ3jNZq6OzgCI6UP0YvNQwAIUi5XuoitaN9vKKILClxkxfbMcd-ewCIT_1lUWcfLiRqEWf6nnGW9nNO2Q';

const ChatMessages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      fetchMessages();
    }, []);
  
    const fetchMessages = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/chat_message`, {
            headers: {
              Authorization: `Bearer ${API_BASE_TOKEN}`,
            },
          });
    
          if (response.data.success) {
            setMessages(response.data.data);
          } else {
            console.error('Error while loading messages:', response.data.message);
          }
        } catch (error) {
          console.error('Error while loading messages:', error.message);
        }
      };
    
      const sendMessage = async () => {
        try {
          const response = await axios.post(`${API_BASE_URL}/chat_message`, {
            message: newMessage,
            date: new Date().toISOString(),
          }, {
            headers: {
              Authorization: `Bearer ${API_BASE_TOKEN}`,
            },
          });
    
          if (response.data.success) {
            setNewMessage('');
            fetchMessages();
          } else {
            console.error('Error while sending message:', response.data.message);
          }
        } catch (error) {
          console.error('Error while sending message:', error.message);
        }
      };
    
      const renderMessageItem = ({ item }) => (
        <View style={styles.messageItem}>
          <Image source={{ uri: item.sender.avatar }} style={styles.profileAvatar} />
          <View style={styles.messageContent}>
            <Text style={styles.messageText}>{item.message}</Text>
            <Text style={styles.messageDate}>{item.date}</Text>
          </View>
        </View>
      );
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={ProfilePic} style={styles.profileAvatar} />
          <Text style={styles.userName}>User Name</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.messageList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity style={styles.attachmentButton}>
          <MaterialIcons name="attach-file" size={24} color="#0000ff" />
        </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <MaterialIcons name="send" size={24} color="#0000ff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ADD8E6',
        padding: 10,
       // borderRadius: 8,
      },
      profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      userName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },
      messageList: {
        flexGrow: 1,
        paddingBottom: 20,
      },
      messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      messageContent: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
      },
      messageText: {
        fontSize: 14,
      },
      messageDate: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
      },
    attachmentButton: {
        marginRight: 10,
      },
    sendButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 16,
      paddingVertical: 10,
      dd: 8,
    },
  });
  
  export default ChatMessages;