import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user-service';
import { User } from './user';

@Component({
   selector: 'app-reactive',
   templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  isValidFormSubmitted = null;
  minNum = 15;
  maxNum = 50;
  userForm = this.formBuilder.group({
     num1: ['', [Validators.required, Validators.min(this.minNum)]],
     num2: ['', [Validators.required, Validators.max(this.maxNum)]],
     num3: ['', [Validators.required, Validators.min(this.minNum), Validators.max(this.maxNum)]]
  });
  user = new User();
  constructor(private formBuilder:FormBuilder, private userService: UserService) {
  }
  ngOnInit() {
  }
  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = this.userForm.value;
     this.userService.createUser(this.user);
     this.userForm.reset();
  }
  get num1() {
     return this.userForm.get('num1');
  }
  get num2() {
     return this.userForm.get('num2');
  }  
  get num3() {
     return this.userForm.get('num3');
  }    
} 