import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {TimeTableComponent} from './app/time-table/time-table.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
