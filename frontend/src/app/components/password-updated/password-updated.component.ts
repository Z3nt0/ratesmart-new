import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-password-updated',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './password-updated.component.html',
  styleUrls: ['./password-updated.component.scss'],
})
export class PasswordUpdatedComponent {}
