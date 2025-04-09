import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../time-table-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  imports : [HttpClientModule,CommonModule],
  standalone: true,
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileData: any;// To store the profile data
  avatarInitials: string = '';

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit(): void {
    this.getProfileData()
  }

  getProfileData() {
    this.timeTableService.getProfileData({userId : localStorage.getItem('userId')})?.subscribe({
      next: (res:any) => {
        this.profileData = res.data[0]
      },
      error: (err) => {
        this.timeTableService.snackBarOpen("Error Please Try Again","ok")
      }
    }
    )
  }


}
