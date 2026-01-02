import apiClient from '@/lib/api';
import { Product } from '@/types';

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await apiClient.get('/products');
    return response.data;
  },

  async getProduct(id: number): Promise<Product> {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  },

  async createProduct(formData: FormData): Promise<Product> {
    const response = await apiClient.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async updateProduct(id: number, formData: FormData): Promise<Product> {
    const response = await apiClient.put(`/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deleteProduct(id: number): Promise<void> {
    await apiClient.delete(`/products/${id}`);
  },
};
