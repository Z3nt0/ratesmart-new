import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router'; // Import RouterLink for navigation

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}