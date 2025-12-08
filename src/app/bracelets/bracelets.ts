import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-bracelets',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './bracelets.html',
  styleUrls: ['./bracelets.css'],
})
export class Bracelets {

  braceletStyles = [
    { id: 1, name: 'Chain Bracelet', price: 4200, image: 'chain-bracelet.png', category: 'bracelets', inStock: true, label: 'Chain Bracelet', src: '/' },
    { id: 2, name: 'Bangle Set', price: 7800, image: 'bangle-set.png', category: 'bracelets', inStock: true, label: 'Bangle Set', src: '/' },
    { id: 3, name: 'Charm Bracelet', price: 5400, image: 'charm-bracelet.png', category: 'bracelets', inStock: true, label: 'Charm Bracelet', src: '/' },
    { id: 4, name: 'Cuff Bracelet', price: 11200, image: 'cuff-bracelet.png', category: 'bracelets', inStock: true, label: 'Cuff Bracelet', src: '/' },
    { id: 5, name: 'Tennis Bracelet', price: 19800, image: 'tennis-bracelet.png', category: 'bracelets', inStock: true, label: 'Tennis Bracelet', src: '/' },
    { id: 6, name: 'Beaded Bracelet', price: 3200, image: 'beaded-bracelet.png', category: 'bracelets', inStock: true, label: 'Beaded Bracelet', src: '/' },
    { id: 7, name: 'ID Bracelet', price: 6600, image: 'id-bracelet.png', category: 'bracelets', inStock: true, label: 'ID Bracelet', src: '/' },
    { id: 8, name: 'Adjustable Slider', price: 2900, image: 'slider-bracelet.png', category: 'bracelets', inStock: true, label: 'Adjustable Slider', src: '/' },
    { id: 9, name: 'Pearl Bracelet', price: 12500, image: 'pearl-bracelet.png', category: 'bracelets', inStock: true, label: 'Pearl Bracelet', src: '/' }
  ];

}
