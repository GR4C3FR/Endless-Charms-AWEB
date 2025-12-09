import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartItems: CartItem[] = [];
  showRemoveModal = false;
  itemToRemove: string | null = null;
  
  constructor(public cartService: CartService) {}
  
  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }
  
  getSubtotal(): number {
    return this.cartService.getCartTotal();
  }
  
  updateQuantity(uniqueKey: string, newQuantity: number) {
    this.cartService.updateQuantity(uniqueKey, newQuantity);
  }
  
  increaseQuantity(uniqueKey: string) {
    const item = this.cartItems.find(i => i.uniqueKey === uniqueKey);
    if (item) {
      this.updateQuantity(uniqueKey, item.quantity + 1);
    }
  }
  
  decreaseQuantity(uniqueKey: string) {
    const item = this.cartItems.find(i => i.uniqueKey === uniqueKey);
    if (item) {
      if (item.quantity === 1) {
        this.confirmRemove(uniqueKey);
      } else {
        this.updateQuantity(uniqueKey, item.quantity - 1);
      }
    }
  }
  
  confirmRemove(uniqueKey: string) {
    this.itemToRemove = uniqueKey;
    this.showRemoveModal = true;
  }
  
  confirmRemoveAction() {
    if (this.itemToRemove) {
      this.cartService.removeFromCart(this.itemToRemove);
      this.itemToRemove = null;
    }
    this.showRemoveModal = false;
  }
  
  cancelRemove() {
    this.itemToRemove = null;
    this.showRemoveModal = false;
  }
  
  removeItem(uniqueKey: string) {
    this.cartService.removeFromCart(uniqueKey);
  }
}
