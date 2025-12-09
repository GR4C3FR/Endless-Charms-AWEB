import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }
}
