import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    name: '',
    email: '',
    role: ''
  };

  submitted = false;

  roles = ['Admin', 'Editor', 'Viewer'];

  onSubmit() {
    this.submitted = true;
  }
}
