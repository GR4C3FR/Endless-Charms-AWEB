import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface RingStyle {
  name: string;
  image: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Hero carousel data
  currentSlide = 0;
  heroSlides = [
    {
      title: 'WELCOME TO ENDLESS CHARMS',
      subtitle: 'Where Every Piece Tells A Story',
      buttonText: 'Visit Our Collections'
    },
    {
      title: 'TIMELESS ELEGANCE',
      subtitle: 'Discover Your Perfect Ring',
      buttonText: 'Shop Now'
    },
    {
      title: 'CRAFTED WITH LOVE',
      subtitle: 'Each Piece Made Just For You',
      buttonText: 'Explore Collection'
    }
  ];

  // Top-Selling Products with @for directive
  topSellingProducts: Product[] = [
    { id: 1, name: '1ct Assher-Cut Solitaire Ring', price: 32000, image: '1ct-assher-cut-solitaire-ring.png', category: 'rings', inStock: true },
    { id: 2, name: '1ct Round-Cut Solitaire Ring', price: 32000, image: '1ct-round-cut-solitaire-ring.png', category: 'rings', inStock: true },
    { id: 3, name: '1ct Oval-Cut Solitaire Ring', price: 32000, image: '1ct-oval-cut-solitaire-ring.png', category: 'rings', inStock: true },
    { id: 4, name: '1ct Emerald-Cut Solitaire Ring', price: 32000, image: '1ct-emerald-cut-solitaire-ring.png', category: 'rings', inStock: true },
    { id: 5, name: 'Wedding Bands - Set C', price: 62000, image: 'wedding-bands-set-c.png', category: 'bands', inStock: true },
    { id: 6, name: 'Wedding Bands - Set B', price: 70000, image: 'wedding-bands-set-b.png', category: 'bands', inStock: true },
    { id: 7, name: 'Wedding Bands - Set F', price: 42000, image: 'wedding-bands-set-f.png', category: 'bands', inStock: true },
    { id: 8, name: 'Wedding Bands - Set H', price: 72000, image: 'wedding-bands-set-h.png', category: 'bands', inStock: true },
    { id: 9, name: '1ct Round Stud Earrings', price: 42000, image: '1ct-round-stud-earrings.png', category: 'earrings', inStock: true },
    { id: 10, name: 'Oval-Cut Green Emerald Earrings', price: 42000, image: 'oval-cut-green-emerald-earrings.png', category: 'earrings', inStock: true },
    { id: 11, name: '.30ct Tennis Bracelet', price: 149000, image: '30ct-tennis-bracelet.png', category: 'bracelets', inStock: true },
    { id: 12, name: '.30ct Tennis Necklace', price: 195000, image: '30ct-tennis-necklace.png', category: 'necklaces', inStock: true }
  ];

  // Ring styles for engagement section
  ringStyles: RingStyle[] = [
    { name: 'Cushion Cut', image: 'cushion-cut-solitaire.png', label: 'CUSHION CUT SOLITAIRE' },
    { name: 'Emerald Cut', image: 'emerald-cut-solitaire.png', label: 'EMERALD CUT SOLITAIRE' },
    { name: 'Oval Cut', image: 'oval-cut-solitaire.png', label: 'OVAL CUT SOLITAIRE' },
    { name: 'Princess Cut', image: 'princess-cut-solitaire.png', label: 'PRINCESS CUT SOLITAIRE' }
  ];

  // Features with @for directive
  features: Feature[] = [
    { icon: 'hammer.png', title: 'Premium Craftsmanship', description: '' },
    { icon: 'diamond.png', title: 'Certified Metals & Stones', description: '' },
    { icon: 'pencil.png', title: 'Custom Design Options', description: '' },
    { icon: 'cash.png', title: 'Trustworthy & Transparent Pricing', description: '' },
    { icon: 'lock.png', title: 'Secure Transactions', description: '' },
    { icon: 'building.png', title: 'Local Showroom for Viewing', description: '' }
  ];

  // Customer reviews data
  reviewImages = [
    'image9.png',
    'image10.png',
    'image11.png',
    'image12.png',
    'image13.png'
  ];

  currentReviewIndex = 0;
  showAllProducts = false;

  // Methods for data binding
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  toggleProducts(): void {
    this.showAllProducts = !this.showAllProducts;
  }

  getDisplayedProducts(): Product[] {
    return this.showAllProducts ? this.topSellingProducts : this.topSellingProducts.slice(0, 8);
  }

  addToCart(product: Product): void {
    if (product.inStock) {
      console.log('Added to cart:', product);
      // Implement cart logic here
    }
  }

  addToWishlist(product: Product): void {
    console.log('Added to wishlist:', product);
    // Implement wishlist logic here
  }

  nextReview(): void {
    // Move last image to first position
    const lastImage = this.reviewImages.pop()!;
    this.reviewImages.unshift(lastImage);
  }

  prevReview(): void {
    // Move first image to last position
    const firstImage = this.reviewImages.shift()!;
    this.reviewImages.push(firstImage);
  }
}
