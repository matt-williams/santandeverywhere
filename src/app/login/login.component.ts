import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { Account } from '../account';
import { AccountService } from '../account.service';
 
@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
  }

  login() {
    this.loading = true;
    localStorage.setItem('username', this.model.username);
    this.router.navigateByUrl(this.returnUrl);
    // this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //     .subscribe(
    //         data => {
    //             // login successful so redirect to return url
    //             this.router.navigateByUrl(this.returnUrl);
    //         },
    //         error => {
    //             // login failed so display error
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
  }

  signup() {
    const username = this.model.username;
    this.loading = true;
    this.accountService.createAccount(new Account(this.model.username, this.model.password))
        .subscribe(
            _ => {
                this.loading = false;
                localStorage.setItem('username', username);
                this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.loading = false;
            });

    // this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //     .subscribe(
    //         data => {
    //             // login successful so redirect to return url
    //             this.router.navigateByUrl(this.returnUrl);
    //         },
    //         error => {
    //             // login failed so display error
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
  }
}
