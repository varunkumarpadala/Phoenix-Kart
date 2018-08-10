import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
arrays;
  constructor(private phoenixservice:PhoenixService, private router:Router) { }

  ngOnInit() {
    this.phoenixservice.getOrders().subscribe(data=>{
      console.log(data);
      this.arrays=data['msg'];
  });

  }

  changeStatus(data){
    this.phoenixservice.setstatus(data);
    this.router.navigate(['/status']);
  }
}
