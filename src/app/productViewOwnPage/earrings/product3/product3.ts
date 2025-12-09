import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earring-product3',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product3.html',
  styleUrls: ['./product3.css'],
})
export class EarringProduct3 {
  cartCount = 0;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  product = {
    id: '3',
    name: 'Oval - Cut Green Emerald Earrings',
    price: 42000,
    image: '/Oval%20-%20Cut%20Green%20Emerald%20Earrings.png',
    src: '/oval-cut-green-emerald-earrings',
    category: 'earrings',
    inStock: true,
    label: 'Oval Cut Emeralds',
    description: 'Stunning oval-cut green emeralds set in elegant prong settings—perfect for adding a pop of color.',
    metalTypes: ['14k Yellow Gold', '14k White Gold', '18k White Gold', 'Platinum'],
    stoneTypes: ['Natural Emerald', 'Lab-Grown Emerald', 'Synthetic Emerald'],
    stoneSizes: ['0.3ct', '0.5ct', '0.75ct', '1ct']
  };
  selectedMetal: string = this.product.metalTypes[0];
  selectedStone: string = this.product.stoneTypes[0];
  selectedStoneSize: string = this.product.stoneSizes[1];
  quantity: number = 1;
  showImagePopup: boolean = false;

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      stone: this.selectedStone,
      caratWeight: this.selectedStoneSize
    });
    
    this.notificationService.showNotification(`${this.product.name} added to bag!`);
  }

  buyNow() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      stone: this.selectedStone,
      caratWeight: this.selectedStoneSize
    });
    this.router.navigate(['/bag']);
  }

  incrementStoneSize() {
    const currentIndex = this.product.stoneSizes.indexOf(this.selectedStoneSize);
    if (currentIndex < this.product.stoneSizes.length - 1) {
      this.selectedStoneSize = this.product.stoneSizes[currentIndex + 1];
    }
  }

  decrementStoneSize() {
    const currentIndex = this.product.stoneSizes.indexOf(this.selectedStoneSize);
    if (currentIndex > 0) {
      this.selectedStoneSize = this.product.stoneSizes[currentIndex - 1];
    }
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
