import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard';
import { LoginPageComponent } from './login-page/login-page.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationComponent } from './register-page/register-page.component';
import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Fixed redirectTo
  { path: 'login', component: LoginPageComponent }, // Fixed path
  { path: 'time-table', component: TimeTableComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
