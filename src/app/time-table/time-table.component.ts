import { Component } from '@angular/core';
import {TimeTableService} from '../time-table-service.service';
import {Router} from '@angular/router';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  imports: [
    NavBarComponent
  ],
  styleUrl: './time-table.component.scss'
})
export class TimeTableComponent {
  // constructor(private timeTable : TimeTableServiceService,
  //             private router : Router
  // ){
  // }
  //
  // // Sample data for the timetable
  // timetableData = [
  //   { day: 'Monday', subject: 'Math', time: '9:00 AM - 10:00 AM' },
  //   { day: 'Monday', subject: 'Science', time: '10:00 AM - 11:00 AM' },
  //   { day: 'Tuesday', subject: 'History', time: '9:00 AM - 10:00 AM' },
  //   { day: 'Tuesday', subject: 'Physical Education', time: '10:00 AM - 11:00 AM' },
  //   // Add more data as needed
  // ];
  //
  // getTimetable(){
  //   // this.timeTable.getTimetable().subscribe({
  //   //   next : (res)=>{
  //   //     console.log(res)
  //   //   },
  //   //   error : (err)=>{
  //   //     console.log(err)
  //   //   }
  //   // })
  // }

}
