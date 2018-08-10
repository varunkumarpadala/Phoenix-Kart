import { PhoenixService } from './../../shared/phoenix.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  data;
  constructor(private phoenixService:PhoenixService) { }

  ngOnInit() {

    this.data=this.phoenixService.getstatus();
  }

  status(cs,id){
    console.log(cs+'  '+id);
    this.phoenixService.updateOrder(cs,id).subscribe(data=>{
      console.log(data);
    });
  }

}
