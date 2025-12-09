import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-necklace',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './necklace.html',
  styleUrls: ['./necklace.css'],
})
export class Necklace {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  necklaceStyles = [
    { id: 1, name: '.30ct Tennis Necklace', price: 195000, image: '30ct-tennis-necklace.png', category: 'necklaces', inStock: true, label: '.30ct Tennis Necklace', src: '/' }
  ];

  addToCart(necklace: any) {
    this.cartService.addToCart({
      id: `necklace-${necklace.id}`,
      name: necklace.name,
      price: necklace.price,
      image: necklace.image
    });
  }

}
