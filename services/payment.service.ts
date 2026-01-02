import apiClient from '@/lib/api';
import { Payment } from '@/types';

export const paymentService = {
  async createPaymentIntent(): Promise<Payment> {
    const response = await apiClient.post('/payments');
    return response.data;
  },
};
