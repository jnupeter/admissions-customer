import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import homeModule, { Home } from './home';
import { Contact } from './contact/contact';
import { LoggedInGuard } from './service/';
import { LoginContainer, LoggedinContainer, SignupContainer } from './container/';
import { LoginForm, ForgetPasswordForm } from './component/';

const ROUTER_CONFIG = [
  { path: 'login', component: LoginContainer, children:[
     { path: '', component: LoginForm},
     { path: 'forget', component: ForgetPasswordForm},
     { path: 'signin', redirectTo: ''}
     ] },
  { path: 'signup', component: SignupContainer, pathMatch: 'full'},
  { path: 'myapp', component: LoggedinContainer, pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  providers: [
    LoggedInGuard
  ],
  declarations: [
    // Components / Directives/ Pipes
    Home, 
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    homeModule,
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG
}

