import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For two-way data binding
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent {
  newPassword: string = '';
  verifyPassword: string = '';
}
