import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../models/contact';
import {Address} from '../../models/address';
import {UserLogin} from '../../models/userLogin';
import {User} from '../../models/user';
import {Store} from '@ngrx/store';
import {registerUserAction} from '../../ngrx/actions/user.actions';

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

  constructor(private formBuilder: FormBuilder,
              private store$: Store) { }

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
    if (this.newUserFormGroup.invalid) {
      return;
    }
    this.store$.dispatch(registerUserAction({ user: this.packageUser() }));
  }

  packageUser(): User {
    const address = {
      userId: null,
      address1: this.newUserFormGroup.get('address1').value,
      address2: this.newUserFormGroup.get('address2').value,
      city: this.newUserFormGroup.get('city').value,
      state: this.newUserFormGroup.get('state').value,
      country: this.newUserFormGroup.get('country').value,
      zipCode: this.newUserFormGroup.get('zipCode').value
    } as Address;

    const contact = {
      userId: null,
      address,
      email: this.newUserFormGroup.get('email').value
    } as Contact;

    const userLogin = {
      userId: null,
      username: this.newUserFormGroup.get('username').value,
      password: this.newUserFormGroup.get('password').value
    } as UserLogin;

    const user = {
      userId: null,
      firstName: this.newUserFormGroup.get('firstName').value,
      lastName: this.newUserFormGroup.get('lastName').value,
      contact,
      userLogin,
      userType: this.newUserFormGroup.get('userType').value
    } as User;

    return user;
  }
}
