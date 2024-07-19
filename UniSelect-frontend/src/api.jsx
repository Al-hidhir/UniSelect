import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
});

// User registration
export const registerUser = async (userData) => {
  return await api.post('/users/register', userData);
};

// User login
export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch universities
export const fetchUniversities = async (token) => {
  return await api.get('/universities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Fetch courses
export const fetchCourses = async (token) => {
  return await api.get('/courses', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Fetch users
export const fetchUsers = async (token) => {
  return await api.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add university
export const addUniversity = async (universityData, token) => {
  return await api.post('/universities', universityData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add course
export const addCourse = async (courseData, token) => {
  return await api.post('/courses', courseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete university
export const deleteUniversity = async (id, token) => {
  return await api.delete(`/universities/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete course
export const deleteCourse = async (id, token) => {
  return await api.delete(`/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete user
export const deleteUser = async (id, token) => {
  return await api.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default api;
