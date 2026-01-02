import apiClient from '@/lib/api';
import { Cart, CartItem } from '@/types';

export const cartService = {
  async getCart(userId: number): Promise<Cart> {
    const response = await apiClient.get(`/users/${userId}/cart`);
    return response.data;
  },

  async addToCart(productId: number, quantity: number = 1): Promise<CartItem> {
    const response = await apiClient.post('/cart_items', {
      product_id: productId,
      quantity,
    });
    return response.data;
  },

  async updateCartItem(id: number, quantity: number): Promise<CartItem> {
    const response = await apiClient.put(`/cart_items/${id}`, {
      quantity,
    });
    return response.data;
  },

  async removeFromCart(id: number): Promise<void> {
    await apiClient.delete(`/cart_items/${id}`);
  },
};
