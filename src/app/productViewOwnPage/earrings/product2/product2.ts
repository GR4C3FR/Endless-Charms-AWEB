import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earring-product2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product2.html',
  styleUrls: ['./product2.css'],
})
export class EarringProduct2 {
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
    id: '2',
    name: 'Cluster Set',
    price: 245000,
    image: '/Cluster%20Set.png',
    src: '/cluster-set',
    category: 'earrings',
    inStock: true,
    label: 'Cluster Set',
    description: 'A sparkling cluster set that creates the illusion of a larger center stone—great for elegant evenings and gifts.',
    metalTypes: ['14k Yellow Gold', '14k White Gold', '18k White Gold', 'Platinum'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Cubic Zirconia'],
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
