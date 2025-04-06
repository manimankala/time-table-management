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
