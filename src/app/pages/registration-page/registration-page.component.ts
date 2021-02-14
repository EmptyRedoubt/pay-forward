import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  newUserFormGroup: FormGroup;
  stateList: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  userTypes: string[] = ['Vendor', 'Customer', 'Donor'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newUserFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      country: [''],
      zipCode: [''],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  get f() { return this.newUserFormGroup.controls; }


  submitForm() {
    // do the submit form stuffs
    if (this.newUserFormGroup.invalid) {
      return;
    }
  }
}
