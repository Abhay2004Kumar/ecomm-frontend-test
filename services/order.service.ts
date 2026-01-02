import apiClient from '@/lib/api';
import { Order } from '@/types';

export const orderService = {
  async createOrder(): Promise<Order> {
    const response = await apiClient.post('/orders');
    return response.data;
  },

  async getOrders(): Promise<Order[]> {
    const response = await apiClient.get('/orders');
    return response.data;
  },
};
