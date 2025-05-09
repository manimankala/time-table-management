import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  private BASE_URL = "http://localhost:8090/"

  constructor(private http : HttpClient,
    private snackBar : MatSnackBar
  ) {
  }
  loginValidate(payload : any){
    return this.http.post(`${this.BASE_URL}login/validate`,payload)
  }

  snackBarOpen(message : any,closingCommad : any){
    this.snackBar.open(message,closingCommad,{duration : 3000})
  }
  getProfileData(userId: any){
    if(!userId)
      return
    return this.http.put(`${this.BASE_URL}user/filter`,userId)
  }

  logout(){
    localStorage.clear();
  }

  registerUser(payload : any){
    return this.http.post(`${this.BASE_URL}user`,payload)
  }

  getTimetable(payload:any)
  {
    return this.http.put(`${this.BASE_URL}timetable/filter`,payload)
  }

  getTimeTableData(){
    let profileData = JSON.parse(JSON.stringify(localStorage.getItem('profileData')))
    let payload = {
      branch : profileData?.branch,
      className : profileData?.className,
      section : profileData?.section,
      semester : profileData?.semester,
    }
    return this.http.put(`${this.BASE_URL}timetable/filter`,payload)
  }
}
