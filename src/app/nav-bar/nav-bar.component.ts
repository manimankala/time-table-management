import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeTableService } from '../time-table-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public router : Router,private timeTableService : TimeTableService){

  }
  logout(){
    this.timeTableService.logout();
    this.timeTableService.snackBarOpen("Logged Out Successfully","Ok")
    this.router.navigate(['/login'])
  }
 }
