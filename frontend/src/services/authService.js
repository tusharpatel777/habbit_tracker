// // frontend/src/services/authService.js

// const API_AUTH_URL = 'http://localhost:5000/api/auth';

// // Register user
// export const registerUser = async (userData) => {
//   try {
//     const response = await fetch(`${API_AUTH_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || 'Failed to register');
//     }
//     return data; // Contains token and user info
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

// // Login user
// export const loginUser = async (userData) => {
//   try {
//     const response = await fetch(`${API_AUTH_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || 'Failed to login');
//     }
//     return data; // Contains token and user info
//   } catch (error) {
//     console.error('Error logging in user:', error);
//     throw error;
//   }
// };

// // Get current user details (requires token)
// export const getMe = async (token) => {
//   try {
//     const response = await fetch(`${API_AUTH_URL}/me`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || 'Failed to fetch user data');
//     }
//     return data.data; // Our backend sends { success: true, data: {...} }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     throw error;
//   }
// };
// frontend/src/services/authService.js

const API_AUTH_URL = 'http://localhost:5000/api/auth';

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_AUTH_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to register');
    }
    return data; // Contains token and user info
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to login');
    }
    return data; // Contains token and user info
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Get current user details (requires token)
export const getMe = async (token) => {
  try {
    const response = await fetch(`${API_AUTH_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch user data');
    }
    return data.data; // Our backend sends { success: true, data: {...} }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Update user details
export const updateUserDetails = async (userData, token) => { // <--- ENSURE THIS LINE IS PRESENT
  try {
    const response = await fetch(`${API_AUTH_URL}/updatedetails`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to update user details');
    }
    return data.data; // Our backend sends { success: true, data: {...} }
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error;
  }
};