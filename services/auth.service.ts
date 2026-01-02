import apiClient from '@/lib/api';
import { User } from '@/types';

export const authService = {
  async register(name: string, email: string, password: string, passwordConfirmation: string) {
    const response = await apiClient.post('/users', {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    });
    return response.data;
  },

  async login(email: string, password: string) {
    const response = await apiClient.post('/sessions', {
      email,
      password,
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  },
};
