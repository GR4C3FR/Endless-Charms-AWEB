import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wedding-bands',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './wedding-bands.html',
  styleUrls: ['./wedding-bands.css'],
})
export class WeddingBands {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

    weddingBandsStyles = [
    { id: 1, name: 'Wedding Bands - Set A', price: 110000, image: 'Wedding Bands - Set A.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set A', src: '/wedding-bands-set-a' },
    { id: 2, name: 'Wedding Bands - Set B', price: 70000, image: 'Wedding Bands - Set B.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set B', src: '/wedding-bands-set-b' },
    { id: 3, name: 'Wedding Bands - Set C', price: 62000, image: 'Wedding Bands - Set C.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set C', src: '/wedding-bands-set-c' },
    { id: 4, name: 'Wedding Bands - Set D', price: 65000, image: 'Wedding Bands - Set D.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set D', src: '/wedding-bands-set-d' },
    { id: 5, name: 'Wedding Bands - Set E', price: 95000, image: 'Wedding Bands - Set E.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set E', src: '/wedding-bands-set-e' },
    { id: 6, name: 'Wedding Bands - Set F', price: 42000, image: 'Wedding Bands - Set F.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set F', src: '/wedding-bands-set-f' },
    { id: 7, name: 'Wedding Bands - Set G', price: 95000, image: 'Wedding Bands - Set G.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set G', src: '/wedding-bands-set-g' },
    { id: 8, name: 'Wedding Bands - Set H', price: 42000, image: 'Wedding Bands - Set H.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set H', src: '/wedding-bands-set-h' },
    { id: 9, name: 'Wedding Bands - Set I', price: 72000, image: 'Wedding Bands - Set I.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set I', src: '/wedding-bands-set-i' }
  ];

  addToCart(band: any) {
    this.cartService.addToCart({
      id: `band-${band.id}`,
      name: band.name,
      price: band.price,
      image: band.image
    });
  }

}
