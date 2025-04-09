import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './register-page.component.html',
  imports : [CommonModule,NgIf],
  styleUrls: ['./register-page.component.scss']
})
export class RegistrationComponent {
  selectedFlow: 'student' | 'staff' = 'student';
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      // Personal Information
      name: ['', Validators.required],
      class: [''],
      section: [''],
      rollNo: [''],

      // Address Information
      street: [''],
      city: [''],
      pincode: [''],
      phoneNo: [''],
      email: ['', [Validators.email]],

      // Work Information (staff only)
      subject: [''],
      designation: [''],
      department: ['']
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
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  }

  selectedtab : any = "STUDENT"
}
