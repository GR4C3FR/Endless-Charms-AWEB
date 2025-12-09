import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bracelets',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './bracelets.html',
  styleUrls: ['./bracelets.css'],
})
export class Bracelets {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  braceletStyles = [
    { id: 1, name: '.30ct Tennis Bracelet', price: 149000, image: '30ct-tennis-bracelet.png', category: 'bracelets', inStock: true, label: '.30ct Tennis Bracelet', src: '/' }
  ];

  addToCart(bracelet: any) {
    this.cartService.addToCart({
      id: `bracelet-${bracelet.id}`,
      name: bracelet.name,
      price: bracelet.price,
      image: bracelet.image
    });
  }

}
