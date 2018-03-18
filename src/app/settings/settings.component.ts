import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  get username():string {
    return this.authService.getUsername();
  }
  newAccount: string;
  newPassword: any = {};
  loading = false;

  constructor(private authService:AuthService, private accountService:AccountService) {
  }

  ngOnInit() {
  }

  changeAccount() {
    this.loading = true;
    this.accountService.updateAccount({username: this.username, account: this.newAccount})
        .subscribe(
          _ => {
            this.loading = false;
          },
          error => {
            this.loading = false;
          });
  }

  changePassword() {
    this.loading = true;
    this.accountService.updateAccount({username: this.username, password: this.newPassword.password})
        .subscribe(
          _ => {
            this.loading = false;
          },
          error => {
            this.loading = false;
          });
  }
}
