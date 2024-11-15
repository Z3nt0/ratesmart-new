import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-log-in',
  standalone: true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  imports: [FormsModule, InputTextModule, ButtonModule, RouterLink],
})
export class LogInComponent {
  username: string = '';
  password: string = '';
}
