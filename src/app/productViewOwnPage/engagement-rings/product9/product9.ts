import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product9',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product9.html',
  styleUrls: ['./product9.css'],
})
export class Product9 {
  product = {
    id: 9,
    name: '1ct Assher-Cut Solitaire Ring',
    price: 32000,
    image: '1ct-assher-cut-solitaire-ring.png',
    category: 'rings',
    inStock: true,
    label: '1ct Assher-Cut Solitaire Ring',
    description: 'A vintage-inspired assher-cut solitaire ring that showcases a square shape with step-cut facets.',
    metalTypes: ['18k Yellow Gold', '14k Yellow Gold', '14k White Gold', '18k White Gold'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Moissanite', 'Signity Stone'],
    caratSizes: ['1ct'],
    ringSizes: ['4', '5', '6', '7', '8', '9', '10', '11']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedStone: string = this.product.stoneTypes[0];
  selectedCarat: string = this.product.caratSizes[0];
  selectedRingSize: string = this.product.ringSizes[3];
  quantity: number = 1;

  addToCart() {
    console.log('Added to cart:', {
      product: this.product.name,
      metal: this.selectedMetal,
      stone: this.selectedStone,
      carat: this.selectedCarat,
      ringSize: this.selectedRingSize,
      quantity: this.quantity
    });
  }

  incrementCarat() {
    // Placeholder for carat size increment
  }

  decrementCarat() {
    // Placeholder for carat size decrement
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
