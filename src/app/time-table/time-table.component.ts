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
  Object = Object;
  ngOnInit()
  {
    this.getTimetableDetails();
  }

  mondayArray:any=[];
  data:any=[];
  index = 0
  getTimetableDetails()
  {
    this.timeTable.getTimeTableData().subscribe((res:any)=>{
      this.data=res.data[0];
      console.log(this.data)
      for(let  ele of Object.keys(this.data.elemList))
      {
        this.data.elemList[ele].splice(4,0,"Lunch Break")
      }
    })
  }
}
