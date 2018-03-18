import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { ROUTES } from './app.routes';

import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './jwt.interceptor';

import { AppComponent } from './app.component';
import { DevicesService } from './devices.service';
import { AccountService } from './account.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { DevicesComponent } from './devices/devices.component';
import { BankService } from './bank.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SettingsComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    //RouterModule.forRoot(ROUTES, { enableTracing: true })
    RouterModule.forRoot(ROUTES),
    JwtModule.forRoot({
      config: {
        tokenGetter: function() {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [
    DevicesService,
    AccountService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
