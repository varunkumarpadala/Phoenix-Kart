

import { Excess2 } from './../../excess2';
import { Router } from '@angular/router';
import { Excess } from './../../excess';
import { PhoenixService } from './../../shared/phoenix.service';
import { NgForm } from '@angular/forms';
import { AddpoComponent } from './../addpo/addpo.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editpo',
  templateUrl: './editpo.component.html',
  styleUrls: ['./editpo.component.css']
})

export class EditpoComponent implements OnInit {
  private excess: Excess;
  private excess2: Excess2;
  constructor(private phoenixservice: PhoenixService, private router: Router) {}

  ngOnInit() {
    this.excess = this.phoenixservice.getter();
    this.excess2 = this.phoenixservice.getForm();
  }
  proceed(event: any) {
    event.preventDefault();
    console.log()
    this.phoenixservice.createOrder({
      'Oid': this.excess.Psid,
      'Psid': this.excess.Psid,
      'Sname': this.excess.Psname,
      'Pbrand': this.excess.Pbrand,
      'Pprice': this.excess.Pprice,
      'Person': this.excess2.contact,
      'Mobile': this.excess2.mobile,
      'Address': this.excess2.address,
      'Odate': this.excess2.Odate,
      'Exdate': this.excess2.exdate
    }).subscribe(data => {
      console.log(data);
    },
    err => {
      console.log('parimala not found.');
      console.log(err);
    });
  this.router.navigate(['/']);
  }
}

