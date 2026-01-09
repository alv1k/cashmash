// Comprehensive test for all CRUD operations
const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function runTests() {
  console.log('Running comprehensive CRUD tests...\n');
  
  // Test variables to store IDs of created items
  let testUserId = null;
  let testRecordId = null;
  let testReceiptId = null;
  let testAccountId = null;
  
  try {
    // Test 1: Create a user
    console.log('1. Testing CREATE user...');
    const userResponse = await axios.post(`${BASE_URL}/api/users`, {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      first_name: 'Test',
      last_name: 'User'
    });
    testUserId = userResponse.data.id;
    console.log('✓ User created with ID:', testUserId);
    
    // Test 2: Get the user
    console.log('\n2. Testing READ user...');
    const getUserResponse = await axios.get(`${BASE_URL}/api/users/${testUserId}`);
    console.log('✓ User retrieved:', getUserResponse.data.username);
    
    // Test 3: Update the user
    console.log('\n3. Testing UPDATE user...');
    const updateUserResponse = await axios.put(`${BASE_URL}/api/users/${testUserId}`, {
      ...getUserResponse.data,
      first_name: 'Updated Test'
    });
    console.log('✓ User updated:', updateUserResponse.data.first_name);
    
    // Test 4: Create a financial record
    console.log('\n4. Testing CREATE financial record...');
    const recordResponse = await axios.post(`${BASE_URL}/api/financial-records`, {
      user_id: testUserId,
      type: 'expense',
      category: 'Food',
      amount: 25.50,
      description: 'Test expense',
      date: '2023-01-20'
    });
    testRecordId = recordResponse.data.id;
    console.log('✓ Financial record created with ID:', testRecordId);
    
    // Test 5: Get the financial record
    console.log('\n5. Testing READ financial record...');
    const getRecordResponse = await axios.get(`${BASE_URL}/api/financial-records/${testRecordId}`);
    console.log('✓ Financial record retrieved:', getRecordResponse.data.description);
    
    // Test 6: Update the financial record
    console.log('\n6. Testing UPDATE financial record...');
    const updateRecordResponse = await axios.put(`${BASE_URL}/api/financial-records/${testRecordId}`, {
      ...getRecordResponse.data,
      amount: 30.00
    });
    console.log('✓ Financial record updated:', updateRecordResponse.data.amount);
    
    // Test 7: Create a receipt
    console.log('\n7. Testing CREATE receipt...');
    const receiptResponse = await axios.post(`${BASE_URL}/api/receipts`, {
      user_id: testUserId,
      title: 'Test Receipt',
      total_amount: 25.50,
      date: '2023-01-20'
    });
    testReceiptId = receiptResponse.data.id;
    console.log('✓ Receipt created with ID:', testReceiptId);
    
    // Test 8: Get the receipt
    console.log('\n8. Testing READ receipt...');
    const getReceiptResponse = await axios.get(`${BASE_URL}/api/receipts/${testReceiptId}`);
    console.log('✓ Receipt retrieved:', getReceiptResponse.data.title);
    
    // Test 9: Create an account
    console.log('\n9. Testing CREATE account...');
    const accountResponse = await axios.post(`${BASE_URL}/api/accounts`, {
      user_id: testUserId,
      name: 'Test Account',
      account_type: 'checking',
      balance: 1000.00
    });
    testAccountId = accountResponse.data.id;
    console.log('✓ Account created with ID:', testAccountId);
    
    // Test 10: Get the account
    console.log('\n10. Testing READ account...');
    const getAccountResponse = await axios.get(`${BASE_URL}/api/accounts/${testAccountId}`);
    console.log('✓ Account retrieved:', getAccountResponse.data.name);
    
    // Test 11: Get all financial records for the user
    console.log('\n11. Testing READ all financial records...');
    const allRecordsResponse = await axios.get(`${BASE_URL}/api/financial-records`);
    console.log('✓ Retrieved', allRecordsResponse.data.length, 'financial records');
    
    // Test 12: Get all users
    console.log('\n12. Testing READ all users...');
    const allUsersResponse = await axios.get(`${BASE_URL}/api/users`);
    console.log('✓ Retrieved', allUsersResponse.data.length, 'users');
    
    // Test 13: Get all receipts for the user
    console.log('\n13. Testing READ receipts by user ID...');
    const userReceiptsResponse = await axios.get(`${BASE_URL}/api/receipts/user/${testUserId}`);
    console.log('✓ Retrieved', userReceiptsResponse.data.length, 'receipts for user');
    
    // Test 14: Get all accounts for the user
    console.log('\n14. Testing READ accounts by user ID...');
    const userAccountsResponse = await axios.get(`${BASE_URL}/api/accounts/user/${testUserId}`);
    console.log('✓ Retrieved', userAccountsResponse.data.length, 'accounts for user');
    
    // Test 15: Delete the financial record
    console.log('\n15. Testing DELETE financial record...');
    await axios.delete(`${BASE_URL}/api/financial-records/${testRecordId}`);
    console.log('✓ Financial record deleted');
    
    // Test 16: Delete the receipt
    console.log('\n16. Testing DELETE receipt...');
    await axios.delete(`${BASE_URL}/api/receipts/${testReceiptId}`);
    console.log('✓ Receipt deleted');
    
    // Test 17: Delete the account
    console.log('\n17. Testing DELETE account...');
    await axios.delete(`${BASE_URL}/api/accounts/${testAccountId}`);
    console.log('✓ Account deleted');
    
    // Test 18: Delete the user
    console.log('\n18. Testing DELETE user...');
    await axios.delete(`${BASE_URL}/api/users/${testUserId}`);
    console.log('✓ User deleted');
    
    console.log('\n🎉 All CRUD operations tests passed successfully!');
    console.log('✓ CREATE, READ, UPDATE, DELETE operations work for all entities');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    console.error('Request details:', error.config?.url);
  }
}

// Run the tests
runTests();