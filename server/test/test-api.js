// test/test-api.js
const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('Testing CashMash API...\n');
  
  try {
    // Test the base endpoint
    console.log('1. Testing base endpoint...');
    const response = await axios.get(`${BASE_URL}/`);
    console.log('✓ Base endpoint test passed:', response.data.message);
    
    // Test financial records endpoints
    console.log('\n2. Testing financial records endpoints...');
    
    // Get all financial records
    const recordsResponse = await axios.get(`${BASE_URL}/api/financial-records`);
    console.log('✓ GET /api/financial-records passed:', `Found ${recordsResponse.data.length} records`);
    
    // Test users endpoints
    console.log('\n3. Testing users endpoints...');
    
    // Get all users
    const usersResponse = await axios.get(`${BASE_URL}/api/users`);
    console.log('✓ GET /api/users passed:', `Found ${usersResponse.data.length} users`);
    
    // Test receipts endpoints
    console.log('\n4. Testing receipts endpoints...');
    
    // Get all receipts
    const receiptsResponse = await axios.get(`${BASE_URL}/api/receipts`);
    console.log('✓ GET /api/receipts passed:', `Found ${receiptsResponse.data.length} receipts`);
    
    // Test accounts endpoints
    console.log('\n5. Testing accounts endpoints...');
    
    // Get all accounts
    const accountsResponse = await axios.get(`${BASE_URL}/api/accounts`);
    console.log('✓ GET /api/accounts passed:', `Found ${accountsResponse.data.length} accounts`);
    
    console.log('\n✓ All API tests passed successfully!');
  } catch (error) {
    console.error('✗ API test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}

// Run the test
testAPI();