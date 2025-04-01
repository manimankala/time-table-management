import {RouterOutlet} from '@angular/router';
import {TimeTableComponent} from './time-table/time-table.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'time-table-app';
}

@Component({
  selector: 'app-login',
  templateUrl: './login-page/login-page.component.html',
  styleUrls: ['./login-page/login-page.component.scss'],
  standalone: true
})
export class LoginComponent { }

@Component({
  selector: 'app-register',
  templateUrl: './register-page/register-page.component.html',
  styleUrls: ['./register-page/register-page.component.scss'],
  standalone: true
})
export class RegisterComponent {
}

@Component({
  selector: 'app-view-timetable',
  templateUrl: './time-table/time-table.component.html',
  styleUrls: ['./time-table/time-table.component.scss'],
  standalone: true
})
export class ViewTimetableComponent {
}
