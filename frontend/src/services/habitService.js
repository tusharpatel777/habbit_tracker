
const API_BASE_URL = 'http://localhost:5000/api/habits';
const AI_API_URL = 'http://localhost:5000/api/ai';

const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});


export const getHabits = async (token) => {
  try {
    const response = await fetch(API_BASE_URL, {
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching habits:', error);
    throw error;
  }
};

export const createHabit = async (habitName, token) => {
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

export const completeHabit = async (id, token) => {
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

export const deleteHabit = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    return true; // No data expected for delete, just check success
  } catch (error) {
    console.error(`Error deleting habit ${id}:`, error);
    throw error;
  }
};

export const getHabitById = async (id, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      headers: getAuthHeaders(token),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching habit ${id}:`, error);
    throw error;
  }
};

export const updateHabit = async (id, habitData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(token),
      body: JSON.stringify(habitData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error updating habit ${id}:`, error);
    throw error;
  }
};

// --- AI Suggestion Operation ---
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
     
      throw new Error(errorData.error || `HTTP error! status: ${response.status} from AI endpoint.`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error getting AI habit suggestions:', error);
    throw error;
  }
};