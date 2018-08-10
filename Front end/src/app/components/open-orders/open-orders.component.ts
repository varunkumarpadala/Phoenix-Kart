import { Router } from '@angular/router';
import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {
arrays;
  constructor(private phoenixservice:PhoenixService, private router:Router) { }

  ngOnInit() {
    this.phoenixservice.getopenOrders().subscribe(data=>{
      console.log(data);
      this.arrays=data['msg'];
  });
}

  changeStatus(data){
    this.phoenixservice.setstatus(data);
    this.router.navigate(['/status']);
  }
}
