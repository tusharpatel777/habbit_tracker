// // frontend/src/services/habitService.js

// const API_BASE_URL = 'http://localhost:5000/api/habits';
// const AI_API_URL = 'http://localhost:5000/api/ai';

// // --- Habit CRUD Operations ---

// // Get all habits
// export const getHabits = async () => {
//   try {
//     const response = await fetch(API_BASE_URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.data; // Our backend sends { success: true, data: [...] }
//   } catch (error) {
//     console.error('Error fetching habits:', error);
//     throw error;
//   }
// };

// // Create a new habit
// export const createHabit = async (habitName) => {
//   try {
//     const response = await fetch(API_BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: habitName }),
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.data; // Our backend sends { success: true, data: {...} }
//   } catch (error) {
//     console.error('Error creating habit:', error);
//     throw error;
//   }
// };

// // Mark a habit as completed
// export const completeHabit = async (id) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${id}/complete`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.data; // Our backend sends { success: true, data: {...} }
//   } catch (error) {
//     console.error(`Error completing habit ${id}:`, error);
//     throw error;
//   }
// };

// // Delete a habit
// export const deleteHabit = async (id) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//     }
//     // No data expected for delete, just check success
//     return true;
//   } catch (error) {
//     console.error(`Error deleting habit ${id}:`, error);
//     throw error;
//   }
// };

// // --- AI Suggestion Operation ---

// // Get habit suggestions from AI
// export const getAiHabitSuggestions = async (goal) => {
//   try {
//     const response = await fetch(`${AI_API_URL}/suggest-habits`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ goal }),
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.data; // Our backend sends { success: true, data: [...] }
//   } catch (error) {
//     console.error('Error getting AI habit suggestions:', error);
//     throw error;
//   }
// };
// frontend/src/services/habitService.js

// IMPORTANT: We need to pass the token to these functions now
// because the backend habit routes are protected.

const API_BASE_URL = 'http://localhost:5000/api/habits';
const AI_API_URL = 'http://localhost:5000/api/ai'; // AI routes are currently public

// Helper function to create headers with authorization
const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

// --- Habit CRUD Operations ---

// Get all habits
export const getHabits = async (token) => { // Token parameter added
  try {
    const response = await fetch(API_BASE_URL, {
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching habits:', error);
    throw error;
  }
};

// Create a new habit
export const createHabit = async (habitName, token) => { // Token parameter added
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: getAuthHeaders(token),
      body: JSON.stringify({ name: habitName }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error creating habit:', error);
    throw error;
  }
};

// Mark a habit as completed
export const completeHabit = async (id, token) => { // Token parameter added
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/complete`, {
      method: 'PATCH',
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error completing habit ${id}:`, error);
    throw error;
  }
};

// Delete a habit
export const deleteHabit = async (id, token) => { // Token parameter added
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error(`Error deleting habit ${id}:`, error);
    throw error;
  }
};

// --- AI Suggestion Operation ---
// AI suggestions are still public for now, no token needed.
export const getAiHabitSuggestions = async (goal) => {
  try {
    const response = await fetch(`${AI_API_URL}/suggest-habits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goal }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error getting AI habit suggestions:', error);
    throw error;
  }
};