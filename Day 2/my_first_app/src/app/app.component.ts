import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'my_first_app';

  user = {
    name: '',
    email: '',
    role: ''
  };

  users: any[] = [];

  roles = ['Admin', 'Editor', 'Viewer'];

  editingIndex: number | null = null; // ✅ Tracks which user is being edited

  onSubmit() {
    if (this.user.name && this.user.email && this.user.role) {
      if (this.editingIndex === null) {
        this.users.push({ ...this.user }); // Add new user
      } else {
        this.users[this.editingIndex] = { ...this.user }; // Update existing
        this.editingIndex = null;
      }
      this.resetForm();
    }
  }

  editUser(index: number) {
    this.user = { ...this.users[index] };
    this.editingIndex = index;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    if (this.editingIndex === index) {
      this.resetForm();
      this.editingIndex = null;
    }
  }

  resetForm() {
    this.user = { name: '', email: '', role: '' };
    this.editingIndex = null;
  }
}
