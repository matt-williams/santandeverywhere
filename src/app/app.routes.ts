import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './auth-guard.service';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService] 
  },
  { path: '**', redirectTo: 'login' }
];
