import { PhoenixService } from './../../shared/phoenix.service';
import { FormsModule, NgForm } from '@angular/forms';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  array;
  private login;
  constructor(private phoenixservice:PhoenixService, private router:Router) { }

  ngOnInit() {
  }
  
  submitLogin(login:NgForm)
  {
    console.log(login.value);
    this.phoenixservice.getUsers(login).subscribe(data=>{
      console.log(data);
      this.array=data;
      if(this.array.result=='Empty' || this.array.result=='Oops' || this.array.result=='User'){
        alert('Enter valid login Details...!');
      }
      if(this.array.result=='Admin'){
        this.router.navigate(['/admin']);
      }
      // if(this.array.result=='User'){
      //   this.router.navigate(['/']);
      // }
    },
    err=>{
      console.log(err);
    });
  } 
}
