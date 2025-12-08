import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-earrings',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './earrings.html',
  styleUrls: ['./earrings.css'],
})
export class Earrings {

  earringStyles = [
    { id: 1, name: 'Stud Earrings', price: 3200, image: 'stud-earrings.png', category: 'earrings', inStock: true, label: 'Stud Earrings', src: '/' },
    { id: 2, name: 'Hoop Earrings', price: 4200, image: 'hoop-earrings.png', category: 'earrings', inStock: true, label: 'Hoop Earrings', src: '/' },
    { id: 3, name: 'Drop Earrings', price: 7400, image: 'drop-earrings.png', category: 'earrings', inStock: true, label: 'Drop Earrings', src: '/' },
    { id: 4, name: 'Chandelier Earrings', price: 11200, image: 'chandelier-earrings.png', category: 'earrings', inStock: true, label: 'Chandelier Earrings', src: '/' },
    { id: 5, name: 'Huggie Earrings', price: 2900, image: 'huggie-earrings.png', category: 'earrings', inStock: true, label: 'Huggie Earrings', src: '/' },
    { id: 6, name: 'Pearl Studs', price: 5200, image: 'pearl-studs.png', category: 'earrings', inStock: true, label: 'Pearl Studs', src: '/' },
    { id: 7, name: 'Threader Earrings', price: 4700, image: 'threader-earrings.png', category: 'earrings', inStock: true, label: 'Threader Earrings', src: '/' },
    { id: 8, name: 'Cluster Earrings', price: 8600, image: 'cluster-earrings.png', category: 'earrings', inStock: true, label: 'Cluster Earrings', src: '/' },
    { id: 9, name: 'Leverback Earrings', price: 6300, image: 'leverback-earrings.png', category: 'earrings', inStock: true, label: 'Leverback Earrings', src: '/' }
  ];

}
