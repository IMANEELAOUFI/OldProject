import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfilePic from '../../../assets/images/ProfilePic.png';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
const API_BASE_URL = 'http://10.0.2.2:8000/api';

const ChatMessages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const route = useRoute();
    const { itemId } = route.params; 
    const { contact } = route.params; 
    const {name} = route.params;
    useEffect(() => {
      fetchMessages();
      console.log(itemId);
      console.log(contact);
      console.log(name);
    }, []);
  
    const fetchMessages = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.get(`${API_BASE_URL}/chat_message/${itemId}/1`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.data.success) {
            setMessages(response.data.data.items);
          } else {
            console.error('Error while loading messages:', response);
          }
        } catch (error) {
          console.error('Error while loading messages:', error.message);
        }
      };
    
     const sendMessage = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(
      
      `${API_BASE_URL}/chat_message/${itemId}`,
      {
        message: newMessage, // Use the value from the newMessage state
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      setNewMessage('');
      setMessages(prevItems => [...prevItems, response.data.data.item]);
    } else {
      console.error('Error while sending message:', response.data.message);
    }
  } catch (error) {
    console.error('Error while sending message:', error.message);
  }
};

const handleAttachmentPress = async () => {
  try {
    const image = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });

    const formData = new FormData();
    formData.append('image', {
      uri: image.uri,
      name:image.name,
      type: image.type,
    });
    console.log(formData._parts);
    const token = await AsyncStorage.getItem('token');

    const response = await axios.post(
      `${API_BASE_URL}/chat_message/${itemId}`,
     { message : " ",
      image : formData,},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data.success) {
      const filePath = response.data.data.item.image_path;
      // Do something with the file path
      console.log('Image path:', filePath);
    } else {
      console.error('Error sending message:', response.data.message);
    }
  } catch (error) {
    console.error('Error picking image:', error);
  }
};
const renderMessageItem = ({ item }) => {
  const isCurrentUser = item.user.username === name;

  return (
    <View style={isCurrentUser ? styles.messageItem : styles.messageItemOther}>
      {/* <Image source={{ uri: item.sender.avatar }} style={styles.profileAvatar} /> */}
      <View
        style={isCurrentUser ? styles.messageContent : styles.messageContentOther}
      >
        <Text style={styles.messageText}>{item.user.username}</Text>
        {item.image_path ? (
          <View style={styles.container}>
          <Image source={{ uri: item.image_path }} style={styles.messageImage} />
          <Text style={styles.messageText}>{item.message}</Text>
          </View>
        ) : (
          <Text style={styles.messageText}>{item.message}</Text>
        )}
        <Text style={styles.messageDate}>{item.created_at}</Text>
      </View>
    </View>
  );
};

  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={ProfilePic} style={styles.profileAvatar} />
          <Text style={styles.userName}>{contact}</Text>
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
          <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachmentPress}>
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
        justifyContent: 'flex-end',
      },
      messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'flex-start',
      },
      messageItemOther: {
        justifyContent: 'flex-end', 
        alignItems: 'center',
        marginBottom: 10,
      },
      messageContent: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 10,
        alignSelf: 'flex-start',
      },
      messageContentOther: {
        flex: 1,
        backgroundColor: '#DCF8C6',
        borderRadius: 8,
        padding: 10,
        alignSelf: 'flex-end',
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