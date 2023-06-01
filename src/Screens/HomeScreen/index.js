import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfilePic from '../../../assets/images/ProfilePic.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.8.120:8000/api/v1';
const API_BASE_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDA1NmFjZmNkYWYxYTJjNGZhNzE1ZjdjMGM2ZTUzNGFjODVjNTRkY2RlNWZkZTUyNWU3NWQ4ZTM3ODViMDA1NTU3NDUwZTlhNGE0ZWEyYWYiLCJpYXQiOjE2ODUxMTY2MjQuNTUxNjI2LCJuYmYiOjE2ODUxMTY2MjQuNTUxNjI5LCJleHAiOjE3MTY3MzkwMjQuNTQwODM0LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.ThHOOpyfls2AZ4DT5wSktP9Ks6A2CZa_7SeicjqwR_ayCXHj6KSXMOoBrbxknEapStryGucoyHP9hUBZ-5rFrOvkNmxxAADwHosHiuzR-gA99ZaLxpVEGI-2GU7Rf43qUWJRKFm10s11HZ_jjIT5vHWiz3IHDKwqb68qUrgVJ95NmhEaEM9XYb5Il12qVR-mjHZxGN5xdJJxoJgj1IvAqWcPhI0G8UGsU8Tnzcwcpl6yD9mH22aPE47eGwi-EIMpeUKhmCLUo1EVyYpPo5y8Pp9c0O76uhdwuLJEUnmQHVw_xIvEF9DrfxmpmoEOJesuUUI0N6fN1VzC2gRcUa-eUXCjkdaJR1JCDYRfHSl7e_TLqKtNNgxjC2p_zqN7_3tnzDksa-lgFHAR1E6C6_gTZt6J1DJH9zzxwMxatKZpDHg-vJCotJ87QB25jOYIpd7oRK6ffk8C5rqqQVEdO7xCZ_V2wqpWXhVpAoy6tjQLhu37pUmpy8ZFhyLaLdiCWz58_x2qJjFJ8t1nS22_s2F4EdDab9Si0kgecDQK3V9YhQQhmwAETPtIyApTEHVuPlsJX7_8wLu_XeEj9PVRLRU7tLHlRRpZ3jNZq6OzgCI6UP0YvNQwAIUi5XuoitaN9vKKILClxkxfbMcd-ewCIT_1lUWcfLiRqEWf6nnGW9nNO2Q';

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    loadUsers();
  }, []);
  const loadUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${API_BASE_TOKEN}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Erreur lors du chargement des utilisateurs:', error.response.data);
      } else {
        console.error('Erreur lors du chargement des utilisateurs:', error.message);
      }
      
    }
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={styles.title}>Contact</Text>

      <TextInput
        placeholder="Rechercher"
        clearButtonMode="always"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
        }}
      />

      <View style={styles.userContainer}>
        {users.map((user) => (
          <TouchableOpacity key={user.id} style={styles.userItem} onPress={() => navigation.navigate('Messages')}>
            <View style={styles.profileContainer}>
              <Image source={ProfilePic} style={styles.profileAvatar} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>{user.username}</Text>
              <Text style={styles.userPhone}>{user.phone_number}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginVertical: 20,
  },
  userContainer: {
    marginTop: 20,
  },
  userItem: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    marginRight: 10,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userPhone: {
    fontSize: 14,
    color: '#888',
  },
  
});

export default Index;
