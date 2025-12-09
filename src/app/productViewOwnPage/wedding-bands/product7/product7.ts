import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product7',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product7.html',
  styleUrls: ['./product7.css'],
})
export class WeddingBandProduct7 {
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
    id: '7',
    name: 'Wedding Bands - Set G',
    price: 95000,
    image: 'Wedding Bands - Set G.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Matte White Gold Band',
    src: '/matte-white-gold-band',
    description: 'Modern matte finish on 14K white gold for a subtle, contemporary style.',
    metalTypes: ['14K White Gold', '18K Yellow Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Matte', 'Polished', 'Satin', 'Hammered'],
    widths: ['6mm', '5mm', '4mm'],
    ringSizes: ['8', '9', '10', '11', '12', '13', '14', '15']
  };

    selectedMetal: string = this.product.metalTypes[0];
    selectedFinish: string = this.product.finishTypes[0];
    selectedWidth: string = this.product.widths[0];
    selectedRingSize: string = this.product.ringSizes[0];
    quantity: number = 1;
    showImagePopup: boolean = false;

    addToCart() {
      this.cartService.addToCart({
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        metalType: this.selectedMetal,
        finish: this.selectedFinish,
        width: this.selectedWidth,
        ringSize: this.selectedRingSize
      });
      this.notificationService.showNotification(`${this.product.name} added to bag!`);
    }

    incrementRingSize() {
      const currentIndex = this.product.ringSizes.indexOf(this.selectedRingSize);
      if (currentIndex < this.product.ringSizes.length - 1) {
        this.selectedRingSize = this.product.ringSizes[currentIndex + 1];
      }
    }

      decrementRingSize() {
        const currentIndex = this.product.ringSizes.indexOf(this.selectedRingSize);
        if (currentIndex > 0) {
          this.selectedRingSize = this.product.ringSizes[currentIndex - 1];
        }
      }
      openImagePopup() {
        this.showImagePopup = true;
      }
      closeImagePopup() {
        this.showImagePopup = false;
      }
        buyNow() {
          this.cartService.addToCart({
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            image: this.product.image,
            metalType: this.selectedMetal,
            finish: this.selectedFinish,
            width: this.selectedWidth,
            ringSize: this.selectedRingSize
          });
          this.router.navigate(['/bag']);
        }
    }
