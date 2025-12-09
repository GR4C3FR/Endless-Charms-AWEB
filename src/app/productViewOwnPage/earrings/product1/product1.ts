import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-earring-product1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product1.html',
  styleUrls: ['./product1.css'],
})
export class EarringProduct1 {
  cartCount = 0;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  product = {
    id: '1',
    name: 'Classic Diamond Studs',
    price: 42000,
    image: '/Stud%20Earrings.png',
    src: '/stud-earrings',
    category: 'earrings',
    inStock: true,
    label: 'Classic Diamond Studs',
    description: 'Timeless round-cut diamond studs set in a classic four-prong setting. Perfect for everyday wear or special occasions.',
    metalTypes: ['18k Yellow Gold', '14k White Gold', '18k White Gold', 'Platinum'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Moissanite', 'Signity Stone'],
    stoneSizes: ['0.25ct', '0.5ct', '0.75ct', '1ct']
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
    this.notificationService.showNotification('Redirecting to checkout...');
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
