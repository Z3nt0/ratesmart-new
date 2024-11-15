import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink
import { InputTextModule } from 'primeng/inputtext'; // Import InputTextModule for pInputText
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { ButtonModule } from 'primeng/button'; // Import ButtonModule for pButton

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, InputTextModule, ButtonModule, FormsModule], // Add ButtonModule and InputTextModule here
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email: string = '';
}
