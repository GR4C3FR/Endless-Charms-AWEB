import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product2.html',
  styleUrls: ['./product2.css'],
})
export class WeddingBandProduct2 {
  product = {
    id: 2,
    name: 'Titanium Satin Band',
    price: 950,
    image: 'yellow-gold-comfort-fit-band.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Titanium Satin Band',
    src: '/titanium-satin-band',
    description: 'Durable titanium band with a smooth satin finish, ideal for active lifestyles.',
    metalTypes: ['18K Yellow Gold', '14K White Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Matte', 'Polished', 'Hammered', 'Satin'],
    widths: ['4mm', '5mm', '6mm'],
    ringSizes: ['5', '6', '7', '8', '9', '10', '11', '12', '13']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedFinish: string = this.product.finishTypes[0];
  selectedWidth: string = this.product.widths[0];
  selectedRingSize: string = this.product.ringSizes[0];
  quantity: number = 1;

  addToCart() {
    console.log('Added to cart:', {
      product: this.product.name,
      metal: this.selectedMetal,
      finish: this.selectedFinish,
      width: this.selectedWidth,
      ringSize: this.selectedRingSize,
      quantity: this.quantity
    });
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
}
