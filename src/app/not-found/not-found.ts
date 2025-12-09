import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class NotFound {
  constructor() {}
}
