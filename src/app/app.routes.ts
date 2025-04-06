import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {TimeTableComponent} from './time-table/time-table.component';
import {RegistrationComponent} from './register-page/register-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {NgModule} from '@angular/core';
import {NotificationComponent} from './notification/notification.component';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path:'time-table',
    component:TimeTableComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'profile',
    component:ProfilePageComponent
  },

  { path: 'notification', component: NotificationComponent },
  // other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
