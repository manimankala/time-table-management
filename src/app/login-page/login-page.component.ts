import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TimeTableService } from '../time-table-service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  providers:[TimeTableService],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private timeTable : TimeTableService,
    private router : Router
  ){
  }

  payload : any = {
    "username": "",
    "password": "",
  }
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
  loginUser(){
    this.timeTable.loginValidate(this.payload).subscribe({
      next :  (res:any)=>{
        // localStorage.setItem("usr_id":res.data)
        const userId = res?.data?.userId;// Extract userId from the response
        const message = res?.Message;
        if (userId) {
          localStorage.setItem('userId', userId); // Store userId in localStorage
          localStorage.setItem('setAuth',String(true));
        }
        this.router.navigate(['/time-table'])
        this.timeTable.snackBarOpen("Login Successful","Ok")
      },
      error : (err)=>{
        this.timeTable.snackBarOpen("Login Failed Please Try Again","Ok")
      }
  })
  }

}
