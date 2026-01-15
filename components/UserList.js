// components/UserList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import apiService from '../services/apiService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await apiService.getUsers();
      setUsers(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load users: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
    try {
      const newUser = {
        email: `user${Date.now()}@example.com`,
        name: `User ${Date.now()}`
      };
      const createdUser = await apiService.createUser(newUser);
      setUsers([...users, createdUser]);
      Alert.alert('Success', 'User created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create user: ' + error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name || 'No Name'}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Add User" onPress={addUser} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    marginTop: 20,
  },
  userItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default UserList;