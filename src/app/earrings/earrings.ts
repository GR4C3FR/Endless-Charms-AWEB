import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-earrings',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './earrings.html',
  styleUrls: ['./earrings.css'],
})
export class Earrings {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  earringStyles = [
    { id: 1, name: 'Stud Earrings', price: 42000, image: 'Stud Earrings.png', category: 'earrings', inStock: true, label: 'Stud Earrings', src: '/' },
    { id: 2, name: 'Cluster Set', price: 245000, image: 'Cluster Set.png', category: 'earrings', inStock: true, label: 'Cluster Set', src: '/' },
    { id: 3, name: 'Oval - Cut Green Emerald Earrings', price: 42000, image: 'Oval - Cut Green Emerald Earrings.png', category: 'earrings', inStock: true, label: 'Oval - Cut Green Emerald Earrings', src: '/' }
  ];

  addToCart(earring: any) {
    this.cartService.addToCart({
      id: `earring-${earring.id}`,
      name: earring.name,
      price: earring.price,
      image: earring.image
    });
  }

}
