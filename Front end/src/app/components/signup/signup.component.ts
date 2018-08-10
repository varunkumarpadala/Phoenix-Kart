import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser(frm){
    console.log(frm.value);
  }
  isvalid=true;
  constructor(fb: FormBuilder,private router:Router, private phoenixService:PhoenixService) {
   }

  ngOnInit() {
    
  }

  // registerUser(form:NgForm){
  //   this.phoenixService.createUser(form).subscribe(data=>{
  //     console.log(data);
  //     this.router.navigate(['/login']);
  //     console.log(form.value);
  //   },
  //   err=>{
  //     console.log(err);
  //   });
  // }

  // validatePasswords(pass,pass2){
  //   if(pass==pass2)
  //   {
  //     console.log('ok');
  //     this.isvalid=true;
  //   }
  //   else{
  //     console.log('Not ok');
  //     this.isvalid=false;
  //   }
  // }
}