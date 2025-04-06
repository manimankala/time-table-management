import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TimeTableServiceService } from '../time-table-service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  providers:[TimeTableServiceService],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private timeTable : TimeTableServiceService,
    private router : Router
  ){
  }

  payload : any = {
    "username": "",
    "password": "",
  }

  loginUser(){
    this.timeTable.loginValidate(this.payload).subscribe({
      next :  (res)=>{
        this.router.navigate(['/profile'])
        this.timeTable.snackBarOpen("Login Successfull","Ok")
      },
      error : (err)=>{
        this.timeTable.snackBarOpen("Login Failed Please Try Again","Ok")
      }
  })
  }

}
