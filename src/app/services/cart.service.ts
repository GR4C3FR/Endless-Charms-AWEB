import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  metalType?: string;
  stone?: string;
  chainLength?: string;
  finish?: string;
  width?: string;
  caratWeight?: string;
  ringSize?: string;
  uniqueKey?: string; // Unique identifier for cart items with different options
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  
  cart$ = this.cartSubject.asObservable();

  constructor(private notificationService: NotificationService) {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage() {
    const savedCart = localStorage.getItem('endless-charms-cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      
      // Regenerate uniqueKeys for items that don't have them
      this.cartItems = this.cartItems.map(item => {
        if (!item.uniqueKey) {
          item.uniqueKey = this.generateUniqueKey(item);
        }
        return item;
      });
      
      this.cartSubject.next(this.cartItems);
      this.saveCartToStorage(); // Save with updated uniqueKeys
    }
  }

  private saveCartToStorage() {
    localStorage.setItem('endless-charms-cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  private generateUniqueKey(item: Omit<CartItem, 'quantity' | 'uniqueKey'>): string {
    return `${item.id}_${item.metalType || ''}_${item.stone || ''}_${item.chainLength || ''}_${item.finish || ''}_${item.width || ''}_${item.caratWeight || ''}_${item.ringSize || ''}`;
  }

  addToCart(item: Omit<CartItem, 'quantity' | 'uniqueKey'>) {
    const uniqueKey = this.generateUniqueKey(item);
    
    // Find existing item with same unique key
    const existingItem = this.cartItems.find(i => i.uniqueKey === uniqueKey);
    
    if (existingItem) {
      existingItem.quantity++;
      this.notificationService.showNotification('Item quantity updated in bag!', 'success');
    } else {
      this.cartItems.push({ ...item, quantity: 1, uniqueKey });
      this.notificationService.showNotification('Item added to bag!', 'success');
    }
    
    this.saveCartToStorage();
  }

  removeFromCart(uniqueKey: string) {
    this.cartItems = this.cartItems.filter(item => item.uniqueKey !== uniqueKey);
    this.saveCartToStorage();
  }

  updateQuantity(uniqueKey: string, quantity: number) {
    const item = this.cartItems.find(i => i.uniqueKey === uniqueKey);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(uniqueKey);
      } else {
        item.quantity = quantity;
        this.saveCartToStorage();
      }
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartToStorage();
  }
}
