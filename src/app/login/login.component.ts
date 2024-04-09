import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{

  loginForm!:FormGroup
common = inject(SharedService)
router = inject(Router)
  constructor(){

  }
 
  ngOnInit(): void {
    this.common.inLoginPage = true;
    this.loginForm = new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  login(){

let username = this.loginForm.get('userName')?.value;
let password = this.loginForm.get('password')?.value;
let credentials= this.common.loginCred;
for(let i in credentials){
  if(username === credentials[i].username && password === credentials[i].password){
    this.common.userRole = credentials[i].role;
    this.common.loginSuccess = true;
    this.router.navigate(['home'])
  }
}
  }
  ngOnDestroy(): void {
    this.common.inLoginPage = false
  }
}
