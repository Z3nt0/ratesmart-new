import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For two-way data binding
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-code-verification',
  standalone: true,
  imports: [RouterLink, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss'],
})
export class CodeVerificationComponent {
  code: string[] = ['', '', '', '', '', ''];
}
