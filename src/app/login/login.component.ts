import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../alert.service';
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
        private accountService: AccountService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/main';
    }
 
    login() {
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
