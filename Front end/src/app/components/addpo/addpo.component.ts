import { Router } from '@angular/router';
import { EditpoComponent } from './../editpo/editpo.component';
import { PhoenixService } from './../../shared/phoenix.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Excess } from '../../excess';


@Component({
  selector: 'app-addpo',
  templateUrl: './addpo.component.html',
  styleUrls: ['./addpo.component.css']
})
export class AddpoComponent implements OnInit {
  private date;
  private datevar;
  private excess: Excess;
  constructor(private phoenixservice:PhoenixService, private router:Router) { }

  ngOnInit() {
    this.date=new Date(Date.now());

    this.datevar=(this.date.getDate()+5)+'-'+(this.date.getMonth()+1)+'-'+this.date.getFullYear();
    this.excess = this.phoenixservice.getter();
  }
  gotoConfirm(form:NgForm)
  {
    form.value['exdate']=(this.date.getDate()+5)+'-'+(this.date.getMonth()+1)+'-'+this.date.getFullYear();
    form.value['Odate']=(this.date.getDate())+'-'+(this.date.getMonth()+1)+'-'+this.date.getFullYear();
    this.phoenixservice.setForm(form.value);
    this.router.navigate(['/editpo']);
  }
}
