import React, {  useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [chats, setChats] = useState([]);

  


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chats</Text>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={{ paddingHorizontal: 20, paddingVertical: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  
});

export default ChatScreen;
