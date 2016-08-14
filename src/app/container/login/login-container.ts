import { Component } from '@angular/core';
import { LoginForm, ForgetPasswordForm } from '../../component/';
import { RouterConfig } from '@angular/router';

@Component({
    directives: [LoginForm, ForgetPasswordForm]
})
export class LoginContainer {
    loginMode: boolean = true;

    exitLoginMode() {
        this.loginMode = false;
    }

}