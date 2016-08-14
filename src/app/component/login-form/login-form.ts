import { Component } from '@angular/core';

@Component({
    selector: 'login-form',
    template: `
        <div class="card-panel hoverable">

        <form>
           <input type="email" placeholder="Email"/>
           <button type=submit>login</button>
        </form>
        </div>
    `
})
export class LoginForm {

}