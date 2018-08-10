import { Router } from '@angular/router';
import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-orders',
  templateUrl: './complete-orders.component.html',
  styleUrls: ['./complete-orders.component.css']
})
export class CompleteOrdersComponent implements OnInit {
arrays;
  constructor(private phoenixservice:PhoenixService, private router:Router) { }

  ngOnInit() {

    this.phoenixservice.getcompletedOrders().subscribe(data=>{
      console.log(data);
      this.arrays=data['msg'];
  });
}

  changeStatus(data){
    this.phoenixservice.setstatus(data);
    this.router.navigate(['/status']);
  }
}

