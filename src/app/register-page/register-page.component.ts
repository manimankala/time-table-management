import { CommonModule, NgIf, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimeTableService } from '../time-table-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register-page.component.html',
  imports : [CommonModule,NgIf,ReactiveFormsModule],
  styleUrls: ['./register-page.component.scss']
})
export class RegistrationComponent {
  selectedFlow: 'student' | 'staff' = 'student';
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private service : TimeTableService) 
   {
    this.createForm();
   }

    createForm() {
      this.registrationForm = this.fb.group({
        // Personal Information
        name: ['', Validators.required],
        className: [''],
        section: [''],
        unqNo: [''],
    
        // Address Information as an object
        addressDetails: this.fb.group({
          street: [''],
          city: [''],
          zipCode: ['']
        }),
    
        // Contact Information as an object
        contactDetails: this.fb.group({
          phone: [''],
          countryCode: ['+91'],
          email: ['', [Validators.email]]
        }),
    
        // Work Information (staff only)
        subject: [''],
        role : this.selectedFlow == 'student' ? 'STUDENT' : 'TEACHER',
      });
    }

  selectFlow(flow: 'student' | 'staff') {
    this.selectedFlow = flow;

    // Reset work-related fields when switching to student
    if (flow === 'student') {
      this.registrationForm.patchValue({
        subject: '',
        designation: '',
        department: ''
      });
    }
  }

  onSubmit() {
    this.registrationForm.patchValue({
      role: this.selectedtab == 'STUDENT' ? 'STUDENT' : 'TEACHER',
      className: this.selectedtab == 'STUDENT' ? this.registrationForm.value.class : null,
      section : this.selectedtab == 'STUDENT' ? this.registrationForm.value.section : null,
    });
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.service.registerUser(formData).subscribe((response : any) => {
        console.log("Registration successful", response);
        this.service.snackBarOpen("Registration successful","OK")
        this.registrationForm.reset()
      })
    }
  }

  selectedtab : any = "STUDENT"

  classes = [
    { name : "BTech",  value : "B_TECH"},
    { name : "MTech",  value : "M_TECH"},
    { name : "MBA",  value : "MBA"},
    { name : "PhD",  value : "PHD"}
  ]

  onClassChange(event : any){
    this.registrationForm.patchValue({
      class : event.target.value
    })
  }

  sections = [
    { name : "A",  value : "A"},
    { name : "B",  value : "B"},
    { name : "C",  value : "C"},
    { name : "D",  value : "D"},
    { name : "E",  value : "E"},
  ] 

  onSectionChange(event : any){
    this.registrationForm.patchValue({
      section : event.target.value
    })
  }
  semesters = [
    { name : "S1",  value : "S1"},
    { name : "S2",  value : "S2"},
    { name : "S3",  value : "S3"},
    { name : "S4",  value : "S4"},
    { name : "S5",  value : "S5"},
    { name : "S6",  value : "S6"},
    { name : "S7",  value : "S7"},
    { name : "S8",  value : "S8"}
  ]  
  onSemesterChange(event : any){
    this.registrationForm.patchValue({
      semester : event.target.value
    })
  }
}
