import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  showSuccessMessage = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    comment: ''
  };

  onSubmit() {
    // Show success message
    this.showSuccessMessage = true;

    // Clear form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      comment: ''
    };

    // Hide message after 5 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}
