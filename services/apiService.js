// api/apiService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL for the API - update this to your VPS server URL when deploying
const API_BASE_URL = 'http://localhost:3000/api'; // Change this to your VPS IP when deploying

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method to make API requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // User methods
  getUsers() {
    return this.request('/users');
  }

  getUserById(id) {
    return this.request(`/users/${id}`);
  }

  createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  updateUser(id, userData) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Financial Record methods
  getFinancialRecords() {
    return this.request('/financial-records');
  }

  getFinancialRecordById(id) {
    return this.request(`/financial-records/${id}`);
  }

  createFinancialRecord(recordData) {
    return this.request('/financial-records', {
      method: 'POST',
      body: JSON.stringify(recordData),
    });
  }

  updateFinancialRecord(id, recordData) {
    return this.request(`/financial-records/${id}`, {
      method: 'PUT',
      body: JSON.stringify(recordData),
    });
  }

  deleteFinancialRecord(id) {
    return this.request(`/financial-records/${id}`, {
      method: 'DELETE',
    });
  }

  // Receipt methods
  getReceipts() {
    return this.request('/receipts');
  }

  getReceiptById(id) {
    return this.request(`/receipts/${id}`);
  }

  getReceiptsByUserId(userId) {
    return this.request(`/receipts/user/${userId}`);
  }

  createReceipt(receiptData) {
    return this.request('/receipts', {
      method: 'POST',
      body: JSON.stringify(receiptData),
    });
  }

  updateReceipt(id, receiptData) {
    return this.request(`/receipts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(receiptData),
    });
  }

  deleteReceipt(id) {
    return this.request(`/receipts/${id}`, {
      method: 'DELETE',
    });
  }

  // Account methods
  getAccounts() {
    return this.request('/accounts');
  }

  getAccountById(id) {
    return this.request(`/accounts/${id}`);
  }

  getAccountsByUserId(userId) {
    return this.request(`/accounts/user/${userId}`);
  }

  createAccount(accountData) {
    return this.request('/accounts', {
      method: 'POST',
      body: JSON.stringify(accountData),
    });
  }

  updateAccount(id, accountData) {
    return this.request(`/accounts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(accountData),
    });
  }

  deleteAccount(id) {
    return this.request(`/accounts/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new ApiService();