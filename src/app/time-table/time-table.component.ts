import { Component } from '@angular/core';
import {TimeTableService} from '../time-table-service.service';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-time-table',
  standalone: true,
  templateUrl: './time-table.component.html',
  imports: [
    NavBarComponent,CommonModule
  ],
  styleUrl: './time-table.component.scss'
})
export class TimeTableComponent {
  constructor(private timeTable : TimeTableService,
              private router : Router
  ){
  }

  ngOnInit()
  {
    this.getTimetableDetails();
  }

  mondayArray:any=[];
  data:any=[];
  getTimetableDetails()
  {
    let payload = {
      "branch": "CSB",
      "className": "B_TECH",
      "section": "A",
      "semester": "S8"
    }
    this.timeTable.getTimetable(payload).subscribe((res:any)=>{
      console.log(res);
      this.data=res.data[0];
      res.data[0].elemList.forEach((data:any) => {
        if(data.day==="MONDAY")
        {
          this.mondayArray.push(data);
        }
      });
      console.log(this.mondayArray);
    })
  }
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
