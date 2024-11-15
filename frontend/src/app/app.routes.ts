import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { PasswordUpdatedComponent } from './components/password-updated/password-updated.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent }, // Add this route
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Add Forgot Password route here
  { path: 'code-verification', component: CodeVerificationComponent }, // Add Code Verification route here
  { path: 'new-password', component: NewPasswordComponent},
  { path: 'password-updated', component: PasswordUpdatedComponent }, // Add Password Updated route here
  { path: '**', redirectTo: '' }, // Fallback to the landing page
];
