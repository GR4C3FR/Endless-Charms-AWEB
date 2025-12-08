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
    { id: 1, name: 'Stud Earrings', price: 42000, image: 'Stud Earrings.png', category: 'earrings', inStock: true, label: 'Stud Earrings', src: '/' },
    { id: 2, name: 'Cluster Set', price: 245000, image: 'Cluster Set.png', category: 'earrings', inStock: true, label: 'Cluster Set', src: '/' },
    { id: 3, name: 'Oval - Cut Green Emerald Earrings', price: 42000, image: 'Oval - Cut Green Emerald Earrings.png', category: 'earrings', inStock: true, label: 'Oval - Cut Green Emerald Earrings', src: '/' }
  ];

}
