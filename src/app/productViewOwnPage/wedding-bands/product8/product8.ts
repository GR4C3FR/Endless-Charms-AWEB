import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product8',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product8.html',
  styleUrls: ['./product8.css'],
})
export class WeddingBandProduct8 {
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
    id: '8',
    name: 'Wedding Bands - Set H',
    price: 42000,
    image: 'Wedding Bands - Set H.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Sculpted Edge Band',
    src: '/sculpted-edge-band',
    description: 'Distinctive sculpted edge design in platinum for a bold, elegant statement.',
    metalTypes: ['Platinum', '18K Yellow Gold', '14K White Gold', 'Titanium'],
    finishTypes: ['Polished', 'Satin', 'Matte', 'Hammered'],
    widths: ['7mm', '6mm', '5mm'],
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
      openImagePopup() {
        this.showImagePopup = true;
      }
      closeImagePopup() {
        this.showImagePopup = false;
      }
    }
