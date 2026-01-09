// Example usage in a React Native component
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import ApiService from '../services/apiService';

const FinancialRecordsScreen = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFinancialRecords();
  }, []);

  const loadFinancialRecords = async () => {
    try {
      const data = await ApiService.getFinancialRecords();
      setRecords(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load financial records');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecord = async () => {
    const newRecord = {
      user_id: 1,
      type: 'expense',
      category: 'Food',
      amount: 25.50,
      description: 'Grocery shopping',
      date: new Date().toISOString().split('T')[0]
    };

    try {
      await ApiService.createFinancialRecord(newRecord);
      loadFinancialRecords(); // Refresh the list
      Alert.alert('Success', 'Financial record added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add financial record');
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      await ApiService.deleteFinancialRecord(id);
      loadFinancialRecords(); // Refresh the list
      Alert.alert('Success', 'Financial record deleted successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete financial record');
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Type: {item.type}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Amount: ${item.amount}</Text>
      <Text>Date: {item.date}</Text>
      <Button 
        title="Delete" 
        onPress={() => handleDeleteRecord(item.id)} 
        color="#ff6b6b" 
      />
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title="Add Record" onPress={handleAddRecord} />
      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FinancialRecordsScreen;