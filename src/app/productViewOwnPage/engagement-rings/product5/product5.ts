import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product5',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product5.html',
  styleUrls: ['./product5.css'],
})
export class Product5 {
  product = {
    id: 5,
    name: '1ct Oval-Cut Solitaire Ring',
    price: 32000,
    image: '1ct-oval-cut-solitaire-ring.png',
    category: 'rings',
    inStock: true,
    label: '1ct Oval-Cut Solitaire Ring',
    description: 'An elongated oval-cut solitaire ring that creates an elegant and flattering appearance on the finger.',
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
